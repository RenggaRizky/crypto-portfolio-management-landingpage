const hamburger = document.querySelector("input[name=hamburger]");
const navMenu = document.querySelector(".nav-menu");
const btnNav = document.querySelector(".btn-nav");
const icon = document.querySelector("i.fa");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    btnNav.classList.toggle("hidden");

    if (hamburger.checked) {
        icon.classList.replace("fa-bars", "fa-close");
    } else {
        icon.classList.replace("fa-close", "fa-bars");
    }
});
