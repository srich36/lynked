import * as types from "src/store/mutations/mutationNames";
import { findPostById } from "src/store/utils";

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
  },
  [types.SET_POST_VOTE_COUNT](state, { postId, voteCount }) {
    const post = findPostById(state.posts, postId);
    post.vote_count = voteCount;
  },
  [types.SET_POST_VOTE_VALUE](state, { postId, value }) {
    const post = findPostById(state.posts, postId);
    post.current_user_vote_value = value;
  }
};

export default mutations;
