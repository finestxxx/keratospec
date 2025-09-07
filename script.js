// Grab elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar on click
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Fade-in effect for About Us section
document.addEventListener("scroll", () => {
  const aboutSection = document.getElementById("about");
  const sectionPos = aboutSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    aboutSection.classList.add("visible");
  }
});

// Observe elements with animation classes
const animatedElements = document.querySelectorAll(
  ".animate-slide-down, .fade-in"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active"); // trigger animation
      } else {
        entry.target.classList.remove("active"); // reset when out of view
      }
    });
  },
  { threshold: 0.3 } // % of element visible before triggering
);


// Attach observer to each animated element
animatedElements.forEach(el => observer.observe(el));
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  testimonials.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // replay on scroll up
        }
      });
    },
    { threshold: 0.2 } // 20% visible to trigger
  );

  testimonials.forEach((card) => observer.observe(card));
});
