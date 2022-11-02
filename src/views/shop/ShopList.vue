<template>
  <section>
    <h2 class="sub-title">서점 리스트</h2>
    <section class="sub-container">
      <section class="search">
        <input type="text" v-model="keyword" @keypress.enter="search" />
        <button @click="search">검색</button>
      </section>
      <table>
        <thead>
          <tr>
            <th>서점명</th>
            <th>이메일</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in shops" :key="index">
            <td>{{ item.shop }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.address1 }} {{ item.address2 }}</td>
          </tr>
        </tbody>
        <tfoot v-if="shops.length === 0">
          <tr>
            <td colspan="3">서점 리스트가 없습니다.</td>
          </tr>
        </tfoot>
      </table>
    </section>
  </section>
</template>

<script>
import { db } from "@/utils/db";
import { collection, query, getDocs, where } from "firebase/firestore";
export default {
  name: "PublisherList",
  data() {
    return {
      origin: [],
      shops: [],
      keyword: "",
    };
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      try {
        this.$store.commit("common/setLoading", true);
        const first = query(collection(db, "shopInfo"), where("shop", ">=", this.keyword));
        const documentSnapshots = await getDocs(first);
        documentSnapshots.forEach(doc => {
          this.origin.push(doc.data());
          this.shops.push(doc.data());
        });
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setLoading", false);
    },
    search() {
      if (this.keyword !== "") {
        const filter = this.origin.filter(ele => {
          if (ele.shop.includes(this.keyword)) {
            return ele;
          }
        });
        this.shops = filter;
      } else {
        this.shops = this.origin;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  tr {
    th {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      height: 30px;
    }
    td {
      border-bottom: 1px solid #ccc;
      text-align: center;
      height: 30px;
    }
  }
}
.search {
  margin-bottom: 10px;
  input {
    border: 1px solid #000;
    background-color: #fff;
    padding: 0 10px;
    width: calc(100% - 80px);
    max-width: 300px;
  }
  button {
    width: 70px;
    border: 1px solid #000;
    background: #fff;
    margin-left: 10px;
  }
}
</style>
