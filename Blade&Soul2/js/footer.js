const footer1 = document.getElementById("footerImg1")
const footer2 = document.getElementById("footerImg2")
const footer3 = document.getElementById("footerImg3")    
const footer4 = document.getElementById("footerImg4")
const down = document.getElementById("footerBtn")
const up = document.querySelector("#footerBtn i")
const footer = document.querySelector(".footerWrap")

up.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`

footer1.addEventListener('mouseover',() => {
  footer1.style.backgroundImage = "url('common/images/inven_logo.png')"
})
footer1.addEventListener('mouseout', () => {
  footer1.style.backgroundImage = "url('common/images/inven_logo_black.png')"
})
footer2.addEventListener('mouseover', () => {
  footer2.style.backgroundImage = "url('common/images/youtube_logo.png')"
})
footer2.addEventListener('mouseout', () => {
  footer2.style.backgroundImage = "url('common/images/youtube_logo_black.png')"
})
footer3.addEventListener('mouseover', () => {
  footer3.style.backgroundImage = "url('common/images/facebook_logo.png')"
})
footer3.addEventListener('mouseout', () => {
  footer3.style.backgroundImage = "url('common/images/facebook_logo_black.png')"
})
footer4.addEventListener('mouseover', () => {
  footer4.style.backgroundImage = "url('common/images/instar_logo.png')"
})
footer4.addEventListener('mouseout', () => {
  footer4.style.backgroundImage = "url('common/images/instar_logo_black.png')"
})
let footerDown = 0;
down.addEventListener("click", () => { 
  if(footerDown === 0){
    footer.style.display = "none"; down.style.bottom = "30px"; up.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
    footerDown = footerDown + 1;
  } else {
    footer.style.display = "flex"; down.style.bottom = "250px"; up.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    footerDown = footerDown - 1;
  }
});
window.addEventListener("keydown", (e) => console.log(e));
window.addEventListener("keydown", (e) => {
  if (e.key === 'ArrowDown') {
    footer.style.display = "none"; down.style.bottom = "30px"; up.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
    footerDown = footerDown + 1;
  } else {
    footer.style.display = "flex"; down.style.bottom = "250px"; up.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    footerDown = footerDown - 1;
  }
});