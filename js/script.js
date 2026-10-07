// ================================
// Blisstechhub - Main JavaScript
// ================================


// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

}


// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("active");
        }

    });

});


// Automatically update the footer year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}
