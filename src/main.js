import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Header from './components/Header'
import './vendor.js'


Vue.use(VueRouter)

const router = new VueRouter({
  routes : [
    {path: '/' , component: Header}
  ],
  mode : history
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
