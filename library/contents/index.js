if (window.location.hash === "#SEARCH") {
  document.querySelector(".searchDialog").showModal();
} else {
  document.querySelector(".searchDialog").close();
}

onhashchange = (_) => {
  if (window.location.hash === "#SEARCH") {
    document.querySelector(".searchDialog").showModal();
  } else {
    document.querySelector(".searchDialog").close();
  }
};

document.querySelector(".searchDialog").addEventListener("close", () => {
  if (window.location.hash === "#SEARCH") {
    history.replaceState(
      null,
      null,
      window.location.pathname + window.location.search,
    );
  }
});

document.querySelector('a[href="#SEARCH"]').style.display = "inline";

window.addEventListener("DOMContentLoaded", (_) => {
  new PagefindUI({
    element: ".search",
    showSubResults: true,
    showImages: false,
    autofocus: true,
  });
});
