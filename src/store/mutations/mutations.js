import * as types from "src/store/mutations/mutationNames";

const mutations = {
  [types.UPDATE_POST_PAGE](state, page) {
    state.postPage = page;
  },
  [types.LOGOUT_USER](state) {
    localStorage.removeItem("username");
    localStorage.removeItem("key");
    state.user = null;
  },
  [types.LOGIN_USER](state, { key, username }) {
    state.user = {
      key,
      username
    };
  },

  [types.SET_POSTS](state, posts) {
    state.posts = posts;
  },
  [types.SET_POST_COUNT](state, count) {
    state.postReturnedCount = count;
  }
};

export default mutations;
