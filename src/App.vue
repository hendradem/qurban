<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
import "@/vendor.js";

export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

body {
  font-family: "Inter", sans-serif;
  background-color: #fff;
}
</style>
