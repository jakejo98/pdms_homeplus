$(document).ready(function(){
  changeViewBtn();
})

function changeViewBtn(){
  const btn = $('.btn_change_view');
  const layer = $('.layer');
  const isActive = "active";

  $(btn).click(function(){
    let btnText = $(this).text();
    if(btnText === '데이터 수정') {
      $(btn).text('프리뷰');
      $(layer).removeClass(isActive);
      $(layer).eq(1).addClass(isActive);
    } else {
      $(btn).text('데이터 수정');
      $(layer).removeClass(isActive);
      $(layer).eq(0).addClass(isActive);
    }
  })
}

