import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);
const timeFormatter = new TimeAgo("en-US");

const baseURL = "http://127.0.0.1:8000/v1";
const instance = axios.create({
  baseURL: baseURL
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

export default instance;
export { timeFormatter };
