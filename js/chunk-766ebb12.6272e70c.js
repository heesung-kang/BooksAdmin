(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-766ebb12"],{"20f9":function(t,e,s){"use strict";s("5dd0")},"2bb3":function(t,e,s){"use strict";s.r(e);s("14d9");var a=s("ea7b"),i=s("e31c");const o=Object(a.b)(i.a);var n={name:"SignUp",data:()=>({email:"",password:""}),methods:{userRegistration(){if(""!==this.email)if(""!==this.password){try{this.$store.commit("common/setLoading",!0),Object(a.a)(o,this.email,this.password).then(()=>{Object(a.e)(Object(a.b)().currentUser,{displayName:"admin-1"}).then(()=>{alert("정상 가입 되셨습니다."),this.$router.push("/Login")}).catch(t=>{alert(t.message)})}).catch(t=>{alert(t.message)})}catch(t){console.log(t)}this.$store.commit("common/setLoading",!1)}else alert("비밀번호를 입력해주세요.");else alert("이메일을 입력해주세요.")}}},r=(s("20f9"),s("2877")),c=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"login-container"},[e("div",{staticClass:"wrap"},[e("h1",[t._v("관리자 회원가입")]),e("div",{staticClass:"mt5"},[t._v("ID : "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"basic",attrs:{placeholder:"이메일 입력",type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("div",{staticClass:"mt5"},[t._v("PW : "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"basic",attrs:{placeholder:"비밀번호는 6자리이상 입력",type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("div",{staticClass:"btn-wrap"},[e("button",{on:{click:t.userRegistration}},[t._v("가입")])])])])}),[],!1,null,"271158c2",null);e.default=c.exports},"5dd0":function(t,e,s){}}]);