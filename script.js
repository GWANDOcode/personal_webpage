let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

const body = document.querySelector("body");
const container = document.querySelector(".container");

const footer = document.querySelector("footer");
const contactArrow = document.querySelector("#contact_arrow");
const contactInfo = document.querySelector(".contact_info");

// MAKES CONTACT ARROW PULL UP CONTACT TAB
contactArrow.addEventListener("click", () => {
        contactInfo.classList.toggle("hide");
});


// SCREEN SMALLER 768px
const footerContent = document.querySelector(".footer_content");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation > a");
const arrow = document.querySelector("#contact_arrow")

function viewportCeck() {
        if (viewportWidth < 768) {

                navigationLinks.forEach(link => {
                        footerContent.prepend(link);
                }); 
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
});


// RANDOM COLOR CHANGE ON CONTENT HOVER
const content = document.querySelectorAll(".content");
const colorMin = 80;
const colorMax = 210;

function randomRGB() {
        let RGB1 = Math.floor(Math.random() * (colorMax - colorMin) + colorMin);
        let RGB2 = Math.floor(Math.random() * (colorMax - colorMin) + colorMin);
        let RGB3 = Math.floor(Math.random() * (colorMax - colorMin) + colorMin);
        return RGBColor = "rgb(" + RGB1 + "," + RGB2 + "," + RGB3 + ")";  
};

content.forEach(element => {
        
        element.addEventListener("mouseover", () => {
        body.style.backgroundColor = randomRGB();
        body.style.transition = ".5s";
        });
                
        element.addEventListener("mouseleave", () => {
        body.style.backgroundColor = "white";
        });
});



