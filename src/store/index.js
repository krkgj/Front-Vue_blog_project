import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    click: false,
  },
  mutations: {
    updateDrawer(state, data) {
      state.drawer = data.data;
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
