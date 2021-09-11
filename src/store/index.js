import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    categoryList: [],
  },
  mutations: {
    updateDrawer(state, data) {
      state.drawer = data.data;
    },
    setCategoryList(state, categoryList) {
      state.categoryList = categoryList;
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
