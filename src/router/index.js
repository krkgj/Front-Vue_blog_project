import Vue from "vue";
import VueRouter from "vue-router";
// import Blog from "@/App.vue";
import BlogPostList from "@/views/BlogPostList";
import BlogWriting from "@/views/BlogWriting";
import BlogPostContent from "@/views/BlogPostContent";

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
  {
    path: "/postContent",
    name: "BlogPostContent",
    component: BlogPostContent,
    props: true,
  },
  { path: "*", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
