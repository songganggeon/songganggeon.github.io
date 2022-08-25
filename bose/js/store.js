const left = document.getElementById('left');
const right = document.getElementById('right');
const subWrap = document.querySelector('.subContent>div');
const footerWrap = document.getElementById('footerWrap')
const imgFirst = document.querySelector('#productSub>div>img:first-child');
const imgLast = document.querySelector('#productSub>div>img:last-child');
const middleImg = document.querySelector('#middle>img');
const middle2Img = document.querySelector('#middle2>img');
const middle4Img = document.querySelector('#middle4>img');
const midTxt = document.querySelector('.midTxt')
const h3Event = document.querySelectorAll('#middle>h3>span')

h3Event.forEach((el) => {
    el.style.transform = 'translateX(-100%)'
})
h3Event[0].style.transition = 'all 0.3s'
h3Event[1].style.transition = 'all 0.5s'
h3Event[2].style.transition = 'all 0.7s'
h3Event[3].style.transition = 'all 1s'
h3Event[4].style.transition = 'all 1.2s'
middle2Img.addEventListener('mouseover', () => {
    middle2Img.src = 'common/images/subMid_hover1.png'
})
middle2Img.addEventListener('mouseout', () => {
    middle2Img.src = 'common/images/subMid.png'
})

function leftEvent(){
    subWrap.style.transform = "translateX(-30vw)"
}
function rightEvent() {
    subWrap.style.transform = "translateX(0)"
}

left.addEventListener('click',() => {
    leftEvent()
})
right.addEventListener('click', () => {
    rightEvent()
})
imgFirst.addEventListener('click', () => {
    leftEvent()
})
imgLast.addEventListener('click', () => {
    rightEvent()
})

window.addEventListener('wheel', () => {
    let scrollEvent = document.body.scrollTop;

    console.log(scrollEvent)

    if (scrollEvent >= 2400){
        middleImg.style.width = '100%'
    } else { 
        middleImg.style.width = '0'
    }
    if (scrollEvent >= 3400) {
        h3Event.forEach((el) => {
            el.style.transform = 'translateX(0)'
        })
    } else {
        h3Event.forEach((el) => {
            el.style.transform = 'translateX(-100%)'
        })
    }
    if (scrollEvent >= 7800) {
        midTxt.style.transform = "translate(0)"
        middle4Img.style.transform = "translate(0)"
    } else if (scrollEvent < 7800) {
        middle4Img.style.transform = "translate(100%)"
        midTxt.style.transform = "translate(-100%)"
    }
    if (scrollEvent >= 8500) {
        footerWrap.style.bottom = "0"
    } else if (scrollEvent < 8500) {
        footerWrap.style.bottom = "-100%"
    }
})