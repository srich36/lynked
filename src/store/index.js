import Vue from "vue";
import Vuex from "vuex";
import mutations from "src/store/mutations/mutations";
import actions from "src/store/actions";
import state from "src/store/state";
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {}
});
