<template>
  <screenlet>
    <paginated-table
        :colNames="['First Name', 'Last Name', 'Email']"
        :colData="['firstName', 'lastName', 'emailId']"
        :edit="true"
        :del="true"
        :view="true"
        :fetchURL="{url: 'http://localhost:8080/api/employee/pagedList'}"
        @on-edit="editRecord"
        @on-delete="deleteRecord"
    />
  </screenlet>
</template>

<script>
import PaginatedTable from "../components/PaginatedTable.vue";
import Screenlet from "../components/Screenlet.vue";
export default {
  name: "ListEmployees",
  components: {
    PaginatedTable,
    Screenlet,
  },
  methods: {
    editRecord(record) {
      console.log("EDIT RECORD", record);
    },
    deleteRecord(record) {
      console.log("DELETE RECORD", record);
    },
  },
}
</script>

<style scoped>

</style>
