document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.length > 1 && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    } else if (href === "#home" && document.getElementById("home")) {
      e.preventDefault();
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    }
  });
});
