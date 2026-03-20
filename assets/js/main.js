/* =============================================================
   OWL STUDIO — main.js
   Sections (in order):
   1.  Loader
   2.  Navbar scroll
   3.  Menu overlay (GSAP-animated)
   4.  Hero parallax (mouse tilt)
   5.  Scroll button
   6.  Services scroll reveal
   7.  Swiper (Our Focus)
   8.  Contact form
   9.  Custom cursor
============================================================= */

/* ─────────────────────────────────────────────────────────────
   1. LOADER — hide after page load
───────────────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => loader.classList.add('hidden'), 1200);
});

/* ─────────────────────────────────────────────────────────────
   2. NAVBAR — add .scrolled class on scroll
───────────────────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 50);
});

/* ─────────────────────────────────────────────────────────────
   3. MENU OVERLAY — circle reveal + GSAP stagger
───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  const toggle  = document.querySelector('.menu-toggle');
  const overlay = document.querySelector('.menu-overlay');
  const items   = document.querySelectorAll('.menu li');
  const closeBtn = document.getElementById('menuClose');

  if (!toggle || !overlay) return;

  // GSAP entrance animation for menu items
  const tl = gsap.timeline({ paused: true });
  tl.from(items, {
    y: 80,
    opacity: 0,
    stagger: 0.08,
    duration: 0.7,
    ease: 'power3.out',
  });

  // Open
  toggle.addEventListener('click', () => {
    toggle.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('menu-open');
    tl.play();
  });

  // Close — via close button
  closeBtn?.addEventListener('click', closeMenu);

  // Close — via nav links inside overlay
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close — Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  function closeMenu() {
    toggle.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
    tl.reverse();
  }

  /* ─────────────────────────────────────────────────────────
     4. HERO PARALLAX — subtle mouse-move tilt
  ───────────────────────────────────────────────────────── */
  const heroTitle = document.getElementById('heroTitle');

  document.addEventListener('mousemove', e => {
    if (!heroTitle) return;
    const x = (window.innerWidth  / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    heroTitle.style.transform = `translate(${x}px, ${y}px)`;
  });

  /* ─────────────────────────────────────────────────────────
     5. SCROLL BUTTON — smooth scroll to #services
  ───────────────────────────────────────────────────────── */
  const scrollBtn      = document.getElementById('scrollToServices');
  const servicesSection = document.getElementById('services');

  scrollBtn?.addEventListener('click', () => {
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  });

  /* ─────────────────────────────────────────────────────────
     6. SERVICES — scroll reveal
  ───────────────────────────────────────────────────────── */
  const services = document.querySelectorAll('.service');

  function revealServices() {
    services.forEach(service => {
      const rect = service.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        service.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealServices, { passive: true });
  revealServices(); // run once on load

  /* ─────────────────────────────────────────────────────────
     7. SWIPER — Our Focus slider
  ───────────────────────────────────────────────────────── */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.focus-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768:  { slidesPerView: 1 },
        1200: { slidesPerView: 3 },
      },
    });
  }

  /* ─────────────────────────────────────────────────────────
     8. CONTACT FORM — fetch submission
  ───────────────────────────────────────────────────────── */
  const form       = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');
  const errorMsg   = document.getElementById('formError');

  form?.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })
      .then(response => {
        if (response.ok) {
          form.reset();
          successMsg?.classList.remove('hidden');
          errorMsg?.classList.add('hidden');
        } else {
          throw new Error('Server error');
        }
      })
      .catch(() => {
        errorMsg?.classList.remove('hidden');
        successMsg?.classList.add('hidden');
      });
  });

  /* ─────────────────────────────────────────────────────────
     9. CUSTOM CURSOR — dot + lagging ring
  ───────────────────────────────────────────────────────── */
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  // Only run on desktop
  if (dot && ring && window.innerWidth > 1024) {
    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    // Dot follows cursor exactly
    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';
    });

    // Ring lerps behind cursor
    (function animate() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(animate);
    })();

    // Hover state on interactive elements
    const hoverTargets = document.querySelectorAll(
      'a, button, .btn-wrap, .service, .focus-card'
    );

    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });

    // Click pulse
    window.addEventListener('mousedown', () => ring.classList.add('click'));
    window.addEventListener('mouseup',   () => ring.classList.remove('click'));
  }

}); // end DOMContentLoaded
