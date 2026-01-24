const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
