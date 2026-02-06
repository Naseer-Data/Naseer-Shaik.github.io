/* -------- Smooth Scroll -------- */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* -------- Project Scroll Animation -------- */
const projectCards = document.querySelectorAll(".card");

const revealProjects = () => {
  const triggerPoint = window.innerHeight * 0.85;

  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerPoint) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealProjects);
window.addEventListener("load", revealProjects);

/* -------- Contact Form (Demo) -------- */
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you Shaik Naseer! Your message has been sent.");
    form.reset();
  });
}

