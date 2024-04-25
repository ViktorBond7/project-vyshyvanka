(() => {
  const refs = {
    openMenuBtn: document.querySelector('#mobileMenuBtn'),
    closeMenuBtn: document.querySelector('#closeMenuBtn'),
    menuDiv: document.querySelector('.header-backdrop'),
    menuLinks: document.querySelectorAll('.header-mob-menu-nav-link'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuLinks.forEach(element =>
    element.addEventListener('click', closeMenu)
  );

  function toggleMenu() {
    refs.menuDiv.classList.toggle('is-open');
  }

  function closeMenu() {
    refs.menuDiv.classList.remove('is-open');
  }
})();
