let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

const body = document.querySelector("body");
const container = document.querySelector(".container");

const magazin = document.querySelector(".magazin_cover");

const footer = document.querySelector("footer");
const contactArrow = document.querySelector("#contact_arrow");
const contactInfo = document.querySelector(".contact_info");

contactArrow.addEventListener("click", () => {
        contactInfo.classList.toggle("hide");
        contactInfo.scrollIntoView();
});

magazin.addEventListener("mouseover", () => {
body.style.backgroundColor = "#FF5714";
body.style.transition = ".5s";
});

magazin.addEventListener("mouseleave", () => {
body.style.backgroundColor = "white";
});