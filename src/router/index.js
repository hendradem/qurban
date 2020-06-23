import Vue from 'vue'
import Router from 'vue-router'
import Documentation from '@/components/Documentation.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)


export default new Router({
    routes : [
        { 
          path : '/', 
          name : 'home',
          component : Home
        },
        { 
          path : '/dokumentasi', 
          name : 'dokumentasi',
          component : Documentation
        }
    ],
    mode: 'history'
})
