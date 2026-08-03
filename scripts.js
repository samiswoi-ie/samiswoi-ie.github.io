const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
menuBtn.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuBtn.classList.toggle('active', isOpen);
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});
mobileNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    mobileNav.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});
