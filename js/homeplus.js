export function common(){
  changeView()
}

export function respond(){
  expandedChangeView();
}

export function desktop(){
  initExpandedChangeView();
}

function changeView() {
  const changeBtn = $('.btn_change_view');
  const layer = $('.layer');
  const isActive = 'active';
  const expandedBtn = $('.btn_change_view_expanded');
  const expandedList = $('.change_view_list');
  const isExpanded = 'expanded';

  $(changeBtn).click(function () {

    $(expandedList).removeClass(isExpanded);

    $(this).addClass(isActive).parent().siblings().find(changeBtn).removeClass(isActive);
    const btnIndex = $(this).parent().index();
    const BtnText = $(this).text();
    $(expandedBtn).text(BtnText);

    $(layer).eq(btnIndex).addClass(isActive).siblings().removeClass(isActive);

    // iframe 재로딩 처리
    const iframe = $(layer).eq(btnIndex).find('iframe');
    if (iframe.length) {
      const src = iframe.attr('src');

      // 먼저 빈 페이지로 변경 후 다시 원래 URL 설정
      iframe.attr('src', 'about:blank');
      setTimeout(() => {
        iframe.attr('src', src);
      }, 50); // 약간의 지연 추가
    }
  });
}
function expandedChangeView(){
  const expandedBtn = $('.btn_change_view_expanded');
  const expandedList = $('.change_view_list');
  const isExpanded = 'expanded';

  $(expandedBtn).click(function(){
    $(this).siblings(expandedList).addClass(isExpanded);
  })
}

function initExpandedChangeView(){
  const expandedList = $('.change_view_list');
  const isExpanded = 'expanded';

  $(expandedList).removeClass(isExpanded);
}

