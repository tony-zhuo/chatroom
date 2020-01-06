<template>
  <div class="chat">
    <strong class="name" v-if="author !==user_id">{{author}}</strong>
    <strong class="name chat--out" v-else>{{'me'}}</strong>

    <div :class="author ===user_id?'chat--out':''">
      <em v-if="author ===user_id" class="time">{{time}}</em>
      <span
        class="message"
        :class="{ 'message-out': author === user_id, 'message-in': author !== user_id }"
      >{{ message }}</span>
      <em v-if="author !==user_id" class="time time--author">{{time}}</em>
    </div>
  </div>
</template>

<script>
export default {
  name: "chatbox",
  data() {
    return {};
  },
  props: {
    message: {
      type: String
    },
    author: {
      type: String
    },
    time: {
      type: String
    },
    user_id: {
      type: String
    }
  },
  methods: {},
  components: {}
};
</script>

<style lang="scss">
@import "src/scss/chatbox.scss";
</style>
