const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));


const header = document.querySelector('.site-header');

let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  // إظهار الهيدر في أعلى الصفحة
  if (currentScroll <= 80) {
    header.classList.remove('nav-hidden');
  }
  // النزول لأسفل: إخفاء الهيدر
  else if (currentScroll > lastScroll) {
    header.classList.add('nav-hidden');
  }
  // الصعود لأعلى: إظهار الهيدر
  else if (currentScroll < lastScroll) {
    header.classList.remove('nav-hidden');
  }

  lastScroll = currentScroll;
});

