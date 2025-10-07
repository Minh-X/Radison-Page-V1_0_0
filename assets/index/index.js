const userName = document.querySelectorAll(".user__name");
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
