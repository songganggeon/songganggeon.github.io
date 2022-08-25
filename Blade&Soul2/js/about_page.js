'use strict'

const menu = document.querySelector(".navWrap");
const sec2Vedio = document.querySelector(".mainBg");
const upBtn = document.getElementById("subItem04");
const nav = document.querySelector(".navWrap");
const aboutP = document.querySelector(".aboutP")
const footerWrap = document.querySelector(".footerWrap");
const mainTxt = document.querySelector(".mainTxt")
const sc3item01 = document.querySelector(".sc3item01")
const sc3item02 = document.querySelector(".sc3item02")
const sc3item03 = document.querySelector(".sc3item03")
const sc3item04 = document.querySelector(".sc3item04")
const sc3item05 = document.querySelector(".sc3item05")
const sc3item06 = document.querySelector(".sc3item06")
const backImg = document.querySelector(".backImg")
const sc3Text = document.querySelector("#content>div:first-child")

menu.style.top = '0'
menu.style.transition = "all 0.3s"
nav.style.backgroundColor = "transparent"
sc3Event()

window.addEventListener("wheel", function (e) {
  e.preventDefault();
}, { passive: false });
var mHtml = $("html");
var page = 1;
// mHtml.animate({ scrollTop: 0 }, 10);
$(window).on("wheel", function (e) {
  if (mHtml.is(":animated")) return;
  if (e.originalEvent.deltaY > 0) {
    if (page == 4) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  var posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
  if (page !== 1) {
    upBtn.style.display = "block"
    aboutP.style.cssText = "opacity: 0; transform: translateX(-50%,-100%);"
  } else {
    upBtn.style.display = "none"
    aboutP.style.cssText = "opacity: 1; transform: translateX(-5%,-50%);"
  }
  if(page === 3){
    sc3Event()
 
  } else {
    sc3item01.style.cssText = "top: 10%; left: 0%; transform: translate(-20%,-10%)"
    sc3item02.style.cssText = "top: 30%; left: 0%; transform: translate(-30%,-20%)"
    sc3item03.style.cssText = "top: 50%; left: 0%; transform: translate(-40%,-30%)"
    sc3item04.style.cssText = "top: 70%; left: 0%; transform: translate(-50%,-40%)"
    sc3item05.style.cssText = "top: 50%; left: 0%; transform: translate(-100%,-50%);"
    sc3item06.style.cssText = "top: 30%; left: 0%; transform: translate(-80%,-30%);"
    backImg.style.cssText = "transform: translateY(100%)"
    sc3Text.style.cssText = "transform: translateX(-300%)"
  }


  if(page === 4){
    mainTxt.style.transform = "translate(-30%,-30%)"
  } else {
    mainTxt.style.transform = "translate(-300%,-30%)"
  }
})


function sc3Event(){
  sc3item01.style.cssText = "transition: all 0.7s;top: 10%; left: 15%; transform: translate(-15%,-10%)"
  sc3item02.style.cssText = "transition: all 0.8s;top: 30%; left: 25%; transform: translate(-25%,-30%)"
  sc3item03.style.cssText = "transition: all 0.9s;top: 50%; left: 35%; transform: translate(-35%,-50%)"
  sc3item04.style.cssText = "transition: all 1s;top: 70%; left: 45%; transform: translate(-45%,-70%)"
  sc3item05.style.cssText = "transition: all 0.9s;top: 60%; left: 65%; transform: translate(-65%,-60%);"
  sc3item06.style.cssText = "transition: all 0.6s;top: 30%; left: 80%; transform: translate(-80%,-30%)"
  backImg.style.cssText = "transform: translateY(0%); transition: all 1s"
  sc3Text.style.cssText = "transition: all 0.7s; transform: translateX(0)"
}


/* 
document.addEventListener('scroll', function () {
  var currentScrollValue = document.documentElement.scrollTop;
  console.log('currentScrollValue is ' + currentScrollValue);
  if (currentScrollValue >= 2500) {
    footerWrap.style.transform = `translateY(0)`
    footerWrap.style.transition = `all 0.3s`

  } else {
    footerWrap.style.transform = "translateY(400px)"
  }
  if (currentScrollValue === 1938 || currentScrollValue === 1874 || currentScrollValue === 2160) {
    mainTxt1.style.transform = "translateX(0px)"
    mainTxt1.style.opacity = "1"
    mainTxt2.style.transform = "translateX(0px)"
    mainTxt2.style.opacity = "1"
  } else {
    mainTxt1.style.transform = "translateX(1000px)"
    mainTxt1.style.opacity = "0"
    mainTxt2.style.opacity = "0"
    mainTxt2.style.transform = "translateX(-1000px)"
  }
}); */