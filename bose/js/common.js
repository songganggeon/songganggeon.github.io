const logo = document.getElementById("logoImg")
const ddHover = document.querySelectorAll("ol.subMenu>li dl>dd")

//상단 메뉴 이벤트
function logoMetal(){
  logo.src = 'common/images/logo_kong.png'
}
function logoWhite() {
  logo.src = 'common/images/logo.png'
}
logo.addEventListener("mouseover",logoMetal)
logo.addEventListener("mouseout",logoWhite)
ddHover.forEach((el) => { el.addEventListener("mouseover",logoMetal)})
ddHover.forEach((el) => { el.addEventListener("mouseout", logoWhite)})

$(function(){
  $('#gnb').mouseenter(function(){
    $('.subMenu').css({ "height" : "200px", "transition": "0.3s","background-color" : "#111"})
    $('#gnbBg').css({ "height": "200px", "transition": "0.3s"})
  });
  $('#gnb').mouseleave(function(){
     $('.subMenu').css("height" , "0");
     $('#gnbBg').css( "height", "0");
  });
  });

  function notHover(){
    window.alert('아직 구현되지 않았습니다. Product 및 Store를 이용해주세요. 죄송합니다.');
  };