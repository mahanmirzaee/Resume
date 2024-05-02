const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");
const showresume = document.querySelectorAll(".resume-list__item");



navToggleIcon.addEventListener("click", clickHandler);

const showHandler = (event) => {
  showresume.forEach((item) => {
    item.classList.remove("resume-list__item--active");
    event.target.classList.add("resume-list__item--active");
  });
};


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
