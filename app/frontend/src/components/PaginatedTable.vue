<template>
  <loadable-area :loading="loading">
    <div class="pagination-header">
      <div>
        <div>Show</div>
        <div>
          <select v-model="size">
            <option v-for="(size, index) in sizes" :key="index" :value="size">
              {{ size }}
            </option>
          </select>
        </div>
        <div>entries</div>
      </div>
    </div>
    <div class="table-wrap">
      <table class="table" cellspacing="0">
        <thead class="table-head">
          <tr>
            <th v-if="showIndex"></th>
            <th v-for="(col, index) in colNames" :key="index">
              {{ col }}
            </th>
            <th v-if="edit"></th>
            <th v-if="del"></th>
            <th v-if="view"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in content" :key="index">
            <td v-if="showIndex">
              {{ page * size + index + 1 }}
            </td>
            <template v-if="index < size">
              <td v-for="(cell, index) in colData" :key="index">
                {{ row[cell] }}
              </td>
            </template>
            <td v-if="edit">
              <button type="button" style="background: #3f51b5;" @click="editRecord(row)">
                Edit
              </button>
            </td>
            <td v-if="del">
              <button type="button" style="background: #ba000d" @click="delRecord(row)">
                Delete
              </button>
            </td>
            <td v-if="view">
              <button type="button" style="background: #087f23" @click="viewRecord(row)">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination-footer">
      <div>
        <div>Showing {{ page * size + 1 }} to {{ Math.min(page * size + size, max) }} of entries {{ max }}</div>
      </div>
      <div>
        <div>
          <button v-if="page > 0" type="button" @click="previous">
            Previous
          </button>
        </div>
        <div>
          <select v-model="page">
            <option v-for="i in pages()" :key="i" :value="i - 1">
              {{ i }}
            </option>
          </select>
        </div>
        <div>
          <button v-if="page != pages() - 1" type="button" @click="next">
            Next
          </button>
        </div>
      </div>
    </div>
  </loadable-area>
</template>

<script>
import LoadableArea from "./LoadableArea.vue";
import axios from "axios";

export default {
  name: "PaginatedTable",
  components: {
    LoadableArea,
  },
  props: {
    colNames: Array,
    colData: Array,
    showIndex: {
      type: Boolean,
      required: false,
      default: true,
    },
    edit: {
      type: Boolean,
      required: false,
      default: false,
    },
    del: {
      type: Boolean,
      required: false,
      default: false,
    },
    view: {
      type: Boolean,
      required: false,
      default: false,
    },
    fetchURL: String,
    pageNumberParamName: { type: String, default: "page" },
    pageSizeParamName: { type: String, default: "size" },
  },
  data() {
    return {
      content: [],
      max: 0,
      size: 10,
      sizes: [10, 25, 50],
      page: 0,
      pages() {
        return Math.ceil(this.max / this.size);
      },
      loading: false,
    };
  },
  watch: {
    size: function() {
      if (this.size + this.page > this.max) {
        this.page = 0;
      }
      this.fetchData();
    },
    page: function() {
      this.fetchData();
    },
  },
  methods: {
    editRecord(record) {
      this.$emit("on-edit", record);
    },
    delRecord(record) {
      this.$emit("on-delete", record);
    },
    viewRecord(record) {
      this.$emit("on-view", record);
    },
    toggleLoad(loading) {
      this.$emit("loading", loading);
    },
    getParams() {
      return {
        [this.pageNumberParamName]: this.page,
        [this.pageSizeParamName]: this.size,
      };
    },
    fetchData() {
      this.loading = true;
      const URL = `${this.fetchURL}?${this.pageNumberParamName}=${this.page}&${this.pageSizeParamName}=${this.size}`;
      axios.get(URL).then((res) => {
        const { count, rows } = res.data;
        if (count && rows) {
          this.max = count;
          this.content = rows;
          console.log(rows);
        }
        this.loading = false;
      });
    },
    next() {
      this.page++;
    },
    previous() {
      this.page--;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
$width: 100%;
$bgDark: #555;
$bgLight: #444;
$bgTableHead: #333338;
$border: 1px solid #666;
$cellPadd: 4px 0;
$tableHeight: 366px;

.pagination-header,
.pagination-footer,
.table {
  width: $width;
}

.pagination-header,
.pagination-footer,
.pagination-header > div,
.pagination-footer > div {
  display: flex;
  flex-direction: row;
  height: 30px;
  align-items: center;
}

.pagination-header > div > div {
  margin: 0 3px;
}

.table-wrap {
  width: $width;
  margin: 4px 0;
  height: 366px;
  max-height: 366px;
  overflow-y: auto;
}

.table {
  thead th {
    position: sticky;
    top: 0;
  }

  > {
    thead > tr > th {
      background-color: $bgTableHead;
      padding: $cellPadd;
    }

    tbody > tr {
      > td {
        text-align: center;
        padding: $cellPadd;
      }

      &:nth-child(even) > td {
        background: $bgDark;
        border-top: $border;
        border-bottom: $border;
      }

      &:nth-child(odd) > td {
        background: $bgLight;
      }
    }
  }
}

.pagination-footer {
  justify-content: space-between;

  > div:last-child > div {
    margin: 0 4px;
  }
}
</style>
