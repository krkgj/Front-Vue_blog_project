import Vue from "vue";
import VueRouter from "vue-router";
// import Blog from "@/App.vue";
import BlogPostList from "@/views/BlogPostList";
import BlogWriting from "@/views/BlogWriting";

Vue.use(VueRouter);

const NotFound = { template: "<div>Not Found</div>" };
const routes = [
  {
    path: "/",
    component: BlogPostList,
  },
  {
    path: "/writing",
    component: BlogWriting,
  },
  { path: "*", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
