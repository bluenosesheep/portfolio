const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
document.body.classList.add('animate-ready');

addEventListener('scroll', () => nav?.classList.toggle('scrolled', scrollY > 16), { passive: true });
toggle?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const box = document.querySelector('.lightbox');
const boxImage = box?.querySelector('img');
document.querySelectorAll('.board img, .gallery-item img').forEach(img => img.addEventListener('click', () => {
  boxImage.src = img.src;
  boxImage.alt = img.alt;
  box.classList.add('open');
  document.body.style.overflow = 'hidden';
}));
const closeBox = () => {
  box?.classList.remove('open');
  document.body.style.overflow = '';
};
box?.addEventListener('click', e => { if (e.target === box || e.target.tagName === 'BUTTON') closeBox(); });
addEventListener('keydown', e => { if (e.key === 'Escape') closeBox(); });
