(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9baeb17c"],{8899:function(e,t,s){"use strict";s("bb18")},bb18:function(e,t,s){},ede4:function(e,t,s){"use strict";s.r(t);var a=s("132d"),o=(s("14d9"),s("f3e4")),i=s("ea7b"),n=s("e71f"),c=s("e31c");const r=Object(i.c)(c.a);var l={data:()=>({email:"",password:"",logMessage:""}),methods:{async signIn(){try{this.$store.commit("common/setLoading",!0),Object(i.d)(r,i.a).then(()=>Object(i.e)(r,this.email,this.password).then(async e=>{const t=e.user,s=t.displayName.split("-");if(1!==Number(s[1]))alert("관라지가 아닙니다."),this.$store.commit("common/setLoading",!1);else{const e=await Object(n.c)(Object(n.b)(c.b,"publisherInfo",t.uid));Object(o.c)("userInfo",{uid:t.uid,name:s[0],email:t.email,type:Number(s[1]),info:e.data()}),this.$store.commit("common/setLoading",!1),this.$router.push("/")}}).catch(e=>{switch(this.$store.commit("common/setLoading",!1),e.code){case"auth/invalid-email":this.logMessage="이메일을 잘못 입력 하셨습니다.";break;case"auth/user-not-found":this.logMessage="존재하지 않는 이메일 주소입니다.";break;case"auth/wrong-password":this.logMessage="비밀번호를 잘못 입력 하셨습니다.";break;case"auth/too-many-requests":this.logMessage="접속 시도를 너무 많이 하셨습니다.";break;default:this.logMessage="이메일 혹은 비밀번호가 틀렸습니다."}})).catch(e=>{console.log(e),this.$store.commit("common/setLoading",!1)})}catch(e){console.log(e),this.$store.commit("common/setLoading",!1)}}}},m=(s("8899"),s("2877")),d=Object(m.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-container"},[t("div",{staticClass:"login-box"},[t("h1",[e._v("관리자 로그인")]),t("form",{on:{submit:function(t){return t.preventDefault(),e.signIn.apply(null,arguments)}}},[t("div",{staticClass:"mt30 field"},[t(a.a,[e._v("mdi-account")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"아이디를 입력하세요."},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})],1),t("div",{staticClass:"mt10 field"},[t(a.a,[e._v("mdi-shield-key")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"비밀번호를 입력하세요."},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})],1),t("button",{staticClass:"btn-login mt25",attrs:{type:"submit"}},[e._v("로그인 하기")]),t("p",{staticClass:"error-message"},[e._v(e._s(e.logMessage))])])])])}),[],!1,null,"10ee78c7",null);t.default=d.exports}}]);