const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('active');
  const expanded = siteNav?.classList.contains('active');
  navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
});

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteNav?.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
