const galleryTrack = document.getElementById('galleryTrack');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
if (galleryTrack && galleryPrev && galleryNext) {
  const totalPages = galleryTrack.children.length; // includes leading + trailing clone pages
  const firstRealPage = 1;
  const lastRealPage = totalPages - 2;
  const autoRotateDelay = 4500;
  let page = firstRealPage;
  let autoRotateTimer;
  let isAnimating = false;

  const jumpTo = (index) => {
    galleryTrack.style.transition = 'none';
    page = index;
    galleryTrack.style.transform = `translateX(-${page * 100}%)`;
    galleryTrack.offsetWidth; // force reflow so the jump applies before re-enabling the transition
    galleryTrack.style.transition = '';
  };

  const goToPage = (index) => {
    if (isAnimating) return;
    isAnimating = true;
    page = index;
    galleryTrack.style.transform = `translateX(-${page * 100}%)`;
  };

  const nextPage = () => goToPage(page + 1);
  const prevPage = () => goToPage(page - 1);

  galleryTrack.addEventListener('transitionend', () => {
    if (page === totalPages - 1) {
      jumpTo(firstRealPage);
    } else if (page === 0) {
      jumpTo(lastRealPage);
    }
    isAnimating = false;
  });

  jumpTo(firstRealPage);
  autoRotateTimer = setInterval(nextPage, autoRotateDelay);

  const stopAutoRotate = () => clearInterval(autoRotateTimer);

  galleryNext.addEventListener('click', () => {
    stopAutoRotate();
    nextPage();
  });
  galleryPrev.addEventListener('click', () => {
    stopAutoRotate();
    prevPage();
  });
}
