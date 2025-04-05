document.addEventListener("DOMContentLoaded", () => {
  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("selectedTheme") || "light";
  setTheme(savedTheme);

  // Add click handlers to theme buttons
  document.querySelectorAll(".theme-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.dataset.theme;
      setTheme(theme);
      // Save theme preference
      localStorage.setItem("selectedTheme", theme);
      // Trigger animation
      animateThemeChange();
    });
  });
});

function setTheme(theme) {
  document.body.className = `${theme}-theme`;
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.style.backgroundColor =
      theme === btn.dataset.theme ? "#4CAF50" : "#ddd";
    btn.style.color = theme === btn.dataset.theme ? "white" : "black";
  });
}

function animateThemeChange() {
  const card = document.querySelector(".card");
  card.style.animation = "none";
  card.offsetHeight; // Trigger reflow
  card.style.animation = "slideIn 0.5s ease-out";
}
