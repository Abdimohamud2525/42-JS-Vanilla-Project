const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");

let activeslide = 0;

rightBtn.addEventListener("click", () => {
  activeslide++;

  if (activeslide > slides.length - 1) {
    activeslide = 0;
  }

  setBgImg();
  setAciveSlide();
});

leftBtn.addEventListener("click", () => {
  activeslide--;

  if (activeslide < 0) {
    activeslide = slides.length - 1;
  }

  setBgImg();
  setAciveSlide();
});

setBgImg();

function setBgImg() {
  body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}

function setAciveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove();

    slide[setAciveSlide].classList.add("active");
  });
}
