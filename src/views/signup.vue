<template>
  <div>
    <b-container>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="`type-email`">email :</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="`type-email`"
            type="email"
            v-model="email"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="`type-password`">password :</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="`type-password`"
            type="password"
            v-model="password"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-button variant="outline-warning" @click="gotoLogin()">登入</b-button>
      <b-button variant="warning" @click="signup()">註冊</b-button>
    </b-container>
  </div>
</template>

<script>
// import store from "@/store";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("user/signup", {
        email: this.email,
        password: this.password
      });
    },
    gotoLogin() {
      this.$router.push({
        name: "login"
      });
    }
  },
  computed: {},
  components: {}
};
</script>
