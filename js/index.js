'use strict'

// --- Burguer Menu ---
// When i CLICK on .burger, to .header__links TOGGLE the class .active & to body TOGGLE the class .no-scrollbar
// When i CLICK on .header__a, to .header__links REMOVE the class .active

const burger = document.querySelector('.burger')
const headerLinks = document.querySelector('.header__links')
const headerA = document.querySelectorAll('.header__a')

burger.addEventListener('click', () => {
  headerLinks.classList.toggle('active')
  document.body.classList.toggle('no-scrollbar')
})

headerA.forEach(index => {
  index.addEventListener('click', () => {
    headerLinks.classListNaNpxove('active')
  })
})
// --- Burguer Menu ---

// --- Testimonials ---
document.addEventListener('DOMContentLoaded', () => {/* is an event listener that waits for the entire HTML document to be fully loaded and parsed before running the enclosed JavaScript code. */
  const testimonialsContainer = document.querySelector('.testimonials__container');
  const testimonialsCard = document.querySelectorAll('.testimonial__card');
  const testimonialsArrow = document.querySelectorAll('.testimonials__arrow');
  let currentIndex = 0;
  let autoSlideInterval;

  const slideTestimonials = (direction) => {
    if (direction === 'right') {
      currentIndex = (currentIndex + 1) % testimonialsCard.length; // Move to next testimonial or loop back
    } else {
      currentIndex = (currentIndex - 1 + testimonialsCard.length) % testimonialsCard.length; // Move to previous testimonial or loop to the end
    }
    const newTransformPosition = -(currentIndex * 100); // Move -100% per testimonial
    testimonialsContainer.style.transform = `translateX(${newTransformPosition}%)`;
  };

  testimonialsArrow.forEach(arrow => {
    arrow.addEventListener('click', function () {
      const direction = this.outerHTML.includes('M10 12.796V3.204L4.519 8') ? 'left' : 'right';
      slideTestimonials(direction);
      resetAutoSlideTimer();
    });
  });

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
      slideTestimonials('right');
    }, 12000); // 12000 milliseconds = 12 seconds
  };

  const resetAutoSlideTimer = () => {
    clearInterval(autoSlideInterval); // Stop the current interval
    startAutoSlide(); // Start a new interval
  };

  startAutoSlide(); // Initialize auto-slide on load
});
// --- Testimonials ---

