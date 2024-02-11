const sliderContainer = document.querySelector(".slide-container");
const slidLeft = document.querySelector(".left-slide");
const slidRight = document.querySelector(".right-slide");
const slidUpBtn = document.querySelector(".up-button");
const slideDownBtn = document.querySelector(".down-button");
const slidesLenght = slidRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slidLeft.style.top = `-${(slidesLenght - 1) * 100}vh`;

slidUpBtn.addEventListener("click", () => changeSlide("up"));

slideDownBtn.addEventListener("click", () => changeSlide("down"));
console.log(slideDownBtn);

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLenght - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLenght - 1;
    }
  }

  slidRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slidLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
