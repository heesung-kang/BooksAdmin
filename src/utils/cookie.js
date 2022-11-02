import VueCookies from "vue-cookies";
//생성
function saveCookie(name, value) {
  VueCookies.set(name, value, "0");
}
//호출
function getCookie(name) {
  return VueCookies.get(name);
}
//삭제
function deleteCookie(name) {
  VueCookies.remove(name);
}

export { saveCookie, getCookie, deleteCookie };
