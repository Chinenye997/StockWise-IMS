// =========================
// STOCKWISE IMS MAIN JS
// GLOBAL FUNCTIONALITY
// =========================

// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}

// Dropdown Toggle (for mobile)
document.addEventListener("click", function(e) {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(drop => {
        if (!drop.contains(e.target)) {
            drop.classList.remove("show");
        }
    });
});