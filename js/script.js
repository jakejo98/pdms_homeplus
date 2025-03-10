$(document).ready(function(){
  changeView();
})

function changeView(){
  const changeBtn = $('.btn_change_view');
  const layer = $('.layer');
  const isActive = 'active';

  $(changeBtn).click(function(){
    $(this).addClass(isActive).parent().siblings().find(changeBtn).removeClass(isActive);
    const btnIndex = $(this).parent().index();
    
    $(layer).eq(btnIndex).addClass(isActive).siblings().removeClass(isActive);
  })
}

