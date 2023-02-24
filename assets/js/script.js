const hamburger = document.querySelector("input[name=hamburger]");
const navMenu = document.querySelector(".nav-menu");
const btnNav = document.querySelector(".btn-nav");
const icon = document.querySelector("i.fa");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
    btnNav.classList.toggle("hidden");
    navbar.classList.toggle("navbar-active");

    if (hamburger.checked) {
        icon.classList.replace("fa-bars", "fa-close");
    } else {
        icon.classList.replace("fa-close", "fa-bars");
    }
});

const a = document.querySelectorAll("a");
a.forEach((element) => {
    element.addEventListener("click", (event) => event.preventDefault());
});

const btnPlayWrapper = document.querySelector(".btn-play-wrapper");
btnPlayWrapper.addEventListener("mouseenter", () => {
    const faPlay = btnPlayWrapper.querySelector(".btn-play .fa-play");
    faPlay.style.transform = "scale(1.2)";
});

btnPlayWrapper.addEventListener("mouseleave", () => {
    const faPlay = btnPlayWrapper.querySelector(".btn-play .fa-play");
    faPlay.style.transform = "scale(1)";
});

const fPlayBtn = document.querySelector(".f-play-btn");
fPlayBtn.addEventListener("mouseenter", () => {
    const faPlay = fPlayBtn.querySelector(".f-play-btn .fa-play");
    faPlay.style.transform = "scale(1.2) translate(45%, 20%)";
});

fPlayBtn.addEventListener("mouseleave", () => {
    const faPlay = fPlayBtn.querySelector(".f-play-btn .fa-play");
    faPlay.style.transform = "scale(1) translate(50%, 25%)";
});

const modal = document.getElementById("modalWrapper");
const btnSignIn = document.getElementById("btnSignIn");
const close = document.getElementsByClassName("close")[0];

btnSignIn.addEventListener("click", () => {
    modal.style.display = "block";
});

close.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
