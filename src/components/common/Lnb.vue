<template>
  <section class="lnb-wrap">
    <aside class="side-bar" :class="{ active: isActive }">
      <div class="pt26 logo"><img src="@/assets/images/logo.svg" alt="instaPay" /></div>
      <div class="system-name">서점용 도서 주문 시스템</div>
      <nav class="lnb">
        <ul @click="close">
          <li :class="{ active: activeStatus === 1 }"><router-link to="/PublisherList">출판사 리스트</router-link></li>
          <li :class="{ active: activeStatus === 2 }"><router-link to="/ShopList">서점 리스트</router-link></li>
        </ul>
      </nav>
    </aside>
    <div class="dim" @click="close" :class="{ active: isActive }"></div>
  </section>
</template>

<script>
import { getCookie } from "@/utils/cookie";
export default {
  props: ["show"],
  data() {
    return {
      activeStatus: 0,
      routeName: "",
      isActive: false,
      type: "",
    };
  },
  watch: {
    $route(to) {
      this.routeName = to.name; //라우터 변경시 현재 페이지 확인
      this.menuDefaultSetup();
    },
    show(status) {
      status ? (this.isActive = true) : (this.isActive = false); //lnb 모바일 설정
    },
  },
  created() {
    this.routeName = this.$route.name; //새로고침 또는 다이렉트 접속시 현재 페이지 확인
    this.menuDefaultSetup();
    const { type } = getCookie("userInfo");
    this.type = type;
    if (type === 1) {
      this.$router.push("/PublisherList");
    }
  },
  methods: {
    close() {
      this.$emit("close", true);
    },
    /**
     * @description 라우터 네임 매칭, 현재 메뉴 활성화
     */
    menuDefaultSetup() {
      switch (this.routeName) {
        case "PublisherList":
          this.activeStatus = 1;
          break;
        case "ShopList":
          this.activeStatus = 2;
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.lnb-wrap {
  min-height: 100vh;
  height: 100%;
  background: #000;
  .side-bar {
    position: relative;
    z-index: 1000;
    background: #000;
    min-height: 100vh;
    height: 100%;
    .logo {
      text-align: center;
    }
    .system-name {
      @include NotoSans(1.4, 700, #fff);
      text-align: center;
    }
    nav {
      padding-top: 30px;
      ul {
        li {
          cursor: pointer;
          text-align: center;
          &:hover {
            background-color: rgba(255, 255, 255, 0.3);
          }
          a {
            @include NotoSans(1.4, 700, #fff);
            height: 40px;
            line-height: 40px;
            width: 100%;
          }
          &.active {
            background-color: rgba(255, 255, 255, 0.3);
          }
        }
      }
    }
  }
  .dim {
    display: none;
  }
}

@include lnb {
  //모바일
  .side-bar {
    position: fixed;
    width: 266px;
    top: 0;
    left: -266px;
    transition: left 0.3s ease-in;
    &.active {
      left: 0;
      z-index: 1000;
    }
  }
  .dim {
    &.active {
      display: block;
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.2);
      top: 0;
      left: 0;
    }
  }
}
</style>
