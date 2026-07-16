/* =========================
   CATEGORY MODAL
========================= */

const categoryModal =
  document.getElementById("categoryModal");

const openCategoryModal =
  document.getElementById("openCategoryModal");

const closeCategoryModal =
  document.getElementById("closeCategoryModal");

openCategoryModal.addEventListener("click", () => {
  categoryModal.style.display = "flex";
});

closeCategoryModal.addEventListener("click", () => {
  categoryModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === categoryModal) {
    categoryModal.style.display = "none";
  }
});


/* =========================
   CATEGORY FORM SUBMIT
========================= */

const categoryForm = document.getElementById("categoryForm");

if (categoryForm) {

  categoryForm.addEventListener("submit", function (e) {

    e.preventDefault();

    showToast("✓ Category Added Successfully");

    // Close the modal
    const modal = document.getElementById("categoryModal");

    if (modal) {
      modal.style.display = "none";
    }

    // Reset the form
    this.reset();

  });

}
