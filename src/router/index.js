import Vue from "vue";
import VueRouter from "vue-router";
const lnb = () => import("@/components/common/Lnb.vue");
const footer = () => import("@/components/common/Footer.vue");

Vue.use(VueRouter);
const router = new VueRouter({
  //mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      redirect: "/PublisherList",
    },
    {
      path: "/SignUp",
      name: "SignUp",
      component: () => import("@/views/login/SignUp.vue"),
      meta: { unauthorized: true },
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("@/views/login/Login.vue"),
      meta: { unauthorized: true },
    },
    {
      path: "/PublisherList",
      name: "PublisherList",
      components: {
        lnb,
        footer,
        contents: () => import("@/views/publisher/PublisherList.vue"),
      },
    },
    {
      path: "/ShopList",
      name: "ShopList",
      components: {
        lnb,
        footer,
        contents: () => import("@/views/shop/ShopList.vue"),
      },
    },
    //404
    {
      path: "*",
      name: "pageNotFound",
      component: () => import("@/views/error/NotFoundPage.vue"),
      meta: { unauthorized: true },
    },
  ],
});

//router guard
router.beforeEach(async (to, from, next) => {
  const session = JSON.parse(sessionStorage.getItem(`firebase:authUser:${key}:[DEFAULT]`));
  //session 있거나 로그인 필요 없는 페이지
  if (to.matched.some(record => record.meta.unauthorized) || session) {
    return next();
  }

  //session  없을 경우
  return next("/login");
});

export default router;
