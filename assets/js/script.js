document.addEventListener('DOMContentLoaded', function () {
  const navTogglers = document.querySelectorAll('[data-nav-toggler]');
  const navbar = document.querySelector('[data-navbar]');
  const navToggleBtn = document.querySelector('.nav-toggle-btn');
  const navbarLinks = document.querySelectorAll('.navbar-link');
  const header = document.querySelector('[data-header]');

  const toggleNavbar = function () {
    navbar.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
    document.querySelector('[data-overlay]').classList.toggle('active');
    document.body.classList.toggle('nav-active');
  };

  navTogglers.forEach(toggler => toggler.addEventListener('click', toggleNavbar));

  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbar.classList.contains('active')) toggleNavbar();
    });
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY >= 100);
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
