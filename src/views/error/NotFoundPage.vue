<template>
  <div class="container404">
    <div>
      <div>404 Not Found</div>
      <div class="message">페이지를 찾을수 없습니다.</div>
      <div class="mt10"><v-btn depressed color="error" @click="home">홈으로</v-btn></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/OrderList");
    },
  },
};
</script>

<style lang="scss" scoped>
.container404 {
  position: fixed;
  background: #f5f5f5;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & .message {
    color: rgb(44, 44, 44);
    font-size: 3rem;
    font-weight: 100;
    margin-top: 10px;
  }
  & .icon {
    text-align: center;
    & .color {
      color: Tomato;
    }
  }
}
</style>
