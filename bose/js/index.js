const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');
const img6 = document.querySelector('.img6');
const img7 = document.querySelector('.img7');
const bgVideo = document.getElementById('bgVideo');
const firstImg = document.querySelector('.firstImg');
const imgWrap = document.querySelector('.imgWrap');
const imgAll = document.querySelectorAll('.imgWrap>div');
const first = document.querySelector('.firstImg>div');
const s2h1 = document.getElementById('txtBox');
const header = document.getElementById('headerWrap');
const swiperSlide = document.querySelector('.swiper');
const swiperSlideH2 = document.querySelector('.swiper>h2');
const footerWrap = document.getElementById('footerWrap');
const s3Img = document.querySelector('.s3Back>img');
const followh1 = document.querySelector('.followBose>h1');
const followh6 = document.querySelector('.followBose>h6');
const gnbLi = document.querySelectorAll('#gnb>li');


function gnbChange(){
/* gnbLi[0].innerText = "HISTORY"
gnbLi[1].innerText = "THECHNOLOGY"
gnbLi[2].innerText = "SLOGAN"
gnbLi[3].innerText = "Dr.Bose" */
  document.querySelector('.subMenu').style.display = "none"
  document.getElementById('gnbBg').style.display = "none"
  gnbLi[0].innerHTML = "<p class='newMenu newMenu1'>HISTORY</p>"
  gnbLi[1].innerHTML = "<p class='newMenu newMenu2'>THECHNOLOGY</p>"
  gnbLi[2].innerHTML = "<p class='newMenu newMenu3'>SLOGAN</p>"
  gnbLi[3].innerHTML = "<p class='newMenu newMenu4'>Dr.Bose</p>"
}
function gnbChangeNone(){
  document.querySelector('.subMenu').style.display = "flex"
  document.getElementById('gnbBg').style.display = "block"
  gnbLi[0].innerHTML = `<li style="cursor: pointer;" onclick="notHover()">Event</li>`
  gnbLi[1].innerHTML = `<li><a id="product" href="product.html">Products</a></li>`
  gnbLi[2].innerHTML = `<li><a id="store" href="store.html">Store</a></li>`
  gnbLi[3].innerHTML = `<li style="cursor: pointer;" onclick="notHover()">Support</li>`
}


let i = 0;
bgVideo.classList.add('active');

swiperSlide.addEventListener('mouseover', () => {
      swiperSlideH2.style.zIndex = '-10'
    })
swiperSlide.addEventListener('mouseout', () => {
  swiperSlideH2.style.zIndex = '10'
})


firstImg.style.transform = "translateY(100%)"
window.addEventListener('wheel',() => {
  let scrollEvent = document.body.scrollTop;
  let scrollSection4 = document.getElementById('section4').scrollWidth;
  console.log(scrollSection4)
  console.log(scrollEvent)
  if(scrollEvent < 900){
    bgVideo.classList.add('active')
  } else {
    bgVideo.classList.remove('active')
  }
  if(scrollEvent > 300){
    firstImg.style.transform = "translateY(0)"
  } else if (scrollEvent <= 300){
    firstImg.style.transform = "translateY(100%)"
  }
  if (scrollEvent > 550){
    imgWrap.style.opacity = '1'
    s2h1.style.right = '27%'
  } else if (scrollEvent <= 550) {
    imgWrap.style.opacity = '0'
    s2h1.style.right = '-100%'
  }
  if(scrollEvent > 1300){
    s3Img.classList.add('s3BackEvent')
  } else {
    s3Img.classList.remove('s3BackEvent')
  }

  if (scrollEvent > 1500){
    first.style.left = "0"
    imgWrap.style.transform = "translate(0)"
    i = i * 0;
  }
  if (scrollEvent >= 2400) {
    header.style.position = "absolute"
    gnbChange();
  } else if (scrollEvent < 2400){
    header.style.position = "fixed"
    gnbChangeNone();
  }
  if (scrollEvent >= 2800) {
    followh1.style.transform = 'translateX(0)'
  } else {
    followh1.style.transform = 'translateX(-100%)'
  }
  if (scrollEvent >= 3000){
    followh6.style.transform = 'translateX(0)'
  } else {
    followh6.style.transform = 'translateX(-120%)'
   }


  if (scrollEvent >= 3800) {
    footerWrap.style.bottom = "0"
  } else if (scrollEvent < 3800) {
    footerWrap.style.bottom = "-100%"
  }
})

firstImg.addEventListener('click', () => {
  if(i === 1){
    first.style.left = "0"
    imgWrap.style.transform = "translate(0)"
    i = i - 1;
  } else if(i === 2){
    first.style.left = "-50vw"
    imgWrap.style.transform = "translate(-25vw)"
    i = i - 1;
  } else if (i === 3) {
    first.style.left = "-100vw"
    imgWrap.style.transform = "translate(-50vw)"
    i = i - 1;
  } else if (i === 4) {
    first.style.left = "-150vw"
    imgWrap.style.transform = "translate(-75vw)"
    i = i - 1;
  } else if (i === 5) {
    first.style.left = "-200vw"
    imgWrap.style.transform = "translate(-100vw)"
    i = i - 1;
  } else if (i === 6) {
    first.style.left = "-250vw"
    imgWrap.style.transform = "translate(-125vw)"
    i = i - 1;
  } else if (i === 7) {
    first.style.left = "-300vw"
    imgWrap.style.transform = "translate(-150vw)"
    i = i - 1;
  }
})

img1.addEventListener('click',() => {
  first.style.left = "-50vw"
  imgWrap.style.transform = "translate(-25vw)"
  i = 1;
});
img2.addEventListener('click', function () {
  first.style.left = "-100vw"
  imgWrap.style.transform = "translate(-50vw)"
  i = 2;
});
img3.addEventListener('click', function () {
  first.style.left = "-150vw"
  imgWrap.style.transform = "translate(-75vw)"
  i = 3;
});
img4.addEventListener('click', function () {
  first.style.left = "-200vw"
  imgWrap.style.transform = "translate(-100vw)"
  i = 4;
});
img5.addEventListener('click', function () {
  first.style.left = "-250vw"
  imgWrap.style.transform = "translate(-125vw)"
  i = 5;
});
img6.addEventListener('click', function () {
  first.style.left = "-300vw"
  imgWrap.style.transform = "translate(-150vw)"
  i = 6;
});
img7.addEventListener('click', function () {
  first.style.left = "-350vw"
  imgWrap.style.transform = "translate(-175vw)"
  i = 7;
});
