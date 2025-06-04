document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIconOpen = document.getElementById("menuIconOpen");
  const menuIconClose = document.getElementById("menuIconClose");

  if (mobileMenuButton && mobileMenu && menuIconOpen && menuIconClose) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      menuIconOpen.classList.toggle("hidden");
      menuIconClose.classList.toggle("hidden");
    });

    const mobileNavLinks = mobileMenu.querySelectorAll("a");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuIconOpen.classList.remove("hidden");
        menuIconClose.classList.add("hidden");
      });
    });
  }
});
