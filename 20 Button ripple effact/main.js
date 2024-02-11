const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonleft = e.target.offsetLeft;

    const xInside = x - buttonleft;
    const yInside = y - buttonTop;

    console.log(xInside, yInside);
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = xInside + "px";
    circle.style.left = yInside + "px";

    this.appendChild(circle);
  });
});
