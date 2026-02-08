// ================= FADE-IN SCROLL ANIMATION =================
const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// ================= SMOOTH SCROLL FOR NAV LINKS =================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ================= BUTTON CLICK EFFECT =================
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 200);
  });
});

// ================= CONTACT FORM MESSAGE =================
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent (Demo only).");
    form.reset();
  });
}

// ================= SKILL CARD HOVER ANIMATION =================
document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0 0 25px #e50914";
  });

  card.addEventListener("mouseout", () => {
    card.style.boxShadow = "none";
  });
});
