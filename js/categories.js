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