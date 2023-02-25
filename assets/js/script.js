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

const formAuth = document.querySelectorAll("form.modal-content");
formAuth.forEach((element) => {
    element.addEventListener("submit", (event) => {
        event.preventDefault();
    });
});

const iframe = document.querySelectorAll("iframe");
const modal = document.querySelectorAll(".modal");
const close = document.querySelectorAll(".close");

const btnSignIn = document.getElementById("btnSignIn");
const btnStartFree = document.getElementById("btnStartFree");
const btnSeeHowItWorks = document.querySelector(".btn-play-wrapper");
const btnFPlayBtn = document.querySelector(".f-play-btn");

const openModal = (button, number) => {
    button.addEventListener("click", () => (modal[number].style.display = "block"));
};

openModal(btnSignIn, 0);
openModal(btnStartFree, 1);
openModal(btnSeeHowItWorks, 2);
openModal(btnFPlayBtn, 3);

for (let i = 0; i < 4; i++) {
    if (i === 2) {
        close[i].addEventListener("click", () => {
            iframe[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            modal[i].style.display = "none";
        });
    } else if (i === 3) {
        close[i].addEventListener("click", () => {
            iframe[1].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            modal[i].style.display = "none";
        });
    }
    close[i].addEventListener("click", () => (modal[i].style.display = "none"));
}

for (let i = 0; i < 4; i++) {
    window.addEventListener("click", (event) => {
        if (event.target == modal[i]) {
            if (i === 2) {
                iframe[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            } else if (i === 3) {
                iframe[1].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            }
            modal[i].style.display = "none";
        }
    });
}
