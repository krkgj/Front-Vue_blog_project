import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// import PostStore from "@/store/postStore.js";
import NavStore from "@/store/navStore.js";
import DrawerStore from "@/store/drawerStore.js";
import PostStore from "@/store/postStore.js";

export default new Vuex.Store({
  modules: { NavStore, DrawerStore, PostStore },
});
