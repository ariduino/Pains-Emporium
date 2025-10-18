// Pain's Perfectly Painful non Preposterous Emporium
console.log("Welcome to Pain's Emporium! More chaos coming soon...");

// Highlight current page link in the nav bar
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // e.g. "index.html"
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
});
