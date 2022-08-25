const main = document.querySelector("main");
const hiddenTxt = document.querySelector(".hiddenTxt");
const buttonTxt = document.getElementById("buttonTxt");
const navWrap = document.querySelector(".navWrap")
const navColor = document.querySelectorAll(".menuWrap>li:not(:hover)")
const navHover = document.querySelectorAll(".menuWrap>li:hover")
const headerImg = document.querySelector('.navWrap img')
const subItem = document.querySelectorAll(".subItem");

function more() {
  main.style.height = "2000px"
  hiddenTxt.style.display = "block"
  buttonTxt.style.display = "none"
}

document.addEventListener('scroll', function () {
  var currentScrollValue = document.documentElement.scrollTop;
  if (currentScrollValue > 0) {
    navWrap.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
    headerImg.style.filter = "invert(100%)"
    navColor.forEach((el) => {
      el.style.color = "#222"
    })
    subItem.forEach((el) => {
      el.style.backgroundColor = "#9f24924c"
    })
  } else {
    navWrap.style.backgroundColor = "#9f24924c"
    headerImg.style.filter = "invert(0%)"
    navColor.forEach((el) => {
      el.style.color = "rgba(255, 255, 255, 0.7)"
    })
    subItem.forEach((el) => {
      el.style.backgroundColor = "transparent"
    })
  }
});