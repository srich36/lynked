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
  }
};

export default mutations;
