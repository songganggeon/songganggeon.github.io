const asideBoxFirst = document.querySelectorAll('.asideBox>div:first-child');
const asideBoxLast = document.querySelectorAll('.asideBox>div:last-child');
const footerWrap = document.getElementById('footerWrap')

asideBoxFirst.forEach((el) => {
    el.style.transform = "translateX(-200%)"
    el.style.transition = "all 0.7s"
})
asideBoxLast.forEach((el) => {
    el.style.transform = "translateX(200%)"
    el.style.transition = "all 0.7s"
})

window.addEventListener('wheel', () => {
    let scrollEvent = document.body.scrollTop;
    if(scrollEvent > 700){
        asideBoxFirst[0].style.transform = "translateX(0)"
    } else {
        asideBoxFirst[0].style.transform = "translateX(-200%)"
    }
    if (scrollEvent > 1200) {
        asideBoxFirst[1].style.transform = "translateX(0)"
    } else {
        asideBoxFirst[1].style.transform = "translateX(-200%)"
    }
    if (scrollEvent > 1700) {
        asideBoxFirst[2].style.transform = "translateX(0)"
    } else {
        asideBoxFirst[2].style.transform = "translateX(-200%)"
    }
    if (scrollEvent > 1000) {
        asideBoxLast[0].style.transform = "translateX(0)"
    } else {
        asideBoxLast[0].style.transform = "translateX(200%)"
    }
    if (scrollEvent > 1500) {
        asideBoxLast[1].style.transform = "translateX(0)"
    } else {
        asideBoxLast[1].style.transform = "translateX(200%)"
    }
    if (scrollEvent > 2000) {
        asideBoxLast[2].style.transform = "translateX(0)"
    } else {
        asideBoxLast[2].style.transform = "translateX(200%)"
    }
    if(scrollEvent >= 2500) {
        footerWrap.style.bottom = "0"
    }else if (scrollEvent < 2500) {
        footerWrap.style.bottom = "-100%"
    }
})