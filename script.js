// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if(menuBtn.classList.contains('open')){
      menuBtn.classList.remove('open');
      navLinks.classList.remove('active');
    }
  });
});

// ===== Scroll Reveal Animations =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 });

// Observe all elements with .hidden class
document.querySelectorAll('.hidden, .about-text, .about-image, .experience-card, .experience').forEach(el => {
  observer.observe(el);
});

// ===== Page Loading Bar =====
const loadingBar = document.getElementById('loading-bar');

window.addEventListener('load', () => {
  // Page fully loaded
  loadingBar.style.width = '100%';
  setTimeout(() => {
    loadingBar.style.opacity = '0';
    setTimeout(() => loadingBar.remove(), 500);
  }, 500);
});

// Optional: simulate progress while loading images/videos
let progress = 0;
const increment = () => {
  if (progress < 90) {
    progress += 1;
    loadingBar.style.width = progress + '%';
    setTimeout(increment, 20); // faster/slower
  }
};
increment();

// ===== Sticky Navbar Background on Scroll =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.style.background = 'rgba(0,0,0,0.9)';
    navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
  } else {
    navbar.style.background = 'rgba(0,0,0,0.7)';
    navbar.style.boxShadow = 'none';
  }
});

// ===== Gallery Lightbox =====
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = 0;
    lightbox.style.left = 0;
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0,0,0,0.9)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = '1000';
    lightbox.style.cursor = 'pointer';

    const imgClone = img.cloneNode();
    imgClone.style.maxWidth = '90%';
    imgClone.style.maxHeight = '90%';
    imgClone.style.boxShadow = '0 8px 35px rgba(0,0,0,0.8)';
    lightbox.appendChild(imgClone);

    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });

    document.body.appendChild(lightbox);
  });
});