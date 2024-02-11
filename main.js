let progress = document.getElementById("progress");
let circle = document.querySelectorAll(".circle");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;

  // jos nykyinen aktiivinen numero on suurempi kuin circle . pituus pituus circle
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circle.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circle.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
