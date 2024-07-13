document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Smooth scrolling for the "Download CV" button
    const downloadCvBtn = document.querySelector('.btn[href="#"]');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Download CV button clicked!');
            // Add functionality to handle the CV download
        });
    }

    // Contact form submission
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Contact form submitted!');
            // Add functionality to handle form submission
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        const subscribeForm = document.getElementById('subscribeForm');
    
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateContactForm()) {
                alert('Contact form submitted successfully!');
                contactForm.reset();
            }
        });
    
        subscribeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateSubscribeForm()) {
                alert('Subscribe form submitted successfully!');
                subscribeForm.reset();
            }
        });
    
        function validateContactForm() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const telphone = document.getElementById('telphone').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
    
            if (name === '') {
                alert('Please enter your name.');
                return false;
            }
            if (email === '') {
                alert('Please enter your email.');
                return false;
            }
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return false;
            }
            if (telphone === '') {
                alert('Please enter your no telphone.');
                return false;
            }
            if (subject === '') {
                alert('Please enter a subject.');
                return false;
            }
            if (message === '') {
                alert('Please enter your message.');
                return false;
            }
    
            return true;
        }
    
        function validateSubscribeForm() {
            const emailSubscribe = document.getElementById('emailSubscribe').value.trim();
    
            if (emailSubscribe === '') {
                alert('Please enter your email.');
                return false;
            }
            if (!isValidEmail(emailSubscribe)) {
                alert('Please enter a valid email address.');
                return false;
            }
    
            return true;
        }
    
        function isValidEmail(email) {
            // Basic email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });
    
});
