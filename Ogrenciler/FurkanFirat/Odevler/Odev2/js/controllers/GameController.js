import Game from '../models/Game.js';
import GameService from '../services/GameService.js';
import GameCard from '../UI/GameCard.js';
import DOMElements from '../utils/DOMElements.js';
import { debounce, getNextId } from '../utils/helpers.js';

export default class GameController {
  constructor() {
    this.elements = DOMElements.getElements();
    this.formElements = DOMElements.getFormElements();
    this.modal = new bootstrap.Modal(this.elements.gameModal);
    this.gameService = new GameService();
    this.games = [];
    this.editingGame = null;

    this.startEventListeners();
    this.loadGames();
  }

  startEventListeners() {
    this.elements.addGameBtn.addEventListener('click', () =>
      this.openFormModal()
    );
    this.elements.saveGameBtn.addEventListener('click', () =>
      this.handleSaveGame()
    );
    this.elements.categoryFilter.addEventListener('change', () =>
      this.applyFilters()
    );
    this.elements.sortSelect.addEventListener('change', () =>
      this.applyFilters()
    );
    this.elements.searchInput.addEventListener(
      'input',
      debounce(() => this.applyFilters(), 600)
    );
    this.elements.resetFiltersBtn.addEventListener('click', () =>
      this.resetFilters()
    );
  }

  openFormModal() {
    this.elements.saveGameBtn.textContent = 'Save';
    this.elements.modalTitle.textContent = 'Add New Game';
    this.elements.gameForm.reset();
    this.editingGame = null;
    this.modal.show();
  }

  async loadGames() {
    try {
      this.games = await this.gameService.getGames();
      this.renderGames(this.games);
    } catch (error) {
      this.elements.gameList.replaceChildren();
      const alertContainer = document.createElement('div');
      alertContainer.classList.add('col-12', 'text-center');

      const alert = document.createElement('div');
      alert.classList.add('alert', 'alert-danger');
      alert.textContent =
        'An error occurred while loading games. Please try again later.';

      alertContainer.append(alert);
      this.elements.gameList.append(alertContainer);
    }
  }

  renderGames(games) {
    const fragment = document.createDocumentFragment();

    games.forEach((game) => {
      const gameCard = GameCard.createGameCard(
        game,
        (game) => this.handleEditGame(game),
        (id) => this.handleDeleteGame(id)
      );
      fragment.appendChild(gameCard);
    });

    this.elements.gameList.replaceChildren();
    this.elements.gameList.appendChild(fragment);
  }

  applyFilters() {
    let filteredGames = [...this.games];

    const selectedCategory = this.elements.categoryFilter.value;
    if (selectedCategory) {
      filteredGames = filteredGames.filter(
        (game) => game.category === selectedCategory
      );
    }

    // Search filter
    const searchTerm = this.elements.searchInput.value.toLowerCase();
    if (searchTerm) {
      filteredGames = filteredGames.filter((game) =>
        game.name.toLowerCase().includes(searchTerm)
      );
    }

    // Sort
    const sortType = this.elements.sortSelect.value;
    filteredGames.sort((a, b) => {
      switch (sortType) {
        case 'nameAsc':
          return a.name.localeCompare(b.name);
        case 'nameDesc':
          return b.name.localeCompare(a.name);
        case 'dateDesc':
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        case 'dateAsc':
          return new Date(a.releaseDate) - new Date(b.releaseDate);
        default:
          return 0;
      }
    });
    if (filteredGames.length === 0) {
      this.elements.gameList.replaceChildren();
      const alertContainer = document.createElement('div');
      alertContainer.classList.add('col-12', 'text-center');

      const alert = document.createElement('div');
      alert.classList.add('alert', 'alert-danger');
      alert.textContent = 'No games found.';

      alertContainer.append(alert);
      this.elements.gameList.append(alertContainer);
    } else {
      this.renderGames(filteredGames);
    }
  }

  resetFilters() {
    this.elements.categoryFilter.value = '';
    this.elements.sortSelect.value = 'nameAsc';
    this.elements.searchInput.value = '';
    this.renderGames(this.games);
  }

  async handleSaveGame() {
    console.log(this.editingGame);
    try {
      if (this.editingGame) {
        await this.gameService.updateGame(
          new Game(
            this.editingGame.id,
            this.formElements.name.value,
            this.formElements.description.value,
            this.formElements.category.value,
            this.formElements.releaseDate.value,
            this.formElements.image.value,
            this.formElements.developer.value,
            this.formElements.steamUrl.value
          )
        );
        this.editingGame = null;
      } else {
        const games = await this.gameService.getGames();
        const nextId = getNextId(games);

        await this.gameService.addGame(
          new Game(
            nextId,
            this.formElements.name.value,
            this.formElements.description.value,
            this.formElements.category.value,
            this.formElements.releaseDate.value,
            this.formElements.image.value,
            this.formElements.developer.value,
            this.formElements.steamUrl.value
          )
        );
        this.loadGames();
        this.modal.hide();
      }
    } catch (error) {
      console.error('Oyun kaydedilirken hata:', error);
    }
  }
  async handleDeleteGame(id) {
    if (confirm('Bu oyunu silmek istediğinizden emin misiniz?')) {
      try {
        console.log(id);
        await this.gameService.deleteGame(id);
        this.loadGames();
      } catch (error) {
        console.error('Oyun silinirken hata:', error);
      }
    }
  }
  handleEditGame(game) {
    this.editingGame = game;
    this.formElements.name.value = game.name;
    this.formElements.description.value = game.description;
    this.formElements.category.value = game.category;
    this.formElements.releaseDate.value = game.releaseDate;
    this.formElements.image.value = game.image;
    this.formElements.developer.value = game.developer;
    this.formElements.steamUrl.value = game.steamUrl;

    this.elements.saveGameBtn.textContent = 'Edit';
    this.elements.modalTitle.textContent = 'Edit Game';

    this.modal.show();
  }
}
