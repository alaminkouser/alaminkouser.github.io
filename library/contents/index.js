import * as pagefind from "/pagefind/pagefind.js";

const searchInput = document.getElementById("search");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", async (event) => {
  const searchTerm = event.target.value;
  const results = await pagefind.search(searchTerm);

  console.log(results);
});
