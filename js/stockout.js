/* =========================
   STOCK OUT FORM
========================= */

const stockOutForm =
  document.querySelector(".stockout-form");

stockOutForm.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Stock out record saved successfully!");

  stockOutForm.reset();
});

/* =========================
   SEARCH STOCK OUT
========================= */

const stockOutSearch =
  document.getElementById("stockOutSearch");

const stockOutRows =
  document.querySelectorAll(".stockout-table tbody tr");

stockOutSearch.addEventListener("keyup", function () {

  const value = this.value.toLowerCase();

  stockOutRows.forEach(row => {

    const product =
      row.children[1].textContent.toLowerCase();

    if (product.includes(value)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }

  });

});