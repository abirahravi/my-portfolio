// Responsive Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dynamic Role Text Fade/Typing Effect
const textElement = document.getElementById('dynamic-text');
const roles = ["Software Engineer - Intern", "Full Stack Developer", "Tech Enthusiast"];
let currentIdx = 0;

function rotateRoles() {
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.textContent = roles[currentIdx];
        textElement.style.opacity = 1;
        currentIdx = (currentIdx + 1) % roles.length;
    }, 400);
}

// Handle smooth CSS opacity transitions
textElement.style.transition = "opacity 0.4s ease";
setInterval(rotateRoles, 3000);