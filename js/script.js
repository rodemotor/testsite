// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Type effect
const words = ["Mauro", "Developer", "Designer"];
let i = 0, j = 0, currentWord = '', isDeleting = false;
const typedText = document.querySelector('.typed-text');

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      currentWord = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentWord = words[i].substring(0, j--);
    }

    typedText.textContent = currentWord;

    if (!isDeleting && j === words[i].length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

// Scroll animations
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.8;
    if (top < trigger) el.classList.add('show');
  });
});
