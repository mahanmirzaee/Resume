const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");
const showresume = document.querySelectorAll(".resume-list__item");

const clickHandler = () => {
  navToggleIcon.classList.toggle("nav__toggle-open");
  menu.classList.toggle("menu--open");
  cover.classList.toggle("cover--show");
};

navToggleIcon.addEventListener("click", clickHandler);

const showHandler = (event) => {
  showresume.forEach((item) => {
    item.classList.remove("resume-list__item--active");
    event.target.classList.add("resume-list__item--active");
  });
};

showresume.forEach((button) => {
  button.addEventListener("click", showHandler);
});
