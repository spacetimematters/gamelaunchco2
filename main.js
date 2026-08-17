/* =============================================================
   Page behaviour
   Theme switching, sticky nav state, signup form.
   ============================================================= */

(function () {
  'use strict';

  var root = document.documentElement;
  var STORE_KEY = 'site-theme';

  /* ---------------------------------------------------- theme toggle */

  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function resolvedTheme() {
    var set = root.getAttribute('data-theme');
    if (set === 'dark' || set === 'light') return set;
    return systemDark.matches ? 'dark' : 'light';
  }

  var toggle = document.getElementById('themeToggle');

  function syncToggle() {
    if (!toggle) return;
    var dark = resolvedTheme() === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to day mode' : 'Switch to night mode');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = resolvedTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(STORE_KEY, next); } catch (e) {}
      syncToggle();
    });
  }

  // Follow the OS while the visitor hasn't made an explicit choice.
  var onSystemChange = function () {
    if (!root.hasAttribute('data-theme')) syncToggle();
  };
  if (systemDark.addEventListener) systemDark.addEventListener('change', onSystemChange);
  else if (systemDark.addListener) systemDark.addListener(onSystemChange);

  syncToggle();

  /* ------------------------------------------------------- sticky nav */

  var nav = document.getElementById('nav');
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      if (nav) nav.classList.toggle('is-stuck', window.scrollY > 24);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* -------------------------------------------------------- signup */

  var form = document.getElementById('signupForm');
  var msg = document.getElementById('signupMsg');

  if (form && msg) {
    var input = form.querySelector('input[type="email"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = (input.value || '').trim();
      var looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

      if (!looksLikeEmail) {
        msg.textContent = 'That address won’t reach you — check it and try again.';
        msg.setAttribute('data-state', 'error');
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        return;
      }

      // No backend wired up yet — point this at the mail provider of choice.
      input.removeAttribute('aria-invalid');
      msg.setAttribute('data-state', 'ok');
      msg.textContent = 'Beacon lit. The next note finds you on Thursday.';
      form.reset();
    });

    input.addEventListener('input', function () {
      if (input.getAttribute('aria-invalid') === 'true') {
        input.removeAttribute('aria-invalid');
        msg.textContent = '';
        msg.removeAttribute('data-state');
      }
    });
  }

  /* ---------------------------------------------------------- misc */

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
