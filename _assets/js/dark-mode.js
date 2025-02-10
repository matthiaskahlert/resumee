document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    updateToggleIcon(currentTheme);
  }

  toggleButton.addEventListener("click", function() {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      updateToggleIcon("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      updateToggleIcon("dark");
    }
  });

  function updateToggleIcon(theme) {
    const icon = toggleButton.querySelector("img");
    if (theme === "dark") {
      icon.src = "{{ '/assets/icons/sun.svg' | relative_url }}";
    } else {
      icon.src = "{{ '/assets/icons/moon.svg' | relative_url }}";
    }
  }
});