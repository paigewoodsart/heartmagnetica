// Heart Magnetica: nav reveal, mobile menu, credentials toggle. No animation.

(function () {
  var nav = document.getElementById('nav');
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');

  // Nav appears only once the visitor scrolls
  function updateNav() {
    var show = window.scrollY > 40;
    nav.classList.toggle('is-visible', show);
    if (!show) closeMenu();
  }

  function closeMenu() {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // Credentials: first six visible, the rest behind View All
  var list = document.getElementById('credentials');
  var listToggle = document.getElementById('credentials-toggle');
  listToggle.addEventListener('click', function () {
    var open = list.classList.toggle('is-open');
    listToggle.setAttribute('aria-expanded', String(open));
    listToggle.textContent = open ? 'View Less' : 'View All';
  });
})();
