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

const container = document.querySelector('.slider');
const options = {
      listener: container,
      multiplier: 1 // default: 1
};
const drag = new Drag(options);

import {tns} from './src/tiny-slider.js';

var slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: 'page',
  autoplay: true
});

const simpleParallax = require('simple-parallax-js');
