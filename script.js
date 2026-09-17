// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const mobileNav = window.matchMedia('(max-width: 900px)'); // keep in sync with styles.css

function setMenuOpen(open) {
    navLinks.classList.toggle('active', open);
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
}

hamburger.addEventListener('click', () => {
    setMenuOpen(!navLinks.classList.contains('active'));
});

// Close the menu after choosing a link, tapping outside it, or pressing Escape
navLinks.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenuOpen(false);
});

document.addEventListener('pointerdown', (e) => {
    if (!e.target.closest('.navbar')) setMenuOpen(false);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        setMenuOpen(false);
        hamburger.focus();
    }
});

// Reset the menu when the screen widens past the mobile layout (e.g. rotating a tablet)
window.addEventListener('resize', () => {
    if (!mobileNav.matches) setMenuOpen(false);
});

// Smooth scrolling for in-page links. The smoothing comes from `scroll-behavior`
// in styles.css, which also turns it off for users who prefer reduced motion.
function scrollToSection(hash) {
    if (hash === '#') {
        window.scrollTo(0, 0);
        return true;
    }
    const target = document.getElementById(hash.slice(1));
    if (!target) return false;
    target.scrollIntoView();
    return true;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (scrollToSection(this.getAttribute('href'))) {
            e.preventDefault();
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the form data to a server
        // For now, we'll just log it and show a success message
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Clear form
        contactForm.reset();
    });
}

// Scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Back to Top Button with smooth scroll
const backToTopButton = document.getElementById('back-to-top');

// Show button when user scrolls down 200px
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Smooth scroll to the very top (where the menu is) when button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}); 