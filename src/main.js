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
instance.interceptors.request.use(function(req) {
  if (store.state.user !== null && store.state.user.key) {
    req.headers["Authorization"] = `Token ${store.state.user.key}`;
  }
  return req;
});

/**
 * Pretty messy function that pushes the user to a login screen on an unauthorized
 * response from the backend. This will clear the auth credentials from local storage
 * and the store. django-rest-auth unfortunately throws a 401 for any request that it
 * cannot authenticate when it requires no permissions meaning that the backend
 * cannot relate the given credentials to any user. Thus, we reset the user's authentication
 * status. This scenario should only happen when testing and dropping a db with tokens still
 * in local storage, or if the client modifies the authorization token
 */
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    let currentRouteName = router.currentRoute.name;

    if (error.response.status === 401) {
      store.commit("LOGOUT_USER");
      if (currentRouteName !== "login") router.push({ name: "login" });
    }

    return Promise.reject(error);
  }
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

export default instance;
export { timeFormatter };
