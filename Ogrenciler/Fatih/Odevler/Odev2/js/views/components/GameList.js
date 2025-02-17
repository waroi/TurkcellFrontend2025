import GameCard from "./GameCard.js";

class GameList {
  constructor(apiService, container, openEditModal) {
    this.apiService = apiService;
    this.container = container;
    this.openEditModal = openEditModal;
  }

  async renderGames(filters = {}) {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }

    let games = await this.apiService.getGames();

    if (!games || games.length === 0) {
      this.showEmptyState();
      return;
    }

    if (filters.category) {
      games = games.filter((game) => game.category === filters.category);
    }
    if (filters.releaseDate) {
      games = games.filter((game) => game.releaseDate === filters.releaseDate);
    }
    if (filters.searchQuery) {
      games = games.filter((game) =>
        game.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }
    if (filters.sortOption) {
      if (filters.sortOption === "name-asc") {
        games.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filters.sortOption === "name-desc") {
        games.sort((a, b) => b.name.localeCompare(a.name));
      } else if (filters.sortOption === "date-desc") {
        games.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      } else if (filters.sortOption === "date-asc") {
        games.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
      }
    }

    if (games.length === 0) {
      this.showEmptyState();
      return;
    }

    games.forEach((game) => {
      const gameCard = new GameCard(game, this.openEditModal, async (id) => {
        await this.apiService.deleteGame(id);
        this.renderGames(filters);
      });
      this.container.appendChild(gameCard.createElement());
    });
  }

  showEmptyState() {
    const emptyState = document.createElement("div");
    emptyState.classList.add("text-center", "mt-5");

    const message = document.createElement("p");
    message.textContent = "Henüz oyun eklenmedi veya sonuç bulunamadı.";
    message.classList.add("text-muted", "fs-5");

    emptyState.appendChild(message);
    this.container.appendChild(emptyState);
  }
}

export default GameList;
