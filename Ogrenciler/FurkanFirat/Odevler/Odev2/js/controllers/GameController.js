import Game from '../models/Game.js';
import GameService from '../services/GameService.js';
import GameCard from '../UI/GameCard.js';
import DOMElements from '../utils/DOMElements.js';
import { debounce, getNextId } from '../utils/helpers.js';

export default class GameController {
  constructor() {
    this.elements = DOMElements.getElements();
    this.formElements = DOMElements.getFormElements();
    this.formModal = new bootstrap.Modal(this.elements.formModal);
    this.detailModal = new bootstrap.Modal(this.elements.gameDetailModal);
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
    // BOOTSTRAP FORM VALIDATION
    this.elements.gameForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!this.elements.gameForm.checkValidity()) {
        event.stopPropagation();
        this.elements.gameForm.classList.add('was-validated');
        return;
      }

      await this.handleSaveGame();
    });
  }

  openFormModal() {
    this.elements.gameForm.classList.remove('was-validated');
    this.elements.gameForm.reset();
    this.elements.saveGameBtn.textContent = 'Save';
    this.elements.formModalTitle.textContent = 'Add New Game';
    this.editingGame = null;
    this.formModal.show();
  }

  openDetailModal(game) {
    const carouselInner =
      this.elements.gameDetailModal.querySelector('.carousel-inner');
    carouselInner.replaceChildren();
    game.images.forEach((image, index) => {
      const carouselItem = document.createElement('div');
      carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;

      const img = document.createElement('img');
      img.src = image;
      img.className = 'd-block w-100';
      img.alt = `${game.name} image`;

      img.onerror = () => {
        img.src =
          'https://e1.pxfuel.com/desktop-wallpaper/869/163/desktop-wallpaper-1440x900-gaming-controller-minimal-dark-1440x900-resolution-backgrounds-and.jpg';
      };

      carouselItem.appendChild(img);
      carouselInner.appendChild(carouselItem);
    });

    const gameTitle = this.elements.gameDetailModal.querySelector('.gameTitle');
    gameTitle.textContent = game.name;
    gameTitle.style.wordBreak = 'break-all';

    const gameDescription =
      this.elements.gameDetailModal.querySelector('.gameDescription');
    gameDescription.textContent = game.description;
    gameDescription.style.wordBreak = 'break-all';

    this.detailModal.show();
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
        (id) => this.handleDeleteGame(id),
        (game) => this.openDetailModal(game)
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

    const searchTerm = this.elements.searchInput.value.toLowerCase();
    if (searchTerm) {
      filteredGames = filteredGames.filter((game) =>
        game.name.toLowerCase().includes(searchTerm)
      );
    }

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
    try {
      const images = [
        this.formElements.coverImage.value,
        this.formElements.image1.value,
        this.formElements.image2.value,
        this.formElements.image3.value,
        this.formElements.image4.value,
      ].filter((url) => url !== '');
      if (this.editingGame) {
        await this.gameService.updateGame(
          new Game(
            this.editingGame.id,
            this.formElements.name.value,
            this.formElements.description.value,
            this.formElements.category.value,
            this.formElements.releaseDate.value,
            images,
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
            images,
            this.formElements.developer.value,
            this.formElements.steamUrl.value
          )
        );
        this.elements.gameForm.classList.remove('was-validated');
        this.elements.gameForm.reset();
        this.loadGames();
        this.formModal.hide();
      }
    } catch (error) {
      console.error('handleSaveGame Error:', error);
    }
  }
  async handleDeleteGame(id) {
    if (confirm('Are you sure you want to delete this game?')) {
      try {
        await this.gameService.deleteGame(id);
        this.loadGames();
      } catch (error) {
        console.error('handleDeleteGame Error:', error);
      }
    }
  }
  handleEditGame(game) {
    this.editingGame = game;
    this.formElements.name.value = game.name;
    this.formElements.description.value = game.description;
    this.formElements.category.value = game.category;
    this.formElements.releaseDate.value = game.releaseDate;
    this.formElements.coverImage.value = game.images[0];
    this.formElements.image1.value = game.images[1] || '';
    this.formElements.image2.value = game.images[2] || '';
    this.formElements.image3.value = game.images[3] || '';
    this.formElements.image4.value = game.images[4] || '';
    this.formElements.developer.value = game.developer;
    this.formElements.steamUrl.value = game.steamUrl;

    this.elements.saveGameBtn.textContent = 'Edit';
    this.elements.formModalTitle.textContent = 'Edit Game';

    this.formModal.show();
  }
}
