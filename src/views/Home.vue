<template>
  <div class="home">
    <section ref="chatArea" class="chat-area">
      <chatbox
        :key="item.uid"
        v-for="item in Mseeages"
        :message="item.text"
        :author="item.user.email"
        :user_id="me"
        :time="item.createdAt"
      />
    </section>
    <textbox @sendMsg="sendMsg" />
  </div>
</template>

<script>
import textbox from "@/components/textbox.vue";
import chatbox from "@/components/chatbox";

export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    Mseeages: {
      get() {
        return this.$store.state.msg.messages;
      }
    },
    me: {
      get() {
        return this.$store.state.user.email;
      }
    }
  },
  methods: {
    sendMsg(data) {
      this.$store.dispatch("msg/send", data);
    }
  },
  components: {
    textbox,
    chatbox
  },
  mounted() {
    this.$store.dispatch("msg/getAllMsg");
    this.sockets.subscribe("sendMsg", data => {
      // eslint-disable-next-line no-console
      console.log(data.Msg);
      // eslint-disable-next-line no-console
      this.$store.commit("msg/new", { data });
    });
  }
};
</script>

<style lang="scss">
@import "src/scss/home.scss";
</style>
