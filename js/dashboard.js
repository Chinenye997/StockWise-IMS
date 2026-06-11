/* =========================
   STOCKWISE HERO SLIDER
========================= */

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show first slide properly
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// Auto slide function
function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

// Start slider
showSlide(currentSlide);

// Change slide every 4 seconds
setInterval(nextSlide, 4000);

/* =========================
   STAT COUNTERS ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 50;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});