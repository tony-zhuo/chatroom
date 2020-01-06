import axios from "axios";
// import router from "@/router";

const http = {
  get: (path, data) => {
    var tmp = [];
    data = data || {};

    for (let i = 0; i < data.length; i++) {
      var val =
        typeof data[i] == "string" || typeof data[i] == "number"
          ? data[i]
          : data[i]
          ? data[i].join(",")
          : "";
      tmp.push(i + "=" + val);
    }

    return axios.get(
      process.env.VUE_APP_PATH +
        "/" +
        path +
        (tmp.length > 0 ? "?" + tmp.join("&") : "")
    );
  },
  post: (path, data) => {
    return axios.post(process.env.VUE_APP_PATH + "/" + path, data);
  }
};

export default {
  namespaced: true,
  state: {
    messages: []
  },
  getters: {},
  actions: {
    getAllMsg({ commit }) {
      let result = http.get("message/all");
      result.then(data => {
        if (data.data.status === "success") {
          commit("getMsg", data.data);
        }
      });
    },
    // eslint-disable-next-line no-unused-vars
    send({ commit }, data) {
      // eslint-disable-next-line no-unused-vars
      let result = http.post("message/send", {
        text: data
      });
    }
  },
  mutations: {
    getMsg(state, data) {
      state.messages = data.data.Msgs;
    },
    new(state, data) {
      // eslint-disable-next-line no-console
      // console.log(data);
      state.messages.push(data.data.Msg);
    }
  }
};
