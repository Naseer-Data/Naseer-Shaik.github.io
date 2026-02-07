// Fade-in animation on scroll
const fadeElements = document.querySelectorAll(".fade-in");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  fadeElements.forEach((el, index) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, index * 120); // smooth stagger effect
    }
  });
}

// Run on load and scroll
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
