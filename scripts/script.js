"use strict";

/*
Getting elements
*/
const toggleNav = document.querySelector(".toggle-btn");
const mobileHeader = document.querySelector(".header-nav");
const closeNav = document.querySelector(".close-nav");
const moobileLinks = document.querySelectorAll(".mobile-link");
toggleNav.addEventListener("click", () => {
  mobileHeader.classList.add("display-header");
});

closeNav.addEventListener("click", () => {
  mobileHeader.classList.remove("display-header");
});
moobileLinks.forEach((element) => {
  element.addEventListener("click", () => {
    mobileHeader.classList.remove("display-header");
  });
});
