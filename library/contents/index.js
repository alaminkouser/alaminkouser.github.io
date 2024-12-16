document.querySelector(".searchButton").style.display = "inline";

document.querySelector(".searchButton").onclick = () => {
  document.querySelector(".searchDialog").showModal();
};

window.addEventListener("DOMContentLoaded", (_) => {
  new PagefindUI({
    element: ".search",
    showSubResults: true,
    showImages: false,
    autofocus: true,
  });
});
