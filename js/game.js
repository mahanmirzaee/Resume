
const navToggleIcon=document.querySelector(".nav__toggle-icon")
const menu=document.querySelector(".menu")
const cover=document.querySelector(".cover")
const items=document.querySelectorAll(".resume-list__item")

const clickHandler=()=>{

    navToggleIcon.classList.toggle("nav__toggle-open")
    menu.classList.toggle("menu--open")
    cover.classList.toggle("cover--show")
}

navToggleIcon.addEventListener("click",clickHandler)


    // const showHandler=(event)=>{
    //     items.forEach(i=>{
    //         i.classList.remove("resume-list__item--active")
    //         event.target.classList.add("resume-list__item--active")
    //     })
    // }



    // items.forEach((item) => {

    //     item.addEventListener("click",showHandler)
        

    // });




items.forEach((item) => {

    item.addEventListener("click",function(){
        document.querySelector(".resume-list__item--active").classList.remove("resume-list__item--active")
        item.classList.add("resume-list__item--active")
    })
    

});
