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
@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700;800;900&display=swap);

body {
  font-family: "Nunito Sans", sans-serif;
  background-color: #fff;
}
</style>
