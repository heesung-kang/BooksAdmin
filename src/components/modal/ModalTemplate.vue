<template>
  <div class="modal-wrap">
    <div @click="close" class="close"><v-icon>mdi-window-close</v-icon></div>
    <slot name="head"></slot>
    <div class="line"></div>
    <div class="body">
      <slot name="body"></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wrap {
  padding: 25px 25px 50px;
}
.close {
  position: absolute;
  right: 22px;
  top: 22px;
  cursor: pointer;
  & img {
    width: 23px;
  }
}
.subject {
  margin-bottom: 5px;
}
.body {
  padding: 20px 0 0 0;
}
.line {
  margin-top: 10px;
  border-top: 1px solid #000;
}
</style>
