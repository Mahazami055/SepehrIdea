const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("فرم تماس ارسال شد (نمایشی).");
  });
}
