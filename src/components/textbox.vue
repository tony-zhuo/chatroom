<template>
  <b-form-textarea
    id="textarea"
    class="textbox"
    v-model="msg"
    placeholder="Enter something..."
    rows="3"
    max-rows="6"
    @keydown.enter="sendMsg()"
  ></b-form-textarea>
</template>

<script>
export default {
  name: "textbox",
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    sendMsg() {
      let data = this.msg;
      if (data) {
        this.msg = "";
        this.$emit("sendMsg", data);
      }
    }
  },
  components: {}
};
</script>

<style lang="scss">
@import "src/scss/textbox.scss";
</style>
