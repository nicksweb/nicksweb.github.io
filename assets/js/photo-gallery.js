/* A photograph viewer with ordinary image links as the no-JavaScript fallback. */
(() => {
  document.querySelectorAll('[data-photo-gallery]').forEach((gallery) => {
    if (gallery.dataset.ready) return;
    const thumbs = Array.from(gallery.querySelectorAll('[data-gallery-thumb]'));
    const image = gallery.querySelector('[data-gallery-main-image]');
    const link = gallery.querySelector('[data-gallery-main-link]');
    const caption = gallery.querySelector('[data-gallery-caption]');
    const counter = gallery.querySelector('[data-gallery-counter]');
    if (!image || !link || !caption || !counter || !thumbs.length) return;
    gallery.dataset.ready = 'true';
    let current = 0;

    function show(index) {
      current = (index + thumbs.length) % thumbs.length;
      const thumb = thumbs[current];
      image.src = thumb.href;
      image.alt = thumb.querySelector('img').alt;
      image.width = Number(thumb.dataset.width);
      image.height = Number(thumb.dataset.height);
      link.href = thumb.href;
      caption.textContent = thumb.dataset.caption;
      counter.textContent = `${current + 1} / ${thumbs.length}`;
      thumbs.forEach((item) => item.removeAttribute('aria-current'));
      thumb.setAttribute('aria-current', 'true');
    }

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        show(index);
      });
      thumb.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        if (event.key === 'Home') show(0);
        else if (event.key === 'End') show(thumbs.length - 1);
        else show(index + (event.key === 'ArrowRight' ? 1 : -1));
        thumbs[current].focus();
      });
    });
    gallery.querySelector('[data-gallery-previous]').addEventListener('click', () => show(current - 1));
    gallery.querySelector('[data-gallery-next]').addEventListener('click', () => show(current + 1));
    gallery.querySelector('[data-gallery-controls]').hidden = false;
  });
})();
