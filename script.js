/* =========================
   SMOOTH SCROLL NAVIGATION
========================= */
document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* =========================
   ACTIVE NAVBAR ON SCROLL
========================= */
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* =========================
   SCROLL FADE-IN ANIMATION
========================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

/* =========================
   CONTACT FORM HANDLING
========================= */
function sendMessage(event) {
  event.preventDefault();

  const inputs = event.target.querySelectorAll("input, textarea");
  let valid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      valid = false;
    }
  });

  if (valid) {
    alert("✅ Message sent successfully!");
    event.target.reset();
  } else {
    alert("❌ Please fill all fields");
  }
}

/* =========================
   CONSOLE INFO
========================= */
console.log("🚀 Shaik Naseer Portfolio Loaded Successfully");
