// ===== SHARED NAVBAR & FOOTER for PR Events =====

function getCurrentPage() {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  return file;
}

function injectNavbar() {
  const page = getCurrentPage();
  const navHTML = `
  <nav class="navbar" id="navbar">
    <a href="index.html" class="nav-logo">
      <svg class="logo-svg" viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#E4C06B"/>
            <stop offset="100%" style="stop-color:#C6973F"/>
          </linearGradient>
        </defs>
        <!-- P -->
        <text x="2" y="50" font-family="Georgia, serif" font-size="58" font-style="italic" font-weight="bold" fill="url(#goldGrad)">P</text>
        <!-- R overlapping -->
        <text x="34" y="50" font-family="Georgia, serif" font-size="58" font-style="italic" font-weight="bold" fill="url(#goldGrad)" opacity="0.92">R</text>
        <!-- ornament dot -->
        <circle cx="74" cy="10" r="3" fill="#C6973F"/>
        <circle cx="74" cy="18" r="2" fill="#E4C06B"/>
      </svg>
      <div class="logo-text">
        <span class="logo-main">PR</span>
        <span class="logo-sub">Events</span>
      </div>
    </a>

    <ul class="nav-links">
      <li><a href="index.html" ${page === 'index.html' || page === '' ? 'class="active"' : ''}>Home</a></li>
        <li><a href="about.html" ${page === 'about.html' ? 'class="active"' : ''}>About Us</a></li>
      <li><a href="services.html" ${page === 'services.html' ? 'class="active"' : ''}>Services</a></li>
      <li><a href="gallery.html" ${page === 'gallery.html' ? 'class="active"' : ''}>Gallery</a></li>
      <li><a href="contact.html" class="nav-cta ${page === 'contact.html' ? 'active' : ''}">Contact Us</a></li>
    </ul>

    <div class="hamburger" id="hamburger">
      <span></span><span></span><span></span>
    </div>
  </nav>

  <div class="mobile-nav" id="mobileNav">
    <a href="index.html" ${page === 'index.html' ? 'style="color:var(--gold)"' : ''}>🏠 Home</a>
     <a href="about.html" ${page === 'about.html' ? 'style="color:var(--gold)"' : ''}>👥 About Us</a>
    <a href="services.html" ${page === 'services.html' ? 'style="color:var(--gold)"' : ''}>✨ Services</a>
    <a href="gallery.html" ${page === 'gallery.html' ? 'style="color:var(--gold)"' : ''}>📸 Gallery</a>
    <a href="contact.html" ${page === 'contact.html' ? 'style="color:var(--gold)"' : ''}>📞 Contact Us</a>
  </div>

  <!-- WhatsApp Float -->
  <a href="https://wa.me/919943910452?text=Hello%20PR%20Events!%20I%20am%20interested%20in%20your%20event%20services." 
     class="wa-float" target="_blank" title="Chat on WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  // Hamburger toggle
  document.getElementById('hamburger').addEventListener('click', () => {
    const ham = document.getElementById('hamburger');
    const mob = document.getElementById('mobileNav');
    ham.classList.toggle('active');
    mob.classList.toggle('open');
  });

  // Scroll navbar shrink
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

function injectFooter() {
  const footerHTML = `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo" style="margin-bottom:0">
          <div class="logo-text">
            <span class="logo-main">PR</span>
            <span class="logo-sub">Events</span>
          </div>
        </div>
        <p class="footer-tagline">"Two Hearts, One Journey — We Make Every Moment Magical"</p>
        <div class="footer-social">
          <a href="#" class="social-link" title="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://wa.me/919943910452" class="social-link" title="WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
          <a href="https://www.instagram.com" class="social-link" title="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.youtube.com" class="social-link" title="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Our Services</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Our Services</h4>
        <ul>
          <li><a href="services.html">Weddings & Receptions</a></li>
          <li><a href="services.html">Candid Photography</a></li>
          <li><a href="services.html">Videography</a></li>
          <li><a href="services.html">DJ Services</a></li>
          <li><a href="services.html">Beeda Counter</a></li>
          <li><a href="services.html">Refreshment Counter</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item">
          <span>📍</span>
          <span>127 Kallai Ilam, Nethaji Main Road, Nehru Nagar, Madurai</span>
        </div>
        <div class="footer-contact-item">
          <span>📞</span>
          <span><a href="tel:+919943910452" style="color:inherit">+91 99439 10452</a><br>
          <a href="tel:+919080882843" style="color:inherit">+91 90808 82843</a></span>
        </div>
        <div class="footer-contact-item">
          <span>✉️</span>
          <span><a href="mailto:praveencute417@gmail.com" style="color:inherit">praveencute417@gmail.com</a></span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2025 PR Events. All rights reserved. Madurai, Tamil Nadu.</span>
      <span>Crafted with ❤️ by <a href="#">PR Events Team</a></span>
    </div>
  </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const suffix = counter.getAttribute('data-suffix') || '';
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = current + suffix;
    }, 25);
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectFooter();
  initScrollReveal();

  // Counter trigger
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        statsObserver.disconnect();
      }
    }, { threshold: 0.5 });
    statsObserver.observe(statsBar);
  }
});
