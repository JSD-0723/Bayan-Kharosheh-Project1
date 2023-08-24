document.getElementById("favorites-btn").addEventListener("click", function () {
  var favoritesBar = document.getElementById("favorites-bar");
  if (
    favoritesBar.style.display === "none" ||
    favoritesBar.style.display === ""
  ) {
    favoritesBar.style.display = "block";
  } else {
    favoritesBar.style.display = "none";
  }
});


document.getElementById("dark-mode-btn").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  
    if (document.body.classList.contains("dark-mode")) {
      document.documentElement.style.setProperty("--brand-primary", "#0768AC");
      document.documentElement.style.setProperty("--brand-secondary", "#03C180");
      document.documentElement.style.setProperty("--bg_default", "#1A1A1A");
      document.documentElement.style.setProperty("--bg_body", "#282828");
      document.documentElement.style.setProperty("--lines-color", "#000000");
      document.documentElement.style.setProperty("--body-text", "#EDEDED");
      document.documentElement.style.setProperty("--heart-color", "#DC143C");
    } else {
      document.documentElement.style.setProperty("--brand-primary", "#0768ac");
      document.documentElement.style.setProperty("--brand-secondary", "#03c180");
      document.documentElement.style.setProperty("--bg_default", "#ffffff");
      document.documentElement.style.setProperty("--bg_body", "#f0f9ff");
      document.documentElement.style.setProperty("--lines-color", "#dddddd");
      document.documentElement.style.setProperty("--body-text", "#333333");
      document.documentElement.style.setProperty("--heart-color", "#dc143c");
    }
  });
  