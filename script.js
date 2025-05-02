window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.style.backgroundColor = window.scrollY > 50 ? '#006bb3' : 'rgba(0,123,255,0.8)';
});

// Animate section titles on scroll
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 1s forwards';
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
