/**
 * Personal Academic Homepage — Main JavaScript
 * Handles: theme toggle, scroll spy, reveal animations, mobile menu
 */

(function () {
  'use strict';

  // ============================================================
  // DOM References
  // ============================================================
  var html = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');
  var themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
  var navbar = document.getElementById('navbar');
  var navLinks = document.querySelectorAll('.nav-link');
  var mobileMenuBtn = document.getElementById('mobileMenuBtn');
  var navLinksContainer = document.getElementById('navLinks');
  var revealElements = document.querySelectorAll('.reveal');
  var sections = document.querySelectorAll('section[id]');

  // ============================================================
  // Theme Toggle
  // ============================================================

  function getPreferredTheme() {
    var stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    localStorage.setItem('theme', theme);
  }

  // Initialize theme
  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  // Listen for system theme changes (only if user hasn't set a preference)
  if (window.matchMedia) {
    var darkMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkMedia.addEventListener) {
      darkMedia.addEventListener('change', function (e) {
        if (!localStorage.getItem('theme')) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    } else if (darkMedia.addListener) {
      // Safari < 14 fallback
      darkMedia.addListener(function (e) {
        if (!localStorage.getItem('theme')) {
          applyTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  // ============================================================
  // Scroll Spy — Highlight active nav link
  // ============================================================

  function updateActiveNavLink() {
    var scrollPos = window.scrollY + 100;
    var currentId = '';

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }

  // ============================================================
  // Reveal Animations (IntersectionObserver)
  // ============================================================

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all elements immediately
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ============================================================
  // Mobile Menu
  // ============================================================

  // CRITICAL: CSS uses .navbar.nav-open to control the mobile menu state.
  // We toggle the 'nav-open' class on the navbar element, NOT on navLinks.
  if (mobileMenuBtn && navbar) {
    mobileMenuBtn.addEventListener('click', function () {
      var isOpen = navbar.classList.toggle('nav-open');
      mobileMenuBtn.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a nav link is clicked
    if (navLinksContainer) {
      navLinksContainer.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navbar.classList.remove('nav-open');
          mobileMenuBtn.classList.remove('open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // ============================================================
  // Smooth scroll for all anchor links
  // ============================================================

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ============================================================
  // Scroll event listener (throttled)
  // ============================================================

  var scrollTicking = false;
  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      window.requestAnimationFrame(function () {
        updateActiveNavLink();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  // Initial call
  updateActiveNavLink();
})();
