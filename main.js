// Function to add Animation
function addAnimation(el, animationName) {
  // eslint-disable-next-line no-param-reassign
  el.style.animation = `${animationName} 3s forwards`;
}

// Create object IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Determining what animation to apply
      let animationName;
      if (entry.target.classList.contains('damper__about')
          || entry.target.classList.contains('damper__service')
          || entry.target.classList.contains('damper__contact')) {
        animationName = 'spreading-apart';
      } else if (entry.target.classList.contains('about__btn')
                 || entry.target.classList.contains('review__card')) {
        animationName = 'fade-in';
      } else if (entry.target.classList.contains('service__title-sml')
                 || entry.target.classList.contains('contact__title-sml')) {
        animationName = 'scrolling-left';
      } else if (entry.target.classList.contains('contact__title')
                 || entry.target.classList.contains('review__title')
                 || entry.target.classList.contains('about__title')) {
        animationName = 'scrolling-right';
      }

      // Adding Animation
      addAnimation(entry.target, animationName);
    }
  });
}, { threshold: 0.2 }); // Animation start, when 20% of element visible in viewport

// Watchimg for every element
const objectList = [
  '.damper__about',
  '.damper__service',
  '.damper__contact',
  '.about__btn',
  '.review__card',
  '.service__title-sml',
  '.contact__title-sml',
  '.contact__title',
  '.review__title',
  '.about__title',
];
const elements = document.querySelectorAll(objectList);
elements.forEach((el) => observer.observe(el));
