const hamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__list");
const body = document.querySelector("body");
const main = document.querySelector("main");
const headerContainer = document.querySelector(".header-container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("active");
    main.classList.toggle("active");
})

document.querySelectorAll(".item--link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active"); 
    body.classList.remove("active"); 
    main.classList.remove("active"); 
}))

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        headerContainer.style.top = "0";
    } else {
        headerContainer.style.top = "-64px";
    }
    prevScrollpos = currentScrollPos;
}