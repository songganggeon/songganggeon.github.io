// 스크롤 이벤트
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  const s01_p = document.querySelector('.s01_title>p');
  const s01_span = document.querySelector('.s01_title span');
  const s01_txt01 = document.querySelectorAll('.s01_txt01');
  const s01_txt02 = document.querySelectorAll('.s01_txt02');
  const s03_p = document.querySelector('.section3Txt>h2');
  const s03_span = document.querySelector('.section3Txt>h4');
  const s03_txt = document.querySelectorAll('.section3item>p');
  const s03_img = document.querySelectorAll('.section3item>div>img');
  const s04_txt01 = document.querySelector('.section4Txt>h2');
  const s04_txt02 = document.querySelector('.section4Txt>h4');
  const s04_item = document.querySelectorAll('.section4item');
  const sideMenu = document.getElementById('sideMenu');


  if (scrollY > 400 && scrollY < 1200){
    s01_span.style.transform = "translateX(0)"
    s01_p.style.transform = "translateX(0)"
    s01_txt01.forEach((el) => { el.style.transform = "translateY(0)" })
    s01_txt02.forEach((el) => { el.style.transform = "translateY(0)" })
  } else {
    s01_span.style.transform = "translateX(-100%)"
    s01_p.style.transform = "translateX(-100%)"
    s01_txt01.forEach((el) => { el.style.transform = "translateY(100%)" })
    s01_txt02.forEach((el) => { el.style.transform = "translateY(100%)" })
  }

  if (scrollY > 1200 && scrollY < 2200) {
    document.documentElement.style.setProperty('--bg-change','rgba(255, 255, 255, 0.5)')
    s03_p.style.transform = "translateX(0)"
    s03_span.style.transform = "translateX(0)"
    s03_txt.forEach((el) => { el.style.transform = "translateY(0)" })
    s03_img.forEach((el) => { el.style.opacity = "1" })
  } else {
    document.documentElement.style.setProperty('--bg-change', 'transparent')
    s03_p.style.transform = "translateX(100%)"
    s03_span.style.transform = "translateX(100%)"
    s03_txt.forEach((el) => { el.style.transform = "translateY(200%)" })
    s03_img.forEach((el) => { el.style.opacity = "0" })
  }

  if (scrollY > 2200){
    s04_txt01.style.transform = "translateY(0)"
    s04_txt02.style.transform = "translateY(0)"
    s04_item.forEach((el) => {
      el.style.cssText = "opacity: 1;transform: translateX(0);"
    })
  } else {
    s04_txt01.style.transform = "translateY(-100%)"
    s04_txt02.style.transform = "translateY(100%)"
    s04_item.forEach((el) => {
      el.style.opacity = "0"
    })
    document.querySelector('.section4item:first-child').style.transform = "translateX(-100%)"
    document.querySelector('.section4item:nth-child(2)').style.transform = "translateX(-200%)"
    document.querySelector('.section4item:nth-child(3)').style.transform = "translateX(200%)"
    document.querySelector('.section4item:last-child').style.transform = "translateX(100%)"
  }
});

// 마우스 이벤트
window.addEventListener('mousemove',(el) => {
  let mouseX = el.pageX;
  if(mouseX > 1800){
    sideMenu.style.transform = "translateX(0)"
  } else {
    sideMenu.style.transform = "translateX(100%)"
  }
})