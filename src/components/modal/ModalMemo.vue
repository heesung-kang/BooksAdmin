<template>
  <modalWrap @close="close">
    <template slot="head"><h2>메모</h2></template>
    <template slot="body">
      <div class="v-application">
        <v-progress-circular :size="70" :width="7" color="amber" indeterminate class="spinner" v-if="loading"></v-progress-circular>
      </div>
      <textarea v-model="memo" placeholder="남기실 메모가 있으면 적어주세요"></textarea>
      <div class="btn-wrap"><button class="primary" @click="save">보내기</button></div>
    </template>
  </modalWrap>
</template>

<script>
import { mapGetters } from "vuex";
import { doc, writeBatch, serverTimestamp } from "firebase/firestore";
import { db } from "@/utils/db";
import modalWrap from "@/components/modal/ModalTemplate";
export default {
  name: "Order",
  components: { modalWrap },
  props: ["books"],
  data() {
    return {
      memo: "",
    };
  },
  computed: {
    ...mapGetters("common", ["loading"]),
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async save() {
      try {
        this.$store.commit("common/setLoading", true);
        const timestamp = serverTimestamp();
        const batch = writeBatch(db);
        await this.books.forEach(ele => {
          const docRef = doc(db, "orderRequest", ele.id);
          batch.update(docRef, {
            publisher_reply_status: ele.data.publisher_reply_status,
            reply_count: parseInt(ele.data.reply_count),
            shop_order_status: 1,
            reply_time: timestamp,
            reply_time_id: this.$date().format("YYYYMMDDHHmmss"),
            memo: this.memo,
          });
        });
        await batch.commit();
        this.$emit("close");
        this.$attrs.update();
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setLoading", false);
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  height: 200px;
}
.btn-wrap {
  display: flex;
  justify-content: flex-end;
}
</style>
