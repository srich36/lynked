import Vue from "vue";
import Vuex from "vuex";
import * as APICalls from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async createPost(state, params) {
      const { title, description, tags, link } = params;
      try {
        let data = await APICalls.createPost(link, title, description, tags);
        if (process.env.NODE_ENV === "development") {
          console.log("Create post response");
          console.log(data);
        }
      } catch (e) {
        throw new Error(e);
      }
    }
  },
  modules: {}
});
