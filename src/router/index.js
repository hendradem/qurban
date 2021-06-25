import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/HomePage.vue";
import Sapi from "@/pages/Sapi.vue";
import Kambing from "@/pages/Kambing.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/sapi",
      name: "sapi",
      component: Sapi,
    },
    {
      path: "/kambing",
      name: "kambing",
      component: Kambing,
    },
  ],
  mode: "history",
});
