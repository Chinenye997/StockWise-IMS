/* =========================
   STOCK IN FORM
========================= */

const stockInForm = document.querySelector(".stockin-form");

stockInForm.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Stock entry recorded successfully!");

  stockInForm.reset();
});

/* =========================
   STOCK ENTRY SEARCH
========================= */

const stockSearch =
  document.getElementById("stockSearch");

const stockRows =
  document.querySelectorAll(".stockin-table tbody tr");

stockSearch.addEventListener("keyup", function () {

  const value = this.value.toLowerCase();

  stockRows.forEach(row => {

    const product =
      row.children[1].textContent.toLowerCase();

    if (product.includes(value)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }

  });

});

/* =========================
   STOCK IN FORM SUBMIT
========================= */

const stockInForm = document.getElementById("stockInForm");

if (stockInForm) {

  stockInForm.addEventListener("submit", function (e) {

    e.preventDefault();

    showToast("✓ Stock Added Successfully");

    this.reset();

  });

}