
const navToggleIcon=document.querySelector(".nav__toggle-icon")
const menu=document.querySelector(".menu")
const cover=document.querySelector(".cover")

const clickHandler=()=>{

    navToggleIcon.classList.toggle("nav__toggle-open")
    menu.classList.toggle("menu--open")
    cover.classList.toggle("cover--show")
}

navToggleIcon.addEventListener("click",clickHandler)

