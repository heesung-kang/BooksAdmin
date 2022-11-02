<template>
  <footer>
    <div class="copyright">Copyright © 2022 InstaPay - All Rights Reserved.</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding-left: 40px;
  background-color: #333333;
  .company {
    color: #ea5959;
  }
  .copyright {
    color: #aaaaaa;
    line-height: 50px;
  }
}
@include mobile {
  .copyright {
    text-align: center;
  }
}
</style>
