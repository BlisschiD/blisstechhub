/* =========================================
   BLISSTECHHUB
   Main JavaScript
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");


// Mobile navigation
if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const isOpen = navbar.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

}


// Close menu when a navigation link is clicked
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
        }

    });

});


// Automatically update copyright year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
