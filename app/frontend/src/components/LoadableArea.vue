<template>
  <div class="loadable">
    <div class="wrap">
      <slot>
        Error
      </slot>
    </div>
    <div class="overlay" v-if="loading">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadableArea",
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.loadable {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.wrap,
.overlay {
  grid-column: 1/2;
  grid-row: 1/2;
  width: 100%;
  height: 100%;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
}
.loader {
  border: 4px solid #999;
  border-top: 4px solid orangered;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  animation: spin 1s linear infinite;
  margin: auto;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
