let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

let contactStatus = false;

const footer = document.querySelector("footer");
const contactArrow = document.querySelector("#contact_arrow");

const contactInfo = document.querySelector(".contact_info");

contactArrow.addEventListener("click", () => {
    contactInfo.classList.toggle("hide");
    contactStatus = true;
});
