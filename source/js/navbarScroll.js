const navbar = document.getElementById('site-navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');

if (navbar) {
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const syncNavbar = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop <= 12) {
      navbar.classList.remove('is-hidden');
      lastScrollTop = currentScrollTop;
      return;
    }

    if (currentScrollTop > lastScrollTop + 8) {
      navbar.classList.add('is-hidden');
    } else if (currentScrollTop < lastScrollTop - 8) {
      navbar.classList.remove('is-hidden');
    }

    lastScrollTop = currentScrollTop;
  };

  window.addEventListener('scroll', syncNavbar, { passive: true });
}

if (navbar && navbarToggle && navbarLinks) {
  const closeMenu = () => {
    navbar.classList.remove('is-menu-open');
    navbarToggle.setAttribute('aria-expanded', 'false');
  };

  navbarToggle.addEventListener('click', () => {
    const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
    navbar.classList.toggle('is-menu-open', !isExpanded);
    navbarToggle.setAttribute('aria-expanded', String(!isExpanded));
  });

  navbarLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      closeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 888) {
      closeMenu();
    }
  });
}
