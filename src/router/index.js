import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import header from "@/components/header";
import login from "@/views/login";
import signup from "@/views/signup";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    components: {
      header: header,
      mainbody: login
    },
    meta: {
      title: "login"
    }
  },
  {
    path: "/signup",
    name: "signup",
    components: {
      header: header,
      mainbody: signup
    },
    meta: {
      title: "signup"
    }
  },
  {
    path: "/",
    name: "Home",
    components: {
      header: header,
      mainbody: Home
    },
    meta: {
      title: "chatroom"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta ? to.meta.title : document.title;
  store.dispatch("user/getProfile");
  if (to.name === "Home") {
    if (localStorage.Authorization) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
