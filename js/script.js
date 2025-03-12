import { common, respond, desktop } from "/pdms_homeplus/js/homeplus.js";

let windowWidth = 0;

// 윈도우 너비 업데이트 함수
function updateWidth(){
  return $(window).width();
}
// 윈도우 리사이즈 너비 값 재설정
$(window).resize(function(){
  windowWidth = updateWidth();
  checkWidth();
});
// 윈도우 너비에 조건부로 작동하는 함수
function checkWidth() {
  windowWidth = updateWidth();
  if(windowWidth > 1023) {
    desktop();
  } else {
    respond();
  }
}
// 공통 함수
$(document).ready(function(){
  common();
  checkWidth();
})