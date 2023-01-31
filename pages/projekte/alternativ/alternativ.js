const swiper = new Swiper('.swiper', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

// RANDOM COLOR CHANGE ON CONTENT HOVER
const body = document.querySelector("body");
const content = document.querySelectorAll(".content");
const colorMin = 80;
const colorMax = 210;

function randomRGB() {
        let RGB1 = Math.floor(Math.random() * (colorMax - colorMin) + colorMin);
        let RGB2 = Math.floor(Math.random() * (colorMax - colorMin) + colorMin);
        let RGB3 = Math.floor(Math.random() * (colorMax - colorMin) + colorMin);
        return RGBColor = "rgb(" + RGB1 + "," + RGB2 + "," + RGB3 + ")";  
};

console.log(content);

content.forEach(element => {
        
        element.addEventListener("mouseover", () => {
        body.style.backgroundColor = randomRGB();
        body.style.transition = ".5s";
        });
                
        element.addEventListener("mouseleave", () => {
        body.style.backgroundColor = "white";
        });
});