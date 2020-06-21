import * as APICalls from "src/store/api";

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
      localStorage.setItem("key", key);
      localStorage.setItem("username", username);
    } catch (e) {
      throw new Error(e.response.status);
    }
  }
};

export default actions;
