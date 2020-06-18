import Vue from "vue";
import Vuex from "vuex";
import * as APICalls from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    postPage: 1
  },
  mutations: {
    updatePostPage(state, page) {
      state.postPage = page;
    }
  },
  actions: {
    async createPost(state, params) {
      const { title, description, tags, link } = params;
      try {
        let data = await APICalls.createPost(link, title, description, tags);
        if (process.env.NODE_ENV === "development") {
          console.log(data);
        }
      } catch (e) {
        throw new Error(e);
      }
    }
  },
  modules: {}
});
