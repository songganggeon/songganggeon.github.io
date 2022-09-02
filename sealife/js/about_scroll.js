// 스크롤 이벤트
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  const seaLifeHeader = document.querySelector('.seaLifeHeader')
  const sealifeImg = document.querySelector('.sealifeImg:first-child')
  const section05_title01 = document.querySelector('.section05_title01')
  const section05_title02 = document.querySelector('.section05_title02')
  const section05_txt_in1 = document.getElementById('section05_txt_in1')
  const sealifeImg2 = document.querySelector('.sealifeImg:nth-child(2)')
  const section05_title03 = document.querySelector('.s02Txt1')
  const section05_title04 = document.querySelector('.s02Txt2')
  const section05_txt_in2 = document.getElementById('section05_txt_in2')
  const seaLifeHeader2 = document.querySelector('.header2')
  const section03_vision_logo = document.querySelector('.section03_vision_logo img')
  const seaLifeHeader3 = document.querySelector('.header3')
  const section05_titleAll = document.querySelectorAll('.section05_title01')
  const section05_title2All = document.querySelectorAll('.section05_title02')
  const section05_txt_inAll = document.querySelectorAll('.section05_txt_in')
  const section05_imgAll = document.querySelectorAll('.section05_img')
  const extraHead = document.querySelector('.extraHead');
  const section04_title = document.querySelector('.section04_title')
  const section04_txt = document.querySelector('.section04_txt')
  
  document.body.style.overflowX = "hidden"
  seaLifeHeader.style.transform = "translateY(200%)"
  seaLifeHeader.style.opacity = "0"
  seaLifeHeader.style.transition = "all 0.7s"
  sealifeImg.style.transition = "all 0.7s"  
  sealifeImg.style.transform = "translateX(-200%)"
  section05_title01.style.transition = "all 1s"
  section05_title01.style.transform = "translateX(200%)"
  section05_title02.style.transition = "all 1.4s"
  section05_title02.style.transform = "translateX(200%)"
  section05_txt_in1.style.transition = "all 1.8s"
  section05_txt_in1.style.transform = "translateX(200%)"
  
  // 섹션2
  sealifeImg2.style.transition = "all 0.7s"
  sealifeImg2.style.transform = "translateX(200%)"
  section05_title03.style.transition = "all 1s"
  section05_title03.style.transform = "translateX(-200%)"
  section05_title04.style.transition = "all 1.4s"
  section05_title04.style.transform = "translateX(-200%)"
  section05_txt_in2.style.transition = "all 1.8s"
  section05_txt_in2.style.transform = "translateX(-200%)"

  // 섹션3
  seaLifeHeader2.style.transform = "translateY(200%)"
  seaLifeHeader2.style.opacity = "0"
  seaLifeHeader2.style.transition = "all 0.7s"

  // 섹션5
  seaLifeHeader3.style.transform = "translateY(200%)"
  seaLifeHeader3.style.opacity = "0"
  seaLifeHeader3.style.transition = "all 0.7s"
  section05_titleAll[2].style.transition = "all 1s"
  section05_titleAll[2].style.transform = "translateX(200%)"
  section05_title2All[2].style.transition = "all 1.4s"
  section05_title2All[2].style.transform = "translateX(200%)"
  section05_txt_inAll[2].style.transition = "all 1.8s"
  section05_txt_inAll[2].style.transform = "translateX(200%)"
  section05_imgAll[2].style.transition = "all 0.7s"
  section05_imgAll[2].style.transform = "translateX(-200%)"

  // 섹션6
  section05_titleAll[3].style.transition = "all 1s"
  section05_titleAll[3].style.transform = "translateX(-200%)"
  section05_title2All[3].style.transition = "all 1.4s"
  section05_title2All[3].style.transform = "translateX(-200%)"
  section05_txt_inAll[3].style.transition = "all 1.8s"
  section05_txt_inAll[3].style.transform = "translateX(-200%)"
  section05_imgAll[3].style.transition = "all 0.7s"
  section05_imgAll[3].style.transform = "translateX(200%)"

  // 섹션7
  section05_titleAll[4].style.transition = "all 1s"
  section05_titleAll[4].style.transform = "translateX(200%)"
  section05_title2All[4].style.transition = "all 1.4s"
  section05_title2All[4].style.transform = "translateX(200%)"
  section05_txt_inAll[4].style.transition = "all 1.8s"
  section05_txt_inAll[4].style.transform = "translateX(200%)"
  section05_imgAll[4].style.transition = "all 0.7s"
  section05_imgAll[4].style.transform = "translateX(-200%)"

  extraHead.style.transform = "translateY(200%)"
  extraHead.style.opacity = "0"
  extraHead.style.transition = "all 0.7s"

  section04_title.style.transform = "translateY(200%)"
  section04_title.style.opacity = "0"
  section04_title.style.transition = "all 0.7s"

  section04_txt.style.transform = "translateY(200%)"
  section04_txt.style.opacity = "0"
  section04_txt.style.transition = "all 1.4s"


  if(scrollY > 600){
    seaLifeHeader.style.transform = "translateY(0%)"
    seaLifeHeader.style.opacity = "1"
    sealifeImg.style.transform = "translateX(0%)"
    section05_title01.style.transform = "translateX(0%)"
    section05_title02.style.transform = "translateX(0%)"
    section05_txt_in1.style.transform = "translateX(0%)"

  } else {
    seaLifeHeader.style.transform = "translateY(200%)"
    seaLifeHeader.style.opacity = "0"
    sealifeImg.style.transform = "translateX(-200%)"
    section05_title01.style.transform = "translateX(200%)"
    section05_title02.style.transform = "translateX(200%)"
    section05_txt_in1.style.transform = "translateX(200%)"
  }
  if(scrollY > 1000){
    sealifeImg2.style.transform = "translateX(0%)"
    section05_title03.style.transform = "translateX(0%)"
    section05_title04.style.transform = "translateX(0%)"
    section05_txt_in2.style.transform = "translateX(0%)"

  } else {
    sealifeImg2.style.transform = "translateX(200%)"
    section05_title03.style.transform = "translateX(-200%)"
    section05_title04.style.transform = "translateX(-200%)"
    section05_txt_in2.style.transform = "translateX(-200%)"
  }
  if(scrollY > 1800){
    seaLifeHeader2.style.transform = "translateY(0%)"
    seaLifeHeader2.style.opacity = "1"
    section03_vision_logo.style.opacity = "1"  
  } else {
      seaLifeHeader2.style.transform = "translateY(200%)"
      seaLifeHeader2.style.opacity = "0"
      section03_vision_logo.style.opacity = "0"
    }
  if(scrollY > 2400){
    section04_title.style.transform = "translateY(0%)"
    section04_txt.style.transform = "translateY(0%)"
    section04_title.style.opacity = "1"
    section04_txt.style.opacity = "1"
  } else {
    section04_title.style.transform = "translateY(200%)"
    section04_txt.style.transform = "translateY(200%)"
    section04_title.style.opacity = "0"
    section04_txt.style.opacity = "0"
  }
    if(scrollY > 3400){
      seaLifeHeader3.style.transform = "translateY(0%)"
      seaLifeHeader3.style.opacity = "1"
      section05_titleAll[2].style.transform = "translateX(0%)"
      section05_title2All[2].style.transform = "translateX(0%)"
      section05_txt_inAll[2].style.transform = "translateX(0%)"
      section05_imgAll[2].style.transform = "translateX(0%)"
    } else {
      seaLifeHeader3.style.transform = "translateY(200%)"
      seaLifeHeader3.style.opacity = "0"
      section05_titleAll[2].style.transform = "translateX(200%)"
      section05_title2All[2].style.transform = "translateX(200%)"
      section05_txt_inAll[2].style.transform = "translateX(200%)"
      section05_imgAll[2].style.transform = "translateX(-200%)"
    }
  if (scrollY > 3800) {
    section05_titleAll[3].style.transform = "translateX(0%)"
    section05_title2All[3].style.transform = "translateX(0%)"
    section05_txt_inAll[3].style.transform = "translateX(0%)"
    section05_imgAll[3].style.transform = "translateX(0%)"
  } else {
    section05_titleAll[3].style.transform = "translateX(-200%)"
    section05_title2All[3].style.transform = "translateX(-200%)"
    section05_txt_inAll[3].style.transform = "translateX(-200%)"
    section05_imgAll[3].style.transform = "translateX(200%)"
  }
  if (scrollY > 4400) {
    section05_titleAll[4].style.transform = "translateX(0%)"
    section05_title2All[4].style.transform = "translateX(0%)"
    section05_txt_inAll[4].style.transform = "translateX(0%)"
    section05_imgAll[4].style.transform = "translateX(0%)"
  } else {
    section05_titleAll[4].style.transform = "translateX(200%)"
    section05_title2All[4].style.transform = "translateX(200%)"
    section05_txt_inAll[4].style.transform = "translateX(200%)"
    section05_imgAll[4].style.transform = "translateX(-200%)"
  }
  if (scrollY > 5200) {
    extraHead.style.transform = "translateY(0%)"
    extraHead.style.opacity = "1" }
    else {
      extraHead.style.transform = "translateY(200%)"
      extraHead.style.opacity = "0"
    }
  }
);

// 마우스 이벤트
window.addEventListener('mousemove',(el) => {
  let mouseX = el.pageX;
  if(mouseX > 1800){
    sideMenu.style.transform = "translateX(0)"
  } else {
    sideMenu.style.transform = "translateX(100%)"
  }
})