// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Highlight section on scroll
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.3
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-section");
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Simple fade-in animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Console message (for recruiters/devs)
