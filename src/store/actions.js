import * as APICalls from "src/store/api";
import { logJSONResponse, setAuthCredentials } from "src/store/utils";
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
      throw new Error(e.response.status);
    }
  },

  async registerUser({ commit }, { username, email, password1, password2 }) {
    try {
      console.log(username);
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
      throw new Error(e);
    }
  }
};

export default actions;
