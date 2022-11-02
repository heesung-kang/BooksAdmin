import Vue from "vue";
import Vuex from "vuex";

// common
import common from "@/store/modules/common/common.js";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    common,
  },
});
