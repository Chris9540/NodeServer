<template>
  <div class="screenlet">
    <template v-if="title">
      <div class="screenlet-title">
        <h5>{{ title }}</h5>
      </div>
    </template>
    <div class="screenlet-body">
      <div>
        <slot>
          Empty Screenlet
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Screenlet",
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss">
.screenlet {
  width: 90%;
  margin: 20px 5%;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.7);
}
.screenlet-title {
  height: 32px;
  width: 100%;
  border-bottom: 2px solid orangered;
  background: #333;
  > h5 {
    line-height: 32px;
    width: 50%;
    min-width: 500px;
    padding-left: 4px;
  }
}
.screenlet-body {
  background: #444;
  > div {
    width: 90%;
    height: 98%;
    margin: 1% 5%;
  }
}
</style>
