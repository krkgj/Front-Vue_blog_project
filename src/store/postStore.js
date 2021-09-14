const postStore = {
  namespaced: true,
  state: {},
  getters: {
    GET_POST_LIST: (state) => state.postList,
  },
  mutations: {
    SET_POST_LIST: (state, payload) => {
      state.postList = payload;
    },
  },
  actions: {},
};

export default postStore;
