let mobileMenu = document.querySelector(".mobile-menu");
let menu = document.querySelector(".nav ul.menu");
let login = document.querySelector(".login");
let nav = document.querySelector("nav");

mobileMenu.addEventListener("click", () => {
    menu.classList.toggle("responsive");
    login.classList.toggle("responsive");
    nav.classList.toggle("responsive");
});
  
  
 