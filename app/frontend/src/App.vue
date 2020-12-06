<template>
  <layout>
    <router-view/>
  </layout>
</template>

<script>


import Layout from "@/components/Layout";
export default {
  name: "App",
  components: {
    Layout

  },
  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style>
* {
  outline: none;
  padding: 0;
  margin: 0;
  font-size: 1em;
  color: white;
}
body {
  height: 100vh;
  background: #666666;
}
*:hover,
*:active {
  outline: none;
}
input,
select {
  background: #333;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
button {
  color: white;
  background: orangered;
  border: none;
  padding: 3px 6px;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
  transition: all linear 0.2s;
  font-size: 1.03em;
}
button:hover {
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  filter: brightness(120%);
}
</style>
