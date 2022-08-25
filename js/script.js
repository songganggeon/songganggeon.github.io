const spanEl = document.querySelector("main h2 span");
const txtArr = ['Web Publisher','Front-End Developer','Web UI Designer','UX Designer','Back-End Dev']
let index = 0;
let currentTxt = txtArr[index].split(""); //문자열 단위

function writeTxt(){
    spanEl.textContent += currentTxt.shift() //가장 앞에 부분
    if(currentTxt.length !== 0)
    {
        setTimeout(writeTxt, Math.random() * 100); //랜덤으로 부분텍스트를 실행 }
    } else {
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
    }
}
function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.random() * 100)
    } else {
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}

writeTxt();


/* (function(){
    const headerEl = document.querySelector("header");
    window.addEventListener("scroll", function () {
        this.requestAnimationFrame(scrollCheck); //최적화
    })

    function scrollCheck() {
        const browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
        if (browserScrollY > 0) {
            headerEl.classList.add("active");
        } else {
            headerEl.classList.remove("active");
        }
    }
})() */


/*     const animationMove = function (selector) {
        const target = document.querySelector(selector);
        const browserScrollY = window.pageXOffset;
        const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
        window.scrollTo({ top: targetScrollY, behavior: 'smooth' })
    }

 */
/*     const scrollMoveEl = document.querySelectorAll("[data-animation-scroll = 'true']")
    for (let i = 0; i < scrollMoveEl.length; i++) {
        scrollMoveEl[i].addEventListener("click", function (e) {
            animationMove(this.dataset.target);
        });
    } */