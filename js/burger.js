const burger = document.querySelector(".burger");
const burgerClose = document.querySelector(".burger-close");
const aboutNavigationBlock = document.querySelector(".about__navigation-block");
const body = document.querySelector("body");
const hiddenBlock = document.querySelector(".hidden-block");
const navigationLink = document.querySelectorAll(".navigation__item a");

burger.addEventListener("click", () => {
  aboutNavigationBlock.classList.toggle("active");
  hiddenBlock.classList.toggle("active");
  body.classList.toggle("lock");
});

burgerClose.addEventListener("click", () => {
  aboutNavigationBlock.classList.toggle("active");
  hiddenBlock.classList.toggle("active");
  body.classList.toggle("lock");
});

for (let i = 0; i < navigationLink.length; i++) {
  navigationLink[i].addEventListener("click", () => {
    aboutNavigationBlock.classList.toggle("active");
    hiddenBlock.classList.toggle("active");
    body.classList.toggle("lock");
  });
}
