  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.close-menu');

  hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
  });

  // Testimonial Carousel
  $('.testimonial-slider').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 1,
adaptiveHeight: false, // Change this to false
autoplay: true,
autoplaySpeed: 5000
});

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
      const nav = document.querySelector('.nav-container');
      if (window.scrollY > 50) {
          nav.style.background = 'rgba(255, 255, 255, 0.95)';
          nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
          nav.style.background = 'transparent';
          nav.style.boxShadow = 'none';
      }
  });


  // Add this to your JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all deal timers
    const dealCards = document.querySelectorAll('.deal-card');
    
    dealCards.forEach(card => {
        const expiryDate = new Date(card.dataset.expires);
        updateTimer(card, expiryDate);
        
        // Update timer every second
        setInterval(() => {
            updateTimer(card, expiryDate);
        }, 1000);
    });
    
    function updateTimer(card, expiryDate) {
        const now = new Date();
        const timeLeft = expiryDate - now;
        
        if (timeLeft <= 0) {
            // Deal has expired
            card.classList.add('expired');
            card.querySelector('.deal-timer').innerHTML = '<div class="expired-message">Deal Expired</div>';
            return;
        }
        
        // Calculate time units
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Update timer display
        card.querySelector('.days').textContent = padNumber(days);
        card.querySelector('.hours').textContent = padNumber(hours);
        card.querySelector('.minutes').textContent = padNumber(minutes);
        card.querySelector('.seconds').textContent = padNumber(seconds);
        
        // Add urgency class if less than 24 hours remaining
        if (timeLeft < (24 * 60 * 60 * 1000)) {
            card.querySelector('.deal-timer').classList.add('urgent');
        }
    }
    
    function padNumber(number) {
        return number.toString().padStart(2, '0');
    }
    
    // Optional: Add booking functionality
    const bookButtons = document.querySelectorAll('.btn-book');
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const card = e.target.closest('.deal-card');
            const dealTitle = card.querySelector('h3').textContent;
            const price = card.querySelector('.discounted').textContent;
            
            // Add your booking logic here
            alert(`Booking ${dealTitle} for ${price}`);
        });
    });
});