const navigationContent = document.querySelector(".navigation__container")
document.addEventListener("scroll",function(e){
    navigationResize()
})
function navigationResize(){
    navigationContent.classList.add("__Resize")
}