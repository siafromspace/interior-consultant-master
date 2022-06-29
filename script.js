const menuBar = document.querySelector(".menu-bar")
const openMenu = document.querySelector(".fa-bars")
const closeMenu = document.querySelector(".fa-xmark")

openMenu.addEventListener('click', () => {
    menuBar.style.visibility = "visible"
})
closeMenu.addEventListener('click', () => {
    menuBar.style.visibility = "hidden"
})