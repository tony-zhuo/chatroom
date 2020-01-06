// import userAPI from "@/service/user";
import axios from "axios";
// import CryptoJS from "crypto-js";
// import base64 from "crypto-js/enc-base64";
import router from "@/router";

// const encrypt = text => {
//   var key = base64.parse(process.env.VUE_APP_KEY); //为了避免补位，直接用16位的秘钥
//   var iv = CryptoJS.enc.Latin1.parse("1234567890123456"); //16位初始向量
//   var encrypted = CryptoJS.AES.encrypt(text, key, {
//     iv: iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.ZeroPadding
//   });
//   return btoa(
//     JSON.stringify({
//       iv: 1234567890123456,
//       value: encrypted.toString(),
//       mac: CryptoJS.SHA512(iv).toString()
//     })
//   );
// };

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
    user_id: "",
    email: "",
    loginState: false
  },
  getters: {},
  actions: {
    login({ commit }, data) {
      let result, loginData;

      result = http.post("user/login", data);

      result.then(res => {
        if (res.data.status === "success") {
          localStorage.Authorization = res.data.token;
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + (localStorage.Authorization || "");
          loginData = "true";
          router.push({ name: "Home" });
        } else {
          loginData = "false";
        }
        commit("checkUser", res.data.data.user);
      });
      return loginData;
    },
    signup({ commit }, data) {
      let result, loginData;
      result = http.post("user/signup", data);

      result.then(res => {
        if (res.data.status === "success") {
          localStorage.Authorization = res.data.token;
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + (localStorage.Authorization || "");
          loginData = "true";
          router.push({ name: "Home" });
        } else {
          loginData = "false";
        }
        commit("checkUser", res.data.data.user);
      });

      return loginData;
    },
    getProfile({ commit }) {
      const result = http.get("user/me");
      result.then(res => {
        commit("checkUser", res.data.data.user);
      });
      return result;
    },
    SignOut({ commit }) {
      return new Promise(resolve => {
        commit("reDefault");
        router.push({ name: "login" });
        resolve();
      });
    }
  },
  mutations: {
    checkUser(state, data) {
      state.loginState = true;
      state.email = data.email;
      state.user_id = data._id;
    },
    reDefault(state) {
      state.loginState = false;
      state.email = "";
      state.user_id = "";
      localStorage.Authorization = "";
      axios.defaults.headers.common["Authorization"] = "Bearer ";
    }
  }
};
