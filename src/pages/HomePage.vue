<template>
  <div>
    <Header />
    <h1> Hello World! </h1>
  </div>
</template>

<script>
import "@/vendor.js";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
