const magazin = document.querySelector(".magazin_cover");

magazin.addEventListener("mouseover", () => {
body.style.backgroundColor = "#FF5714";
body.style.transition = ".5s";
});
    
magazin.addEventListener("mouseleave", () => {
body.style.backgroundColor = "white";
});