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