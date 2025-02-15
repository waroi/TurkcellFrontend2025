import Game from './models/Game.js';
import GameService from './services/GameService.js';

class App {
  constructor() {
    this.addGameBtn = document.getElementById('addGameBtn');
    this.gameModal = document.getElementById('gameModal');
    this.gameForm = document.getElementById('gameForm');
    this.saveGameBtn = document.getElementById('saveGame');
    this.gameList = document.getElementById('gameList');

    this.categoryFilter = document.getElementById('categoryFilter');
    this.sortSelect = document.getElementById('sortSelect');
    this.searchInput = document.getElementById('searchInput');
    this.resetFiltersBtn = document.getElementById('resetFiltersBtn');

    this.modal = new bootstrap.Modal(this.gameModal);

    this.games = [];
    this.gameService = new GameService();

    this.editingGame = null;

    this.openModal();
    this.loadGames();
    this.configureFilters();
  }

  openModal() {
    this.addGameBtn.addEventListener('click', () => {
      this.saveGameBtn.textContent = 'Save';
      document.getElementById('modalTitle').textContent = 'Add New Game';
      this.gameForm.reset();
      this.modal.show();
    });

    this.saveGameBtn.addEventListener('click', () => this.handleSaveGame());
  }

  configureFilters() {
    this.categoryFilter.addEventListener('change', () => this.applyFilters());
    this.sortSelect.addEventListener('change', () => this.applyFilters());
    this.searchInput.addEventListener(
      'input',
      this.debounce(() => this.applyFilters(), 600)
    );
    this.resetFiltersBtn.addEventListener('click', () => {
      this.resetFilters();
    });
  }

  debounce(cb, wait) {
    let timeout;
    return (...args) => {
      const later = () => {
        clearTimeout(timeout);
        cb(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  applyFilters() {
    let filteredGames = [...this.games];

    const selectedCategory = this.categoryFilter.value;
    if (selectedCategory) {
      filteredGames = filteredGames.filter(
        (game) => game.category === selectedCategory
      );
    }

    const searchTerm = this.searchInput.value.toLowerCase();
    if (searchTerm) {
      filteredGames = filteredGames.filter(
        (game) =>
          game.name.toLowerCase().includes(searchTerm) ||
          game.category.toLowerCase().includes(searchTerm) ||
          game.developer.toLowerCase().includes(searchTerm)
      );
    }

    const sortType = this.sortSelect.value;
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
      const alertContainer = document.createElement('div');
      alertContainer.classList.add('col-12', 'text-center');

      const alert = document.createElement('div');
      alert.classList.add('alert', 'alert-danger');
      alert.textContent = 'No games found matching your search.';

      alertContainer.append(alert);
      this.gameList.replaceChildren();
      this.gameList.append(alertContainer);
    } else {
      this.renderGames(filteredGames);
    }
  }

  resetFilters() {
    this.categoryFilter.value = '';
    this.sortSelect.value = 'nameAsc';
    this.searchInput.value = '';

    this.renderGames(this.games);
  }

  async loadGames() {
    try {
      const games = await this.gameService.getGames();
      this.games = games;
      this.renderGames(games);
    } catch (error) {
      this.gameList.replaceChildren();
      const alertContainer = document.createElement('div');
      alertContainer.classList.add('col-12', 'text-center');

      const alert = document.createElement('div');
      alert.classList.add('alert', 'alert-danger');
      alert.textContent =
        'An error occurred while loading games. Please try again later.';

      alertContainer.append(alert);
      this.gameList.append(alertContainer);
    }
  }

  renderGames(games) {
    const fragment = document.createDocumentFragment();

    games.forEach((game) => {
      const gameCard = this.createGameCard(game);
      fragment.appendChild(gameCard);
    });

    this.gameList.replaceChildren();
    this.gameList.appendChild(fragment);
  }

  createGameCard(game) {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container col-md-4 mb-4';

    const card = document.createElement('div');
    card.classList.add('card', 'game-card');
    card.setAttribute('id', game.id);

    const img = document.createElement('img');
    img.classList.add('card-img-top', 'game-image');
    img.src = game.image;
    img.alt = game.name;
    img.onerror = () =>
      (img.src =
        'https://e1.pxfuel.com/desktop-wallpaper/869/163/desktop-wallpaper-1440x900-gaming-controller-minimal-dark-1440x900-resolution-backgrounds-and.jpg');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = game.name;

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = game.description;

    const badgeContainer = document.createElement('div');
    badgeContainer.classList.add('mt-2', 'd-flex', 'justify-content-between');

    const categoryBadge = document.createElement('span');
    categoryBadge.classList.add('badge', 'bg-primary');
    categoryBadge.textContent = game.category;

    const releaseDateBadge = document.createElement('span');
    releaseDateBadge.classList.add('badge', 'bg-secondary');
    releaseDateBadge.textContent = game.releaseDate;

    const developerInfo = document.createElement('div');
    developerInfo.classList.add('mt-3');

    const developerText = document.createElement('small');
    developerText.classList.add('text-muted');
    developerText.textContent = `Developer: ${game.developer}`;

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group', 'mt-3');

    const editBtn = document.createElement('button');
    editBtn.classList.add('btn', 'btn-outline-primary');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => this.handleEditGame(game));

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-outline-danger');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => this.handleDeleteGame(game.id));

    const steamLink = document.createElement('a');
    steamLink.classList.add('btn', 'btn-outline-success');
    steamLink.href = game.steamUrl;
    steamLink.target = '_blank';
    steamLink.textContent = 'Steam';

    badgeContainer.append(categoryBadge, releaseDateBadge);
    developerInfo.appendChild(developerText);
    btnGroup.append(editBtn, deleteBtn, steamLink);

    cardBody.append(
      title,
      description,
      badgeContainer,
      developerInfo,
      btnGroup
    );
    card.append(img, cardBody);
    cardContainer.appendChild(card);

    return cardContainer;
  }

  getNextId(games) {
    const ids = games.map((game) => game.id);
    console.log(ids);
    console.log(Math.max(...ids) + 1);
    return (Math.max(...ids) + 1).toString();
  }

  async handleSaveGame() {
    const name = document.getElementById('gameName').value;
    const description = document.getElementById('gameDescription').value;
    const category = document.getElementById('gameCategory').value;
    const releaseDate = document.getElementById('gameReleaseDate').value;
    const image = document.getElementById('gameImage').value;
    const developer = document.getElementById('gameDeveloper').value;
    const steamUrl = document.getElementById('gameSteamUrl').value;

    try {
      if (this.editingGame) {
        await this.gameService.updateGame(
          new Game(
            this.editingGame.id,
            name,
            description,
            category,
            releaseDate,
            image,
            developer,
            steamUrl
          )
        );
        this.editingGame = null;
      } else {
        const games = await this.gameService.getGames();
        const nextId = this.getNextId(games);

        await this.gameService.addGame(
          new Game(
            nextId,
            name,
            description,
            category,
            releaseDate,
            image,
            developer,
            steamUrl
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
    document.getElementById('gameName').value = game.name;
    document.getElementById('gameDescription').value = game.description;
    document.getElementById('gameCategory').value = game.category;
    document.getElementById('gameReleaseDate').value = game.releaseDate;
    document.getElementById('gameImage').value = game.image;
    document.getElementById('gameDeveloper').value = game.developer;
    document.getElementById('gameSteamUrl').value = game.steamUrl;

    this.saveGameBtn.textContent = 'Edit';
    document.getElementById('modalTitle').textContent = 'Edit Game';

    this.modal.show();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
});
