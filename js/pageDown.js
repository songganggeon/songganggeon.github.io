const sectionAll = document.querySelectorAll('.section');
const seciton1 = document.getElementById('section01');
const seciton2 = document.getElementById('section02');
const section3 = document.getElementById('section03');
const section4 = document.getElementById('section04');
const section5 = document.getElementById('section05')
const mainWrap = document.getElementById('mainWrap');
const leftH3 = document.querySelector('.left>h3');
const leftSpan = document.querySelectorAll('.left>p');
const section3Video = document.querySelector('#section03>video');
const full = document.querySelector('.full');
const slideTxt = document.querySelector('.slideTxt>h1');
const socialWrap = document.querySelector('.social');
const clickImg = document.querySelector('#clickImg>img');
const clBtn = document.querySelector('.closeBtn>i');
const card = document.getElementById('card');
const cardEvent = document.getElementById('midTxt');
const spanAll = document.querySelectorAll('.back>p>span');

function textEvent(){
  document.querySelector('.back>h2').style.opacity = "1"
  spanAll.forEach((el) => {
    el.style.opacity = "1"
  })
}
function textEventNone(){
  document.querySelector('.back>h2').style.opacity = "0"
  spanAll.forEach((el) => {
    el.style.opacity = "0"
  })
}


card.addEventListener('mouseover',() => {
  cardEvent.style.transform = 'rotateY(180deg)'
  textEvent()
})
card.addEventListener('mouseout', () => {
  cardEvent.style.transform = 'rotateY(0deg)'
  textEventNone()
})



function iconSlide(){

  document.documentElement.style.setProperty('--toggle-left16', '50%');
  document.documentElement.style.setProperty('--toggle-left25', '70%');
  document.documentElement.style.setProperty('--toggle-left34', '90%');

}
function iconSlideNone() {

  document.documentElement.style.setProperty('--toggle-left16', '0%');
  document.documentElement.style.setProperty('--toggle-left25', '0%');
  document.documentElement.style.setProperty('--toggle-left34', '0%');

}




clBtn.addEventListener('click',() => {
  document.querySelector('.iconWrap').style.opacity = "0"
  iconSlideNone();
  clickImg.style.display = "block"
})

clickImg.addEventListener('click',() => {
  document.querySelector('.iconWrap').style.opacity = "1"
  iconSlide();
  clickImg.style.display = "none"
})



let clickWindow = 0;
full.addEventListener('click',() => {
  if(clickWindow === 0){

    document.documentElement.requestFullscreen()
    clickWindow = clickWindow + 1;
  } else {

    document.exitFullscreen()
    clickWindow = clickWindow * 0;
  }
})

function aboutPage(){
  leftSpan.forEach((el) => {
    el.style.transform = `translateX(0)`
  })
}

let downPlus = 0;
function section2Txt(){
  leftSpan.forEach((el) => {
    el.style.transform = `translateX(0)`
  })
  socialWrap.style.transform = `translateY(0)`
}


