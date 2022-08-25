'use strict';

const start = document.getElementById("playBtn");
const app = document.querySelector(".app");
const videoChange = document.getElementById("bgVideo");
console.log(videoChange)
let startBtn = 0;
function startGame() {
  if (startBtn === 0) {
    app.style.display = "grid"
    start.style.backgroundColor = "rgba(0,0,0,0.7)"
    startBtn = startBtn + 1;
  } else if (startBtn === 1) {
    app.style.display = "none"
    start.style.backgroundColor = "transparent"
    startBtn = startBtn - 1;
  }
}
start.addEventListener("click", startGame)