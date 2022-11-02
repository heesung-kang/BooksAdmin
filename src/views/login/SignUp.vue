<template>
  <div class="login-container">
    <div class="wrap">
      <h1>관리자 회원가입</h1>
      <div class="mt5">ID : <input class="basic" v-model="email" placeholder="이메일 입력" type="text" /></div>
      <div class="mt5">PW : <input class="basic" v-model="password" placeholder="비밀번호는 6자리이상 입력" type="password" /></div>
      <div class="btn-wrap"><button @click="userRegistration">가입</button></div>
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "@/utils/db";
const auth = getAuth(app);
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    userRegistration() {
      if (this.email === "") {
        alert("이메일을 입력해주세요.");
        return;
      }
      if (this.password === "") {
        alert("비밀번호를 입력해주세요.");
        return;
      }
      try {
        this.$store.commit("common/setLoading", true);
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            updateProfile(getAuth().currentUser, {
              displayName: "admin-1", //1:권한
            })
              .then(() => {
                alert("정상 가입 되셨습니다.");
                this.$router.push("/Login");
              })
              .catch(error => {
                alert(error.message);
              });
          })
          .catch(error => {
            alert(error.message);
          });
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setLoading", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: #f5f5f5;
  .wrap {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 50px;
    background-color: #fff;
    h1 {
      font-size: 1.6rem;
    }
  }
  input {
    border: 1px solid #000;
    padding: 0 10px;
    height: 30px;
    width: 100%;
    font-size: 1.4rem;
    &::placeholder {
      font-size: 1.4rem;
    }
  }
  .btn-wrap {
    text-align: center;
    button {
      margin-top: 10px;
      padding: 2px 15px;
      background: deepskyblue;
      color: #fff;
      font-size: 1.5rem;
      border-radius: 3px;
    }
  }
}
</style>
