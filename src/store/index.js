import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: false,
    click: false,
  },
  mutations: {
    updateDrawer(state, data) {
      state.show = data.data;
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
