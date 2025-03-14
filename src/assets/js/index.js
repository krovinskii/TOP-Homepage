document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("navLinks");
  const menuIcon = document.querySelector(".menu-btn-svg");

  if (hamburgerMenu && navLinks) {
    let isMenuOpen = false;

    hamburgerMenu.addEventListener("click", () => {
      if (!isMenuOpen) {
        navLinks.classList.add("navLinksMobile");
        navLinks.style.display = "flex";

        menuIcon.classList.add("active");

        const links = navLinks.querySelectorAll(".nav-link");
        links.forEach((link) => {
          link.classList.add("nav-link-mobile");
        });

        isMenuOpen = true;
      } else {
        menuIcon.classList.remove("active");

        setTimeout(() => {
          navLinks.classList.remove("navLinksMobile");
          navLinks.style.display = "none";

          const links = navLinks.querySelectorAll(".nav-link-mobile");
          links.forEach((link) => {
            link.classList.remove("nav-link-mobile");
          });
        }, 300);

        isMenuOpen = false;
      }
    });

    document.addEventListener("click", (event) => {
      if (
        isMenuOpen &&
        !navLinks.contains(event.target) &&
        !hamburgerMenu.contains(event.target)
      ) {
        menuIcon.classList.remove("active");

        setTimeout(() => {
          navLinks.classList.remove("navLinksMobile");
          navLinks.style.display = "none";

          const links = navLinks.querySelectorAll(".nav-link-mobile");
          links.forEach((link) => {
            link.classList.remove("nav-link-mobile");
          });
        }, 300);

        isMenuOpen = false;
      }
    });
  }
});
