/* BURGER MENU TOGGLE */
const nav = document.querySelector(".nav-ul-burger");
const burger = document.querySelector('.burger-menu-icon');
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
});

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    });
});
