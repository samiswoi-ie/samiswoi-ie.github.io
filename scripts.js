document.getElementById('copyrightYear').textContent = new Date().getFullYear();

const galleryTrack = document.getElementById('galleryTrack');
const galleryNext = document.getElementById('galleryNext');
if (galleryTrack && galleryNext) {
  const realPageCount = galleryTrack.children.length - 1; // last child is the clone of page 1
  const autoRotateDelay = 4500;
  let page = 0;
  let autoRotateTimer;

  const goToPage = (index) => {
    page = index;
    galleryTrack.style.transform = `translateX(-${page * 100}%)`;
  };

  const nextPage = () => goToPage(page + 1);

  galleryTrack.addEventListener('transitionend', () => {
    if (page === realPageCount) {
      galleryTrack.style.transition = 'none';
      page = 0;
      galleryTrack.style.transform = 'translateX(0%)';
      galleryTrack.offsetWidth; // force reflow so the jump applies before re-enabling the transition
      galleryTrack.style.transition = '';
    }
  });

  const restartAutoRotate = () => {
    clearInterval(autoRotateTimer);
    autoRotateTimer = setInterval(nextPage, autoRotateDelay);
  };

  galleryNext.addEventListener('click', () => {
    nextPage();
    restartAutoRotate();
  });

  restartAutoRotate();
}
