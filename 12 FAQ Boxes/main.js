const faqtoggle = document.querySelectorAll(".faq-toggle");

faqtoggle.forEach((tog) => {
  tog.addEventListener("click", () => {
    tog.parentNode.classList.toggle("active");
  });
});
