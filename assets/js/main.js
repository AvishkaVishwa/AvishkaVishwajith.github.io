document.documentElement.classList.add("js");

// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// Scroll reveal animations
const scrollSections = document.querySelectorAll(".section-scroll-animate");
if (scrollSections.length) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    scrollSections.forEach(section => observer.observe(section));
  } else {
    scrollSections.forEach(section => section.classList.add("in-view"));
  }
}

// Project cards
const projectGrids = document.querySelectorAll("[data-projects]");
if (projectGrids.length && Array.isArray(window.PROJECTS)) {
  const projects = window.PROJECTS.filter(project => project && project.title && project.image);
  projectGrids.forEach(grid => {
    const limitAttr = grid.getAttribute("data-projects-limit");
    const limit = limitAttr ? Number.parseInt(limitAttr, 10) : projects.length;
    const visibleProjects = Number.isFinite(limit) ? projects.slice(0, limit) : projects;
    grid.innerHTML = visibleProjects.map((project, index) => {
      const delay = 3 + (index % 7);
      const title = project.title || "Project";
      const description = project.description || "";
      const tech = project.tech || "";
      const image = project.image || "";
      const alt = project.alt || title;
      const link = project.link
        ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">Repo <i class="fas fa-external-link-alt"></i></a>`
        : "";
      const stack = tech ? `<p class="project-stack">Tech: ${tech}</p>` : "";
      return `
        <article class="project-card animate-fade-in-up delay-${delay}">
          <div class="project-media">
            <img src="${image}" alt="${alt}" />
          </div>
          <div class="project-content">
            <h3>${title}</h3>
            <p>${description}</p>
            ${stack}
            ${link}
          </div>
        </article>
      `;
    }).join("");
  });
}

// Active link highlight
const normalizePath = path => path.replace(/\/+$/, "");
const isIndexPath = path =>
  path === "" || path === "/" || path.endsWith("/index.html");
const currentPath = normalizePath(window.location.pathname);
const isBlogPath = currentPath.includes("/blogs/");

document.querySelectorAll(".menu a, .mobile-menu a").forEach(a => {
  const href = a.getAttribute("href");
  if (!href) return;
  let resolvedPath;
  try {
    resolvedPath = normalizePath(new URL(href, window.location.href).pathname);
  } catch {
    return;
  }
  if (
    resolvedPath === currentPath ||
    (isIndexPath(resolvedPath) && isIndexPath(currentPath)) ||
    (isBlogPath && resolvedPath.endsWith("/blogs/index.html"))
  ) {
    a.classList.add("active");
  }
});
