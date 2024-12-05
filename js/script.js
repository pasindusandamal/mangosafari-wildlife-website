// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const nav = document.querySelector('.nav-container');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            nav.style.top = '-80px';
        } else {
            nav.style.top = '0';
        }

        if (scrollTop > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.background = 'transparent';
            nav.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // Initialize Testimonial Slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);

    // Form validation for contact form
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = document.querySelector('#name');
            const emailInput = document.querySelector('#email');
            const messageInput = document.querySelector('#message');

            if (nameInput.value.trim() === '') {
                isValid = false;
                nameInput.classList.add('error');
            } else {
                nameInput.classList.remove('error');
            }

            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                isValid = false;
                emailInput.classList.add('error');
            } else {
                emailInput.classList.remove('error');
            }

            if (messageInput.value.trim() === '') {
                isValid = false;
                messageInput.classList.add('error');
            } else {
                messageInput.classList.remove('error');
            }

            if (isValid) {
                // Here you would typically send the form data to a server
                alert('Form submitted successfully!');
                contactForm.reset();
            }
        });
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

});