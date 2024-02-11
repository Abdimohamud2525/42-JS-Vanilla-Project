const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkbox);

function checkbox() {
  const triggbottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const Topbox = box.getBoundingClientRect().top;

    if (Topbox < triggbottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
