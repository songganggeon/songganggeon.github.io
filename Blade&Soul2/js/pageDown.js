'use strict'

const menu = document.querySelector(".navWrap");
const sec2Vedio = document.querySelector(".mainBg");
const upBtn = document.getElementById("top");
const aside1 = document.getElementById(`asideItem1`);
const aside2 = document.getElementById(`asideItem2`);
const aside3 = document.getElementById(`asideItem3`);
const aside4 = document.getElementById(`asideItem4`);
const aside5 = document.getElementById(`asideItem5`);
const aside6 = document.getElementById(`asideItem6`);
const nav = document.querySelector(".navWrap");
const footerWrap = document.querySelector(".footerWrap")
const mainTxt1 = document.getElementById("mainTxtImage1")
const mainTxt2 = document.getElementById("mainTxtImage2")
const section3 = document.querySelector(".section3sub")


window.addEventListener("wheel", function (e) {
    e.preventDefault();
}, { passive: false });
var mHtml = $("html");
var page = 1;
mHtml.animate({ scrollTop: 0 }, 10);
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
    if(page === 2){
        aside1.classList.add("asideItem01")
        aside2.classList.add("asideItem02")
        aside3.classList.add("asideItem03")
        aside4.classList.add("asideItem01")
        aside5.classList.add("asideItem02")
        aside6.classList.add("asideItem03")
    } else {
        aside1.classList.remove("asideItem01")
        aside2.classList.remove("asideItem02")
        aside3.classList.remove("asideItem03")
        aside4.classList.remove("asideItem01")
        aside5.classList.remove("asideItem02")
        aside6.classList.remove("asideItem03")
    }
    if (page === 4) {
        mainTxt1.style.transform = "translateX(0px)"
        mainTxt2.style.transform = "translateX(0px)"
    } else {
        mainTxt1.style.transform = "translateX(1200px)"
        mainTxt2.style.transform = "translateX(-1200px)"
    }
    if (page !== 1 ) {
        menu.style.top = '0'
        nav.style.backgroundColor = "transparent"
       if(page === 3){
           sec2Vedio.style.width = '120vw'
           sec2Vedio.style.height = '120vh'
           sec2Vedio.style.transition = "all 1s"
           section3.style.opacity = "1"
       } else {
        section3.style.opacity = "0"
        sec2Vedio.style.width = '50%'
        sec2Vedio.style.height = '50%'
       }

    } else {
        upPage()
        nav.style.backgroundColor = "#9f24924c"
        upBtn.style.display = "none"
        menu.style.transition = "all 0.3s"
        if (page === 3) {
            sec2Vedio.style.width = '120vw'
            sec2Vedio.style.height = '120vh'
            sec2Vedio.style.transition = "all 0.5s"
        } else {
            sec2Vedio.style.width = '50%'
            sec2Vedio.style.height = '50%'
        }
    }
})
function upPage(){
    menu.style.top = '64px'
}



document.addEventListener('scroll', function () {
    var currentScrollValue = document.documentElement.scrollTop;
    console.log('currentScrollValue is ' + currentScrollValue);
    if (currentScrollValue >= 2500){
        footerWrap.style.transform = `translateY(0)`
        footerWrap.style.transition = `all 0.3s`

    } else {
        footerWrap.style.transform = "translateY(400px)"
    }
    if (currentScrollValue === 1938 || currentScrollValue === 1874 || currentScrollValue === 2160){
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
});