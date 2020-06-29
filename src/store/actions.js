import * as APICalls from "src/store/api";
import {
  logJSONResponse,
  setAuthCredentials,
  logErrorResponse
} from "src/store/utils";

const actions = {
  async createPost({ commit }, params) {
    const { title, description, tags, link } = params;
    try {
      let data = await APICalls.createPost(link, title, description, tags);
      if (process.env.NODE_ENV === "development") {
        console.log(data);
      }
      commit("UPDATE_POST_PAGE", 1);
    } catch (e) {
      throw new Error(e);
    }
  },

  async loginUser({ commit }, { username, password }) {
    try {
      let data = await APICalls.login(username, password);
      if (process.env.NODE_ENV === "development") {
        console.log(data);
      }
      const key = data.data.key;
      commit("LOGIN_USER", { key, username });
      setAuthCredentials(key, username);
    } catch (e) {
      logErrorResponse(e);
      throw e;
    }
  },

  async postVote(_, { postId, value }) {
    try {
      await APICalls.vote(postId, value);
    } catch (e) {
      logErrorResponse(e);
      throw e;
    }
  },

  async registerUser({ commit }, { username, email, password1, password2 }) {
    try {
      let data = await APICalls.registerUser(
        username,
        email,
        password1,
        password2
      );
      const key = data.data.key;

      logJSONResponse(data);
      commit("LOGIN_USER", { key, username });
      setAuthCredentials(key, username);
    } catch (e) {
      logErrorResponse(e);
      throw e;
    }
  },

  async searchPosts({ commit }, { text, tags, offset, limit }) {
    try {
      let data = await APICalls.searchPosts(text, tags, offset, limit);
      const posts = data.data.posts;
      commit("SET_POSTS", posts);
      commit("SET_POST_COUNT", data.data.post_count);
    } catch (e) {
      logErrorResponse(e);
      throw e;
    }
  }
};

export default actions;
