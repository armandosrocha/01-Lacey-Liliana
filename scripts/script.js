const nav = document.querySelector('.header');
const btn = document.querySelector('.btn-mobile-nav');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  nav.classList.toggle('nav-open');
})
