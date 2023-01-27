let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

const body = document.querySelector("body");
const container = document.querySelector(".container");

const footer = document.querySelector("footer");
const contactArrow = document.querySelector("#contact_arrow");
const contactInfo = document.querySelector(".contact_info");

contactArrow.addEventListener("click", () => {
        contactInfo.classList.toggle("hide");
        contactInfo.scrollIntoView();
});

// SCREEN SMALLER 768px
const footerContent = document.querySelector(".footer_content");
const navigation = document.querySelector(".navigation");

if (viewportWidth < 768) {
        footerContent.appendChild(navigation);
};