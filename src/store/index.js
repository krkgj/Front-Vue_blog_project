import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  mutations: {
    changeDrawerState(state, caller) {
      if (caller.caller === "appBar") state.drawer = true;
      // else if (caller.caller === "navigation" && state.drawer == true)
      //   state.drawer = false;
      console.log(state.drawer);
      console.log(caller.caller);
    },
  },
  actions: {},
  modules: {},
});
