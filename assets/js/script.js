'use strict';

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

document.addEventListener("DOMContentLoaded", function () {

  // PRELOADER (optionnel, seulement si l'élément existe)
  const preloader = document.querySelector("[data-preloader]");
  if (preloader) {
    preloader.classList.add("loaded");
  }
  document.body.classList.add("loaded");

  // NAVBAR
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  const navToggleBtn = document.querySelector(".nav-toggle-btn");

  console.log("DEBUG:", {
    navTogglers: navTogglers.length,
    navbar: !!navbar,
    overlay: !!overlay,
    navToggleBtn: !!navToggleBtn
  });

  const toggleNavbar = function () {
    console.log("toggleNavbar appelée !");
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }

  navTogglers.forEach(toggler => {
    toggler.addEventListener("click", toggleNavbar);
  });

  // Ferme le menu au clic sur un lien
  document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', function() {
      if (navbar.classList.contains('active')) toggleNavbar();
    });
  });

  // HEADER scroll
  const header = document.querySelector("[data-header]");
  window.addEventListener("scroll", function () {
    header.classList.toggle("active", window.scrollY >= 100);
  });

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

});
