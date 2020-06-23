<template>
  <div id="app">
    <Navbar/>
    <Header/>
    <Qurban/>
    <Step/>
    <Request/>
    <Footer/>
  </div>
</template>

<script>

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Qurban from './components/Qurban.vue'
import Step from './components/Step.vue'
import Request from './components/Request.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar, Header, Qurban, Step, Request, Footer
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
