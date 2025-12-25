document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function scrollToSection(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
}
