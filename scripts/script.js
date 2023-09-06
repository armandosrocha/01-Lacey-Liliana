const nav = document.querySelector('.header');
const btn = document.querySelector('.btn-mobile-nav');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  nav.classList.toggle('nav-open');
})

// Sticky nav
const heroSection = document.querySelector('.section-hero');

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add('sticky-nav');
    }
    else
      document.body.classList.remove('sticky-nav');
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-85px'
  });

observer.observe(heroSection);
