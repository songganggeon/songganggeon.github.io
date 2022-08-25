$(function(){

    $('.leftBtn').click(function(){

        // li 중의 두번째 이미지
        $('#gallery').find('li').eq(1).css(
          { 'transform': 'scale(1.3)', 'transition': 'all 0.3s', 'z-index': '9', 'overflow': 'visible' }).siblings().css({
            'transform': 'scale(1)', 'transition': 'all 0.3s', 'z-index': '8', 'overflow' : 'hidden'
          }) //2번째 이미지가 크기가 변경되는 css적용 + 나머지는 원래대로
        $('#gallery').filter(':not(:animated)').animate({'margin-left' : '20vw'},300,function(){ //li 크기만큼 이동
          let last = $('#gallery > li').last();// 마지막 이미지
          $(this).prepend(last); // 마지막 이미지를 맨앞쪽으로 이동해서 대기
          $('#gallery').css({'margin-left' : '0'});
        })

    });
    $('.rightBtn').click(function () {
      $('#gallery').find('li').eq(3).css(
        { 'transform': 'scale(1.3)', 'transition': 'all 0.3s', 'z-index': '9' }).siblings().css({
          'transform': 'scale(1)', 'transition': 'all 0.3s','z-index': '8'
        }) //2번째 이미지가 크기가 변경되는 css적용 + 나머지는 원래대로
      $('#gallery').filter(':not(:animated)').animate({ 'margin-left': '-20vw' }, 300, function () { //li 크기만큼 이동
        let first = $('#gallery > li').first();// 마지막 이미지
        $(this).append(first); // 마지막 이미지를 맨앞쪽으로 이동해서 대기
        $('#gallery').css('margin-left', '0');
      })
    });
    });
