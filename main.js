const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var sal = require('sal.js');
sal({once: false,
disabled: false});


const simpleParallax = require('simpleParallax.js');
var image = document.getElementById('inspired-image-blob');
new simpleParallax(image, {
    orientation: 'right',
	overflow: true,
});

