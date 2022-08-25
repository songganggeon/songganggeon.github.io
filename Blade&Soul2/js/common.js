const xBtn = document.querySelector(".xBtn");
const eventSub = document.getElementById("eventPng");

function eventX() {
  eventSub.style.display = "none"
}

xBtn.addEventListener("click", eventX);

