// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in animation for sections
function revealSections() {
    const sections = document.querySelectorAll('section.fade-in');
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Contact form logic
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const formMessage = document.getElementById('formMessage');
        if (name && email && message) {
            formMessage.textContent = 'Thank you for reaching out, ' + name + '! I will get back to you soon.';
            formMessage.style.color = 'green';
            contactForm.reset();
        } else {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = 'red';
        }
    });
} 