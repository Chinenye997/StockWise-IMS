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