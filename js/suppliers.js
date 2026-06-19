/* =========================
   SUPPLIER MODAL
========================= */

const supplierModal =
  document.getElementById("supplierModal");

const openSupplierModal =
  document.getElementById("openSupplierModal");

const closeSupplierModal =
  document.getElementById("closeSupplierModal");

openSupplierModal.addEventListener("click", () => {
  supplierModal.style.display = "flex";
});

closeSupplierModal.addEventListener("click", () => {
  supplierModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === supplierModal) {
    supplierModal.style.display = "none";
  }
});

/* =========================
   SEARCH SUPPLIERS
========================= */

const supplierSearch =
  document.getElementById("supplierSearch");

const supplierRows =
  document.querySelectorAll(
    ".suppliers-table tbody tr"
  );

supplierSearch.addEventListener("keyup", function () {

  const value =
    this.value.toLowerCase();

  supplierRows.forEach(row => {

    const supplier =
      row.children[1]
      .textContent
      .toLowerCase();

    row.style.display =
      supplier.includes(value)
      ? ""
      : "none";

  });

});