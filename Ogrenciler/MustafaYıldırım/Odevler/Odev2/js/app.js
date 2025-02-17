import {
  getGames,
  addGame,
  getCategories,
  deleteGame,
  toggleFavorite,
  updateGame,
} from "./api.js";
import { createGameCard } from "./ui.js";
import Game from "./game.js";

document.addEventListener("DOMContentLoaded", async () => {
  loadCategories();

  document
    .getElementById("searchInput")
    ?.addEventListener("input", (e) =>
      renderGames({ searchTerm: e.target.value })
    );

  document
    .getElementById("categoryFilter")
    ?.addEventListener("change", (e) =>
      renderGames({ category: e.target.value })
    );

  document
    .getElementById("sortSelect")
    ?.addEventListener("change", (e) =>
      renderGames({ sortBy: e.target.value })
    );

  renderGames();

  typeEffect();
});

//search buton animasyon
const searchInput = document.getElementById("searchInput");
const words = ["Minecraft", "Action", "Ubisoft"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
function typeEffect() {
  let currentWord = words[wordIndex];
  let displayedText = currentWord.substring(0, charIndex);

  searchInput.setAttribute("placeholder", displayedText);

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

// Kategorileri yükleme fonksiyonu
export async function loadCategories() {
  try {
    const categories = await getCategories();

    const categoryFilter = document.getElementById("categoryFilter");
    const categorySelect = document.getElementById("categorySelect");
    const categorySelectEdit = document.getElementById("editGameCategory");

    if (!categorySelect || !categoryFilter || !categorySelectEdit) {
      console.error("Category select or filter elements are missing.");
      return;
    }

    if (!categories || categories.length === 0) {
      console.error("No categories found.");
      return;
    }

    categories.forEach((category) => {
      const option = new Option(category, category);
      categorySelect.appendChild(option);
      categorySelectEdit.appendChild(option.cloneNode(true));
      categoryFilter.appendChild(option.cloneNode(true));
    });
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

//Filtreleme, Sıralama, Favoriler kısmı
async function renderGames(filters = {}) {
  let games = await getGames();

  if (filters.isFavorite !== undefined) {
    games = games.filter((game) => game.isFavorite === true);
  }

  if (filters.searchTerm) {
    const term = filters.searchTerm.toLowerCase();
    games = games.filter((game) =>
      [game.name, game.category, game.developer].some(
        (arama) => arama && arama.toLowerCase().includes(term)
      )
    );
  }

  if (filters.category) {
    games = games.filter((game) => game.category === filters.category);
  }

  if (filters.sortBy) {
    const sorters = {
      "name-asc": (a, b) => a.name.localeCompare(b.name),
      "name-desc": (a, b) => b.name.localeCompare(a.name),
      "date-asc": (a, b) => new Date(a.date) - new Date(b.date),
      "date-desc": (a, b) => new Date(b.date) - new Date(a.date),
    };
    games.sort(sorters[filters.sortBy]);
  }

  const gameContainer = document.getElementById("game-cards");
  while (gameContainer.firstChild) {
    gameContainer.removeChild(gameContainer.firstChild);
  }
  games.forEach((game) => gameContainer.appendChild(createGameCard(game)));
}
//Favori ikon ayarlama
document.getElementById("fav").addEventListener("click", () => {
  const favButton = document.getElementById("fav");
  const heartIcon = favButton.querySelector("i");

  if (favButton.classList.contains("active")) {
    renderGames();
    favButton.classList.remove("active");
    heartIcon.classList.remove("fa-solid");
    heartIcon.classList.add("fa-regular");
  } else {
    renderGames({ isFavorite: true });
    favButton.classList.add("active");
    heartIcon.classList.remove("fa-regular");
    heartIcon.classList.add("fa-solid");
  }
});

//Oyun Alma
document.getElementById("gameForm").addEventListener("submit", async (game) => {
  game.preventDefault();

  const newGame = new Game(
    document.getElementById("gameName").value,
    document.getElementById("gameContent").value,
    document.getElementById("categorySelect").value,
    document.getElementById("gameDate").value,
    document.getElementById("gamePhoto").value,
    document.getElementById("gameDeveloper").value,
    document.getElementById("gameSteam").value
  );

  await addGame(newGame);
  renderGames();
});

//silme
export async function DeleteGame(id) {
  try {
    await deleteGame(id);
    renderGames();
  } catch (error) {
    console.error("Error while deleting game:", error);
  }
}

//favorilere ekleme çıkarma
export async function ToggleFavorite(id, isFavorite) {
  try {
    await toggleFavorite(id, isFavorite);
    renderGames();
  } catch (error) {
    console.error("Error while toggling favorite:", error);
  }
}

export async function openEditGameModal(gameId) {
  try {
    const game = (await getGames()).find((gameEdit) => gameEdit.id === gameId);
    if (!game) {
      console.error("Game not found");
      return;
    }

    const gameDetailModal = bootstrap.Modal.getInstance(
      document.getElementById("gameDetailModal")
    );
    if (gameDetailModal) {
      gameDetailModal.hide();
    }
    await loadCategories();

    updateEditGameForm(game);

    const editGameModal = new bootstrap.Modal(
      document.getElementById("editGameModal")
    );
    editGameModal.show();

    document.getElementById("editGameForm").onsubmit = async (event) => {
      event.preventDefault();
      const updatedGame = getUpdatedGameData(game);
      await updateGame(gameId, updatedGame);
      renderGames();
      editGameModal.hide();
    };
  } catch (error) {
    console.error("Error while editing game:", error);
  }
}

function updateEditGameForm(game) {
  document.getElementById("editGameName").value = game.name;
  document.getElementById("editGameContent").value = game.content;
  document.getElementById("editGameCategory").value = game.category;
  document.getElementById("editGameDate").value = game.date;
  document.getElementById("editGamePhoto").value = game.photo;
  document.getElementById("editGameDeveloper").value = game.developer;
  document.getElementById("editGameSteam").value = game.steam;
}

function getUpdatedGameData(game) {
  return {
    name: document.getElementById("editGameName").value,
    content: document.getElementById("editGameContent").value,
    category: document.getElementById("editGameCategory").value,
    date: document.getElementById("editGameDate").value,
    photo: document.getElementById("editGamePhoto").value,
    developer: document.getElementById("editGameDeveloper").value,
    steam: document.getElementById("editGameSteam").value,
    isFavorite: game.isFavorite,
  };
}
