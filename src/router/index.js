import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "@/App.vue";

Vue.use(VueRouter);
const NotFound = { template: "<div>Not Found</div>" };
const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/",
    component: Blog,
  },
  {
    path: "/",
    component: Home,
  },
  { path: "*", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
