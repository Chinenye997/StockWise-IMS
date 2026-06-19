    /* =========================
             REPORT ACTIONS
    ========================= */

const reportButtons =
  document.querySelectorAll(".export-buttons button");

reportButtons.forEach(button => {

  button.addEventListener("click", () => {

    alert(
      `${button.textContent} feature coming soon!`
    );

  });

});