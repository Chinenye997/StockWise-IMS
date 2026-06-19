/* =========================
   CONTACT FORM
========================= */

const contactForm =
  document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {

  e.preventDefault();

  alert("Message sent successfully!");

  contactForm.reset();

});

/* =========================
   FAQ ACCORDION
========================= */

const faqItems =
  document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const question =
    item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    item.classList.toggle("active");

  });

});