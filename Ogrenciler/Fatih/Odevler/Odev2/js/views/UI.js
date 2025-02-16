import GameList from "./components/GameList.js";
import GameFilters from "./components/GameFilters.js";
import GameForm from "./components/GameForm.js";
import GameDetailModal from "./components/GameDetailModal.js";

class UI {
  constructor(apiService) {
    this.apiService = apiService;
    this.gameListContainer = document.getElementById("game-list");
    this.detailModal = new GameDetailModal();

    this.gameList = new GameList(
      this.apiService,
      this.gameListContainer,
      this.openEditModal.bind(this)
    );

    new GameFilters(
      document.getElementById("filter-category"),
      document.getElementById("filter-release-date"),
      document.getElementById("sort-games"),
      document.getElementById("search-input"),
      (filters) => this.gameList.renderGames(filters)
    );

    this.gameForm = new GameForm(
      document.getElementById("game-form"),
      (gameId, gameData) => {
        this.handleFormSubmit(gameId, gameData);
      }
    );
  }

  async handleFormSubmit(gameId, gameData) {
    if (gameId) {
      await this.apiService.updateGame(gameId, gameData);
    } else {
      await this.apiService.addGame(gameData);
    }
    this.gameList.renderGames();
    new bootstrap.Modal(document.getElementById("gameModal")).hide();
  }

  openEditModal(game) {
    document.getElementById("game-id").value = game.id;
    document.getElementById("game-name").value = game.name;
    document.getElementById("game-description").value = game.description;
    document.getElementById("game-category").value = game.category;
    document.getElementById("game-releaseDate").value = game.releaseDate;
    document.getElementById("game-image").value = game.image;
    document.getElementById("game-developer").value = game.developer;
    document.getElementById("game-steamUrl").value = game.steamUrl;

    new bootstrap.Modal(document.getElementById("gameModal")).show();
  }
}

export default UI;
