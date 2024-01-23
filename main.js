// Функция для добавления анимации
function addAnimation(el, animationName) {
  el.style.animation = `${animationName} 3s forwards`;
}

// Создаем экземпляр IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Определяем, какую анимацию нужно применить
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

      // Добавляем анимацию
      addAnimation(entry.target, animationName);
    }
  });
}, { threshold: 0.2 }); // Запускаем анимацию, когда 10% элемента видны во вьюпорте

// Наблюдаем за каждым элементом
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
