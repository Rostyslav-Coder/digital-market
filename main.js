const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation');
      entry.target.style.width = '0%';
    } else {
      entry.target.classList.remove('animation');
      entry.target.style.width = '100%';
    }
  });
});

const elements = document.querySelectorAll('.damper__about, .damper__service, .damper__contact');
elements.forEach((el) => observer.observe(el));
