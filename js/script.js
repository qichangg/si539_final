
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.close-btn');

  const triggers = Array.from(document.querySelectorAll('.lightbox-trigger'));

  // Open lightbox
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      lightbox.style.display = 'block';
      lightboxImg.src = this.src;
      const title = this.dataset.title || this.alt || '';
      const desc  = this.dataset.description || '';
      lightboxCaption.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;
    });
  });

  // Close lightbox
  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
      lightbox.style.display = 'none';
    }
  });
});