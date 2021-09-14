const navStore = {
  namespaced: true,
  state: {
    categoryList: [],
  },
  getters: {
    GET_CATEGORY_LIST: (state) => state.categoryList,
  },
  mutations: {
    SET_CATEGORY_LIST(state, payload) {
      state.categoryList = payload.list;
    },
  },
  actions: {},
};

export default navStore;
