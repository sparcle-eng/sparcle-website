// Typing animation for header with rotating placeholders
const typingText = document.getElementById('typingText');
const placeholders = [
    "Sparcle - AI-first productivity for macOS",
    "Type app name to launch...",
    "Press ↓ for quick access - @app, @file, @plugin...",
    "Ask anything... e.g. how's weather, organize my docs dir, play music, !<terminal-command> etc...",
    "Connects to any LLM - your private/local or popular providers...",
    "Privacy First - data is sanitized before leaving your device..."
];
let currentPlaceholderIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;
let deletingSpeed = 40;
let pauseBeforeDelete = 2000;
let pauseBeforeNext = 500;

function typeText() {
    const currentText = placeholders[currentPlaceholderIndex];
    
    if (!isDeleting) {
        // Typing
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            // Finished typing, pause then start deleting
            isDeleting = true;
            setTimeout(typeText, pauseBeforeDelete);
            return;
        }
        setTimeout(typeText, typingSpeed);
    } else {
        // Deleting
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            // Finished deleting, move to next placeholder
            isDeleting = false;
            currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
            setTimeout(typeText, pauseBeforeNext);
            return;
        }
        setTimeout(typeText, deletingSpeed);
    }
}

// Start typing animation when page loads
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 500);
});

// Waitlist form submission via Formspree

document.getElementById('waitlistForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const emailInput = document.getElementById('emailInput');
    const formMessage = document.getElementById('formMessage');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Joining...';
    submitButton.disabled = true;
    formMessage.textContent = '';
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success feedback
            formMessage.textContent = '✨ Thanks! We\'ll notify you when Sparcle launches.';
            formMessage.className = 'form-note success';
            emailInput.value = '';
        } else {
            formMessage.textContent = 'Oops! Something went wrong. Please try again.';
            formMessage.className = 'form-note error';
        }
        
    } catch (error) {
        formMessage.textContent = 'Oops! Something went wrong. Please try again.';
        formMessage.className = 'form-note error';
    } finally {
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Update active tab
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            this.classList.add('active');
            
            // Smooth scroll to target
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active tab on scroll
const sections = document.querySelectorAll('section[id]');
const navTabs = document.querySelectorAll('.nav-tab');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('href') === `#${current}`) {
            tab.classList.add('active');
        }
    });
});

// Simple animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});
