import { UI } from "./UI.js";
import GameManager from "./GameManager.js";

const gameManager = new GameManager("http://localhost:3000/games");

document.addEventListener("DOMContentLoaded", async () => {
  const games = await gameManager.fetchGames();
  UI.displayGames(games);
  UI.updateCategoryDropdown(games);

  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const sortBy = document.getElementById("sortBy");

  searchInput.addEventListener("input", filterGames);
  categoryFilter.addEventListener("change", filterGames);
  sortBy.addEventListener("change", sortGames);

  document.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("delete-game")) {
      const gameId = e.target.getAttribute("data-id");
      const confirmDelete = confirm(
        "Bu oyunu silmek istediğinizden emin misiniz?"
      );

      if (confirmDelete) {
        deleteGame(gameId);
      }
    }
    if (e.target && e.target.classList.contains("edit-game")) {
      const gameId = e.target.getAttribute("data-id");
      openEditModal(gameId);
    }
  });
});

function sortGames() {
  const selectedSort = document.getElementById("sortBy").value;

  gameManager.fetchGames().then((games) => {
    let sortedGames = [...games];

    if (selectedSort === "name_asc") {
      sortedGames.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "name_desc") {
      sortedGames.sort((a, b) => b.name.localeCompare(a.name));
    } else if (selectedSort === "release_date_asc") {
      sortedGames.sort(
        (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
      );
    } else if (selectedSort === "release_date_desc") {
      sortedGames.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
    }

    UI.displayGames(sortedGames);
  });
}

async function openEditModal(gameId) {
  const game = await gameManager.getGameById(gameId);

  document.getElementById("editGameId").value = game.id;
  document.getElementById("editGameName").value = game.name;
  document.getElementById("editGameDescription").value = game.description;
  document.getElementById("editGameCategory").value = game.category;
  document.getElementById("editGameReleaseDate").value = game.releaseDate;
  document.getElementById("editGameImage").value = game.image;
  document.getElementById("editGameDeveloper").value = game.developer;
  document.getElementById("editGameUrl").value = game.steamUrl;

  const modal = new bootstrap.Modal(document.getElementById("editGameModal"));
  modal.show();
}

async function deleteGame(id) {
  try {
    await gameManager.deleteGame(id);
    const games = await gameManager.fetchGames();
    UI.displayGames(games);
  } catch (error) {
    console.error("Silme işlemi başarısız oldu", error);
  }
}

document.getElementById("gameForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const newGame = {
    name: document.getElementById("gameName").value,
    description: document.getElementById("gameDescription").value,
    category: document.getElementById("gameCategory").value,
    releaseDate: document.getElementById("gameReleaseDate").value,
    image: document.getElementById("gameImage").value,
    developer: document.getElementById("gameDeveloper").value,
    steamUrl: document.getElementById("gameSteamUrl").value,
  };

  await gameManager.addGame(newGame);

  updateCategoryFilter(newGame.category);

  const games = await gameManager.fetchGames();
  UI.displayGames(games);
  UI.updateCategoryDropdown(games);

  document.getElementById("gameForm").reset();
  bootstrap.Modal.getInstance(document.getElementById("addGameModal")).hide();
});

document
  .getElementById("editGameForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = document.getElementById("editGameId").value;
    const updatedGame = {
      name: document.getElementById("editGameName").value,
      description: document.getElementById("editGameDescription").value,
      category: document.getElementById("editGameCategory").value,
      releaseDate: document.getElementById("editGameReleaseDate").value,
      image: document.getElementById("editGameImage").value,
      developer: document.getElementById("editGameDeveloper").value,
      steamUrl: document.getElementById("editGameUrl").value,
    };

    await gameManager.updateGame(id, updatedGame);
    const games = await gameManager.fetchGames();
    UI.displayGames(games);

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("editGameModal")
    );
    modal.hide();
  });

function filterGames() {
  const searchTerm = document
    .getElementById("search-input")
    .value.toLowerCase();
  const selectedCategory = document.getElementById("category-filter").value;

  gameManager.fetchGames().then((games) => {
    let filteredGames = games.filter((game) => {
      const searchInGame =
        game.name.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm) ||
        game.category.toLowerCase().includes(searchTerm) ||
        game.developer.toLowerCase().includes(searchTerm);

      return (
        searchInGame &&
        (selectedCategory === "all" || game.category === selectedCategory)
      );
    });

    UI.displayGames(filteredGames);
  });
}

function updateCategoryFilter(newCategory) {
  const categoryFilter = document.getElementById("category-filter");
  const allOption = categoryFilter.querySelector("option[value='all']");

  if (
    !Array.from(categoryFilter.options).some(
      (option) => option.value === newCategory
    )
  ) {
    const option = document.createElement("option");
    option.value = newCategory;
    option.textContent = newCategory;
    categoryFilter.appendChild(option);
  }
}