window.addEventListener('wheel',(e) => {
  let scrollEvent = document.body.scrollTop;
  let seciton1Height = seciton1.scrollHeight;
  let down = e.deltaY;
  /* let allScroll = document.body.scrollHeight;

  function zeroScroll(){
    let zero = (scrollEvent - allScroll)
    
  } */

  if(scrollEvent > 0 && down < 0){
    document.getElementById('container').style.display = "flex"
  } else if(scrollEvent > 0 && down > 0){
    document.getElementById('container').style.display = "none"
  } else{
    document.getElementById('container').style.display = "none"
  }

  let scrollAll = section5.offsetTop;
  console.log(scrollAll)


  if (scrollEvent === scrollAll){    
    if(down > 0 && downPlus === 0){
      document.documentElement.style.setProperty('--toggle-top','0%');
      document.querySelector('.portImg').style.transform = 'translateY(0)'
      document.querySelector('.lastTxt>p>span:first-child').innerText = "블레이드&소울 2"
       return downPlus = 1;
    } else { if (down > 0 && downPlus === 1){
        document.documentElement.style.setProperty('--toggle-top', '20%');
        document.querySelector('.portImg').style.transform = 'translateY(-100%)'
        document.querySelector('.lastTxt>p>span:first-child').innerText = "BOSE"
        return downPlus = 2;
      } else { if (down > 0 && downPlus === 2){
          document.documentElement.style.setProperty('--toggle-top', '40%');
           document.querySelector('.portImg').style.transform = 'translateY(-200%)'
          document.querySelector('.lastTxt>p>span:first-child').innerText = "SEALIFE"
          return downPlus = 3;
        }  else { if (down > 0 && downPlus === 3){
           document.documentElement.style.setProperty('--toggle-top', '60%');
           document.querySelector('.portImg').style.transform = 'translateY(-300%)'
           document.querySelector('.lastTxt>p>span:first-child').innerText = "대신증권"
           return downPlus = 4;
         } else { if (down > 0 && downPlus === 4){
           document.documentElement.style.setProperty('--toggle-top', '80%');
           document.querySelector('.portImg').style.transform = 'translateY(-400%)'
           document.querySelector('.lastTxt>p>span:first-child').innerText = "작업 중 입니다"
           return downPlus = 0;
        } else{
          if(down < 0){
            document.documentElement.style.setProperty('--toggle-top', '0%');
            document.querySelector('.portImg').style.transform = 'translateY(0)'
            document.querySelector('.lastTxt>p>span:first-child').innerText = "블레이드&소울 2"
          }


        /*   document.documentElement.style.setProperty('--toggle-top', '0%'); */
        }
      }
    }
  }
}
  }
  
  if (window.matchMedia("(min-width: 575px)").matches) {
  if(scrollEvent > 300 || scrollEvent > seciton1Height){
    for(let i = 0;i < scrollEvent;i++){
      mainWrap.style.transform = `translate(-50%, -${i}px)`
    } } else{
    mainWrap.style.transform = `translate(-50%, -50%)`
  }
  if(scrollEvent > 0){
    document.querySelector('main>.mouse').style.opacity = "0"
    document.querySelector('.circle').classList.add('circleActive')
  } else { 
    document.querySelector('main>.mouse').style.opacity = "1"
    /* document.getElementById('container').style.display = "none" */
    document.querySelector('.circle').classList.remove('circleActive')
  }
  if(scrollEvent > 0 || scrollEvent > seciton1Height){
    for(i = 0;i < scrollEvent;i++){
    
      /* document.body.transform = `translate3d(0px, -${i}px, 0px);`   */
      seciton1.style.transform = `translateY(-${i}px)`;

      /* seciton2.style.transform = `translate3d(0px, -${i}px, 0px);`
 */
      seciton2.style.transform = `translateY(-${i - 20}px)`;
      section3.style.transform = `translateY(-${i - 500}px)`;
      /* section3.style.transform = `translate3d(0px, -${i}px, 0px);` */
      section4.style.transform = `translateY(-100%)`
    }
  } else {
    seciton1.style.transform = `translateY(0)`
    seciton2.style.transform = `translateY(0)`
  }
  if(scrollEvent > 329){
    leftH3.style.transform = `translateX(0)`

  } else {
    leftH3.style.transform = `translateX(-100%)`
  }
  if (scrollEvent > 529 && scrollEvent < 1290){
    section2Txt()
  } else {
    leftSpan.forEach((el) => {
      el.style.transform = `translateX(-200%)`
    })
    socialWrap.style.transform = `translateY(100%)`
  }
  if(scrollEvent > 1109){
    /* document.getElementById('container').style.display = "flex" */
    section3.style.opacity = `1`
  } else {
    section3.style.transform = `translateY(0)`
    section3.style.opacity = `0`
  }
  if(scrollEvent > 1000){
    section3Video.style.width = "100%";
    section3Video.style.height = "100%";

  } else {
    section3Video.style.width = "50%";
    section3Video.style.height = "50%";
  }
  } else {

  }
 console.log(scrollEvent)
})

/* if (window.matchMedia("(min-width: 575px)").matches) {
   뷰포트 너비가 400 픽셀 이상
} else { 
  뷰포트 너비가 400 픽셀 미만
}
*/


/* window.addEventListener('scroll',() => {
  let scollY = this.scrollY;
  
  console.log(scollY)
  for(let i = 0;i <= scollY;i++){
    if(scollY > 0 || scollY < 1000){
      seciton2.style.transform = `translateY(-${i}px)`
    }
  }  
}) */