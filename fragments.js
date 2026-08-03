async function loadFragment(mountId, url) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  const response = await fetch(url);
  mount.outerHTML = await response.text();
}

Promise.all([
  loadFragment('site-header', 'fragments/header.html'),
  loadFragment('site-footer', 'fragments/footer.html'),
]).then(() => {
  const copyrightYearEl = document.getElementById('copyrightYear');
  if (copyrightYearEl) copyrightYearEl.textContent = new Date().getFullYear();
});
