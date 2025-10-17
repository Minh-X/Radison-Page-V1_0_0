const userName = document.querySelectorAll(".user__name");
const costChange = document.querySelectorAll(".cost");
const toggleToMonthly = document.querySelector(".monthy__selection")
const toggleToBack = document.querySelector(".annually__selection")
const backgroundToggled = document.querySelector(".background__selection")
function userNameChangeColor() {
  for (let i = 0; i < userName.length; i++) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    userName[i].style.color = `rgb(${r}, ${g}, ${b})`;
  }
}
document.addEventListener("DOMContentLoaded", function (e) {
  userNameChangeColor();
});
toggleToMonthly.addEventListener("click",function(e){
  backgroundToggled.style.transform = "translateX(100%)"
  costChange.forEach(function(e){
    e.textContent = "$1800"
  })
})
toggleToBack.addEventListener("click",function(e){
  backgroundToggled.style.transform = null
  costChange.forEach(function(e){
    e.textContent = "$480"
  })
})