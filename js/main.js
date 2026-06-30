// =========================
// STOCKWISE IMS MAIN JS
// GLOBAL FUNCTIONALITY
// =========================

/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Dropdown Toggle (for mobile)
document.addEventListener("click", function(e) {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(drop => {
        if (!drop.contains(e.target)) {
            drop.classList.remove("show");
        }
    });
});

/* ====================
   SCROLL REVEAL
======================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =====================
   COUNTER ANIMATION
======================== */

const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {
  const target = +counter.dataset.target;
  const duration = 3000; // 2 seconds
  const increment = target / (duration / 20);

  let current = 0;

  const updateCounter = () => {
    current += increment;

    if (current < target) {
      counter.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
}

let counterStarted = false;

window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".counter");

  if (!statsSection || counterStarted) return;

  const top = statsSection.getBoundingClientRect().top;

  if (top < window.innerHeight) {
    counterStarted = true;

    counters.forEach(counter => animateCounter(counter));
  }
});

/* =========================
   BACK TO TOP BUTTON
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const backToTop = document.getElementById("backToTop");

  if (!backToTop) return;

  window.addEventListener("scroll", () => {

    if (window.pageYOffset > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }

  });

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});

/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {

  const preloader = document.getElementById("preloader");

  if (!preloader) return;

  setTimeout(() => {

    preloader.classList.add("hide");

  }, 2000);

});