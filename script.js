document.body.classList.add('loading');

const loader = document.getElementById('loader');
const header = document.getElementById('siteHeader');
const cursorGlow = document.getElementById('cursorGlow');

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('done');
    header.classList.add('visible');
    document.body.classList.remove('loading');
  }, 1500);
});

window.addEventListener('mousemove', (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 0.04, 0.18)}s`;
  revealObserver.observe(element);
});

document.getElementById('year').textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);

      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        window.location.href = "thank-you.html";
      } else {
        alert("Something went wrong. Please try again.");
      }
    });
  }
});