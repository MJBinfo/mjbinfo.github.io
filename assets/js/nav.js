(function () {
  var nav = document.querySelector('nav');
  var btn = document.querySelector('.nav-hamburger');
  if (!btn) return;

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  // close on drawer link click
  var drawerLinks = document.querySelectorAll('.nav-drawer a');
  drawerLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // close on outside click
  document.addEventListener('click', function () {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
})();
