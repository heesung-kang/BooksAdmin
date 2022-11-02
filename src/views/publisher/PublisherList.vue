<template>
  <section>
    <h2 class="sub-title">출판사 리스트</h2>
    <section class="sub-container">
      <section class="search">
        <input type="text" v-model="keyword" @keypress.enter="search" />
        <button @click="search">검색</button>
      </section>
      <table>
        <thead>
          <tr>
            <th>sid</th>
            <th>출판사명</th>
            <th>대표명</th>
            <th>이메일</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in publishers" :key="index">
            <td>{{ item.sid }}</td>
            <td>{{ item.publisher }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.tel }}</td>
          </tr>
        </tbody>
        <tfoot v-if="publishers.length === 0">
          <tr>
            <td colspan="5">출판사 리스트가 없습니다.</td>
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
      publishers: [],
      keyword: "",
    };
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      try {
        this.$store.commit("common/setSkeleton", true);
        const first = query(collection(db, "publisherInfo"), where("publisher", ">=", this.keyword));
        const documentSnapshots = await getDocs(first);
        documentSnapshots.forEach(doc => {
          this.origin.push(doc.data());
          this.publishers.push(doc.data());
        });
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setSkeleton", false);
    },
    search() {
      if (this.keyword !== "") {
        const filter = this.origin.filter(ele => {
          if (ele.publisher.includes(this.keyword)) {
            return ele;
          }
        });
        this.publishers = filter;
      } else {
        this.publishers = this.origin;
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
