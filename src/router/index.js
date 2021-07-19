import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/HomePage.vue";
import Landing from "@/pages/LandingPage.vue";
import DetailPage from "@/pages/DetailPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/detail/:tipe",
      name: "detail",
      component: DetailPage,
    },
  ],
  mode: "history",
});
