
// Select HTML elements
const navbar = document.querySelector(".navbar");

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.querySelectorAll(".nav-links a");


// Handle hamburger button click
menuToggle.addEventListener("click", function () {

    // Add or remove active class
    navbar.classList.toggle("active");

    // Check whether the menu is open
    const isOpen = navbar.classList.contains("active");

    // Update accessibility state
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Update accessible button name
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    // Change hamburger icon
    menuToggle.textContent = isOpen ? "×" : "☰";

});


// Close menu when a navigation link is clicked
navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuToggle.textContent = "☰";

    });

});
