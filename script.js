// Simple client-side email collection (for demo purposes)
// In production, replace with actual backend API

document.getElementById('waitlistForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const formMessage = document.getElementById('formMessage');
    const email = emailInput.value.trim();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'form-note error';
        return;
    }
    
    // Store in localStorage for now (replace with API call in production)
    try {
        const waitlist = JSON.parse(localStorage.getItem('sparcle_waitlist') || '[]');
        
        if (waitlist.includes(email)) {
            formMessage.textContent = 'You\'re already on the waitlist!';
            formMessage.className = 'form-note';
            return;
        }
        
        waitlist.push(email);
        localStorage.setItem('sparcle_waitlist', JSON.stringify(waitlist));
        
        // Success feedback
        formMessage.textContent = '✨ Thanks! We\'ll notify you when Sparcle launches.';
        formMessage.className = 'form-note success';
        emailInput.value = '';
        
        // Optional: Send to analytics or backend
        console.log('Waitlist signup:', email);
        
    } catch (error) {
        formMessage.textContent = 'Oops! Something went wrong. Please try again.';
        formMessage.className = 'form-note error';
    }
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
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
