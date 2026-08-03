document.getElementById('copyrightYear').textContent = new Date().getFullYear();

const galleryTrack = document.getElementById('galleryTrack');
const galleryNext = document.getElementById('galleryNext');
if (galleryTrack && galleryNext) {
  const itemsPerPage = 4;
  const totalItems = galleryTrack.children.length;
  const maxStart = Math.max(totalItems - itemsPerPage, 0);
  let start = 0;

  galleryNext.addEventListener('click', () => {
    start = start >= maxStart ? 0 : Math.min(start + itemsPerPage, maxStart);
    galleryTrack.style.transform = `translateX(-${start * (100 / itemsPerPage)}%)`;
  });
}
