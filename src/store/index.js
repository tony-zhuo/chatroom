import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import msg from "./modules/message";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    msg
  }
});
