<template>
  <div class="screenlet">
    <div>
      <slot>
        Empty Screenlet
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Screenlet",
};
</script>
<style lang="scss">
.screenlet {
  width: 90%;
  margin: 20px 5%;
  background: #444;
  display: block;
  > div {
    width: 90%;
    height: 98%;
    margin: 1% 5%;
  }
}
</style>
