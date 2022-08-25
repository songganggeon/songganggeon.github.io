const left = document.querySelector(".eventBtn_left");
const right = document.querySelector(".eventBtn_right");
const asideEvent = document.querySelector("aside")

right.addEventListener("click",() => {
asideEvent.style.left = "-100%"
left.style.display = "block"
right.style.display = "none"
})

left.addEventListener("click", () => {
    asideEvent.style.left = "0"
    right.style.display = "block"
    left.style.display = "none"
})
