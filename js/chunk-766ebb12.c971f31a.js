(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-766ebb12"],{"20f9":function(t,s,e){"use strict";e("5dd0")},"2bb3":function(t,s,e){"use strict";e.r(s);e("14d9");var a=e("ea7b"),i=e("e31c");const o=Object(a.c)(i.a);var n={name:"SignUp",data:()=>({email:"",password:""}),methods:{userRegistration(){if(""!==this.email)if(""!==this.password){try{this.$store.commit("common/setLoading",!0),Object(a.b)(o,this.email,this.password).then(()=>{Object(a.g)(Object(a.c)().currentUser,{displayName:"admin-1"}).then(()=>{alert("정상 가입 되셨습니다."),this.$router.push("/Login")}).catch(t=>{alert(t.message)})}).catch(t=>{alert(t.message)})}catch(t){console.log(t)}this.$store.commit("common/setLoading",!1)}else alert("비밀번호를 입력해주세요.");else alert("이메일을 입력해주세요.")}}},r=(e("20f9"),e("2877")),c=Object(r.a)(n,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"login-container"},[s("div",{staticClass:"wrap"},[s("h1",[t._v("관리자 회원가입")]),s("div",{staticClass:"mt5"},[t._v("ID : "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"basic",attrs:{placeholder:"이메일 입력",type:"text"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),s("div",{staticClass:"mt5"},[t._v("PW : "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"basic",attrs:{placeholder:"비밀번호는 6자리이상 입력",type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),s("div",{staticClass:"btn-wrap"},[s("button",{on:{click:t.userRegistration}},[t._v("가입")])])])])}),[],!1,null,"271158c2",null);s.default=c.exports},"5dd0":function(t,s,e){}}]);