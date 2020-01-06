import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";
import VueSocketIO from "vue-socket.io";

axios.defaults.baseURL = process.env.VUE_APP_LOCAL;
axios.defaults.headers.common["Authorization"] =
  "Bearer " + (localStorage.Authorization || "");
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(
  new VueSocketIO({
    debug: true,
    // 服务器端地址
    connection: "http://localhost:3001",
    vuex: {}
  })
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
