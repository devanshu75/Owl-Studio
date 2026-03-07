document.addEventListener("DOMContentLoaded", function () {
  /* ================= MENU ================= */
  const toggle = document.querySelector(".menu-toggle");
  const overlay = document.querySelector(".menu-overlay");
  const items = document.querySelectorAll(".menu li");

  const tl = gsap.timeline({ paused: true });

  tl.from(items, {
    y: 80,
    opacity: 0,
    stagger: 0.08,
    duration: 0.7,
    ease: "power3.out",
  });

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    overlay.classList.toggle("active");

    overlay.classList.contains("active") ? tl.play() : tl.reverse();
  });

  const closeBtn = document.getElementById("menuClose");

  closeBtn.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
    menuToggle.classList.remove("active");
    document.body.classList.remove("menu-open");
  });

  /* ================= HERO PARALLAX ================= */

  const hero = document.getElementById("heroTitle");

  document.addEventListener("mousemove", (e) => {
    if (!hero) return;
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    hero.style.transform = `translate(${x}px, ${y}px)`;
  });

  /* ================= NAVBAR SCROLL ================= */

  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    navbar?.classList.toggle("scrolled", window.scrollY > 50);
  });

  /* ================= SERVICES REVEAL ================= */

  const services = document.querySelectorAll(".service");

  function revealServices() {
    services.forEach((service) => {
      const rect = service.getBoundingClientRect();
      if (rect.top < window.innerHeight - 120) {
        service.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealServices);
  revealServices();

  /* ================= SCROLL BUTTON ================= */

  const scrollBtn = document.getElementById("scrollToServices");
  const servicesSection = document.getElementById("services");

  scrollBtn?.addEventListener("click", () => {
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  });

  /* ================= SWIPER ================= */

  if (typeof Swiper !== "undefined") {
    new Swiper(".focus-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 1 },
        1200: { slidesPerView: 3 },
      },
    });
  }

  /* ================= CONTACT FORM ================= */

  const form = document.getElementById("contactForm");

  form?.addEventListener("submit", function (e) {
    e.preventDefault();

    const successMsg = document.getElementById("formSuccess");
    const errorMsg = document.getElementById("formError");

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          successMsg?.classList.remove("hidden");
          errorMsg?.classList.add("hidden");
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        errorMsg?.classList.remove("hidden");
        successMsg?.classList.add("hidden");
      });
  });

  /* ================= CUSTOM CURSOR ================= */

  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  if (dot && ring && window.innerWidth > 1024) {
    document.body.style.cursor = "none";

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    });

    function animate() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";

      requestAnimationFrame(animate);
    }
    animate();

    const hoverElements = document.querySelectorAll(
      "a, button, .btn-wrap, .service",
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
    });

    window.addEventListener("mousedown", () => ring.classList.add("click"));
    window.addEventListener("mouseup", () => ring.classList.remove("click"));
  }
});

// ================= LOADER =================

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1200); // Adjust timing if needed
});

// ============ Hero Text Animation =============
