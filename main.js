const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const backdrop = document.querySelector(".backdrop");
const navItems = document.querySelector(".nav-items");

menuBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  backdrop.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  navItems.style.display = "none";
  backdrop.style.display = "none";
});
