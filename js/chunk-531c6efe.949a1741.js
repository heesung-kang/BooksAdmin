(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-531c6efe"],{"7c73":function(t,e,s){},ddf7:function(t,e,s){"use strict";s.r(e);s("14d9");var i=s("e31c"),r=s("e71f"),n={name:"PublisherList",data:()=>({origin:[],publishers:[],keyword:""}),created(){this.load()},methods:{async load(){try{this.$store.commit("common/setLoading",!0);const t=Object(r.f)(Object(r.a)(i.b,"publisherInfo"),Object(r.g)("publisher",">=",this.keyword));(await Object(r.d)(t)).forEach(t=>{this.origin.push(t.data()),this.publishers.push(t.data())})}catch(t){console.log(t)}this.$store.commit("common/setLoading",!1)},search(){if(""!==this.keyword){const t=this.origin.filter(t=>{if(t.publisher.includes(this.keyword))return t});this.publishers=t}else this.publishers=this.origin}}},o=(s("df66"),s("2877")),a=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",[e("h2",{staticClass:"sub-title"},[t._v("출판사 리스트")]),e("section",{staticClass:"sub-container"},[e("section",{staticClass:"search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text"},domProps:{value:t.keyword},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search.apply(null,arguments)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),e("button",{on:{click:t.search}},[t._v("검색")])]),e("table",[t._m(0),e("tbody",t._l(t.publishers,(function(s,i){return e("tr",{key:i},[e("td",[t._v(t._s(s.sid))]),e("td",[t._v(t._s(s.publisher))]),e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.email))]),e("td",[t._v(t._s(s.tel))])])})),0),0===t.publishers.length?e("tfoot",[t._m(1)]):t._e()])])])}),[function(){var t=this._self._c;return t("thead",[t("tr",[t("th",[this._v("sid")]),t("th",[this._v("출판사명")]),t("th",[this._v("대표명")]),t("th",[this._v("이메일")]),t("th",[this._v("전화번호")])])])},function(){var t=this._self._c;return t("tr",[t("td",{attrs:{colspan:"5"}},[this._v("출판사 리스트가 없습니다.")])])}],!1,null,"2eaae32d",null);e.default=a.exports},df66:function(t,e,s){"use strict";s("7c73")}}]);