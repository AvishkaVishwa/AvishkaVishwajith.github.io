// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileMenu.classList.remove("open"));
  });
}

// Active link highlight
const normalizePath = path => path.replace(/\/+$/, "");
const isIndexPath = path =>
  path === "" || path === "/" || path.endsWith("/index.html");
const currentPath = normalizePath(window.location.pathname);

document.querySelectorAll(".menu a, .mobile-menu a").forEach(a => {
  const href = a.getAttribute("href");
  if (!href) return;
  let resolvedPath;
  try {
    resolvedPath = normalizePath(new URL(href, window.location.href).pathname);
  } catch {
    return;
  }
  if (resolvedPath === currentPath || (isIndexPath(resolvedPath) && isIndexPath(currentPath))) {
    a.classList.add("active");
  }
});
