import Vue from "vue";
import Vuex from "vuex";
import * as APICalls from "./api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async createPost(state, params) {
      console.log(params);
      const { title, description, tags, link } = params;
      try {
        let data = await APICalls.createPost(link, title, description, tags);
        console.log("Request succeeded");
        console.log(data);
      } catch (e) {
        console.log("Request failed");
        console.log(e);
      }
    }
  },
  modules: {}
});
