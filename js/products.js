/* =========================
   PRODUCTS PAGE LOGIC
========================= */

// SEARCH FUNCTION
const searchInput = document.querySelector(".search-box input");
const tableRows = document.querySelectorAll(".product-table tbody tr");

searchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  tableRows.forEach((row) => {
    const productName = row.children[1].textContent.toLowerCase();

    if (productName.includes(value)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

/* =========================
   CATEGORY FILTER
========================= */

const filter = document.querySelector(".category-filter");

filter.addEventListener("change", function () {
  const value = this.value.toLowerCase();

  tableRows.forEach((row) => {
    const category = row.children[2].textContent.toLowerCase();

    if (value === "all" || category === value) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

/* =========================
   PRODUCT MODAL
========================= */

const modal = document.getElementById("productModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

// OPEN MODAL
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

// CLOSE MODAL
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// CLOSE WHEN CLICK OUTSIDE
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

/* =========================
   PRODUCT FORM SUBMIT
========================= */

const productForm = document.getElementById("productForm");

if (productForm) {
  productForm.addEventListener("submit", function (e) {
    e.preventDefault();

    showToast("✓ Product Added Successfully");

    if (modal) {
      modal.style.display = "none";
    }

    this.reset();
  });
}

