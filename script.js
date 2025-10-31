// Get the HTML elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Function to toggle the menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Add click event to hamburger
hamburger.addEventListener('click', toggleMenu);

// Add click event to each nav link to close the menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close menu only if it's open (in mobile view)
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});