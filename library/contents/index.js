const searchButton = document.getElementById("searchButton");
const searchDialog = document.getElementById("searchDialog");
const searchInput = document.getElementById("searchInput");

searchButton.style.display = "inline";

searchButton.onclick = () => {
  searchDialog.showModal();
};

window.addEventListener("DOMContentLoaded", (_) => {
  new PagefindUI({
    element: "#search",
    showSubResults: true,
    showImages: false,
    autofocus: true
  });
});

// searchDialog.showModal();
