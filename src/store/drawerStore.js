const drawerStore = {
  namespaced: true,
  state: {
    drawer: false,
  },
  getters: {
    GET_DRAWER_STATE: (state) => state.drawer,
  },
  mutations: {
    SET_DRAWER_STATE(state, payload) {
      state.drawer = payload.isDrawer;
    },
  },
  actions: {},
};

export default drawerStore;
