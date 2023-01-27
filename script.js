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
const navigationLinks = document.querySelectorAll(".navigation > a");
const arrow = document.querySelector("#contact_arrow")

function viewportCeck() {
        if (viewportWidth < 768) {

                for (i = 0; i < navigationLinks.length/2; i++) {
                        footerContent.prepend(navigationLinks[i]);
                };
        
                for (i = navigationLinks.length/2; i < navigationLinks.length; i++) {
                        footerContent.appendChild(navigationLinks[i]);
                };
        };
        
        
        if (viewportWidth > 768) {
        
                navigationLinks.forEach(link => {
                        navigation.appendChild(link);
                });
        };
};

viewportCeck();

// UPDATES viewportWidth on resize 
window.addEventListener("resize", () => {
        viewportWidth = window.innerWidth;

        viewportCeck();

        console.log(viewportWidth);
});

