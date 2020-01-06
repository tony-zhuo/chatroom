<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="warning">
      <b-navbar-brand href="#">AImazing</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <strong>User</strong>
          </template>
          <b-dropdown-item href="#" @click="SignOut()"
            >Sign Out</b-dropdown-item
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
// import store from "@/store";

export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    SignOut() {
      this.$store.dispatch("user/SignOut");
    }
  },
  computed: {},
  components: {}
};
</script>
