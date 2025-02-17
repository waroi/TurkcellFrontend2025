window.addEventListener("load", () => {
  const filterSelect = document.getElementById("filterSelect");
  const sortSelect = document.getElementById("sortSelect");
  const searchBar = document.getElementById("search-bar");
  const gameCtn = document.querySelector("#game-ctn");
  let games = [];
  async function fetchGames() {
  try {
  games = await fetch("http://localhost:3000/games/").then((response) =>
  response.json()
  );
  console.log("Oyunlar yüklendi:", games);
  Operations.addCatToFilterButton(games);
  UI.getOnUI(games);
  } catch (error) {
  console.error("Hata oluştu:", error);
  }
  }
  fetchGames();
  class Operations {
  static addCatToFilterButton(games) {
  const existingCategories = Array.from(filterSelect.options).map(
  (option) => option.textContent
  );
  games.forEach((game) => {
  if (!existingCategories.includes(game.categories)) {
  const opt = document.createElement("option");
  opt.textContent = game.categories;
  opt.value = game.categories;
  filterSelect.appendChild(opt);
  }
  });
  }
  static filterAndSortGames() {
  const selectedCategory = filterSelect.value.toLowerCase().trim();
  let filteredGames = games;
  if (selectedCategory !== "filtrele") {
  filteredGames = games.filter(
  (game) => game.categories.toLowerCase().trim() === selectedCategory
  );
  }
  Operations.applySort(filteredGames);
  }
  static applySort(filteredGames) {
  const process = sortSelect.value;
  let sortedGames = [...filteredGames];
  switch (process) {
  case "asc":
  sortedGames.sort((a, b) => a.title.localeCompare(b.title));
  break;
  case "desc":
  sortedGames.sort((a, b) => b.title.localeCompare(a.title));
  break;
  case "datep":
  sortedGames.sort(
  (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
  );
  break;
  case "daten":
  sortedGames.sort(
  (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
  );
  break;
  }
  gameCtn.innerHTML = "";
  UI.getOnUI(sortedGames);
  }
  static searchGame() {
  const searchWord = searchBar.value.toLowerCase().trim();
  const allCards = document.querySelectorAll(".cardWrap");
  allCards.forEach((card) => {
  const cardTitle = card
  .querySelector(".card-title")
  .textContent.toLowerCase()
  .trim();
  const cardCat = card
  .querySelector(".badge")
  .textContent.toLowerCase()
  .trim();
  const cardPub = card
  .querySelector(".pub")
  .textContent.toLowerCase()
  .trim();
  cardTitle.includes(searchWord) ||
  cardCat.includes(searchWord) ||
  cardPub.includes(searchWord)
  ? (card.style.display = "block")
  : (card.style.display = "none");
  });
  }
  }
  filterSelect.addEventListener("change", Operations.filterAndSortGames);
  sortSelect.addEventListener("change", () =>
  Operations.applySort(games.filter((game) => game.categories.toLowerCase().trim() === filterSelect.value.toLowerCase().trim() || filterSelect.value === "filtrele"))
  );
  searchBar.addEventListener("input", Operations.searchGame);
  });