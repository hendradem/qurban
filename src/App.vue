<template>
  <div id="app">
    <Navbar/>
    <router-view>  </router-view>
    <Footer/>
  </div>
</template>

<script>


import '@/vendor.js'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'



export default {
  name: 'App',
  components: {
    Navbar, Footer
  }
}
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700;800;900&display=swap);

  body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: #fff;
    height: 5500px;
  }
</style>
