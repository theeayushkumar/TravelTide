const bars = document.querySelector(".bar"),
  close = document.querySelector(".close"),
  menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});
