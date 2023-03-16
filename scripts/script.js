"use strict";

const loader = document.querySelector(".loader");

gsap.from(".circle", {
  duration: 1,
  opacity: 0,
  y: 150,
  stagger: 0.25,
  repeat: -1,
  yoyo: true,
});

window.addEventListener("load", () => {
  loader.style.display = "none";
});
