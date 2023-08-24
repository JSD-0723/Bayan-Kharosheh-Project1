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
