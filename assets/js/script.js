// Mobile menu
const menuBtn = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".nav-mobile");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  // Close menu when clicking a link
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileNav.classList.remove("open"));
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll animation observer
const sections = document.querySelectorAll(".section-scroll-animate");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("in-view");
  });
}, { threshold: 0.12 });

sections.forEach(sec => observer.observe(sec));
