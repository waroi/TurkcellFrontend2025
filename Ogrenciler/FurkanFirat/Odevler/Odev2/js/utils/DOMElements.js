export default class DOMElements {
  static getElements() {
    return {
      addGameBtn: document.getElementById('addGameBtn'),
      gameModal: document.getElementById('gameModal'),
      gameForm: document.getElementById('gameForm'),
      saveGameBtn: document.getElementById('saveGame'),
      gameList: document.getElementById('gameList'),
      categoryFilter: document.getElementById('categoryFilter'),
      sortSelect: document.getElementById('sortSelect'),
      searchInput: document.getElementById('searchInput'),
      resetFiltersBtn: document.getElementById('resetFiltersBtn'),
      modalTitle: document.getElementById('modalTitle'),
    };
  }

  static getFormElements() {
    return {
      name: document.getElementById('gameName'),
      description: document.getElementById('gameDescription'),
      category: document.getElementById('gameCategory'),
      releaseDate: document.getElementById('gameReleaseDate'),
      image: document.getElementById('gameImage'),
      developer: document.getElementById('gameDeveloper'),
      steamUrl: document.getElementById('gameSteamUrl'),
    };
  }
}
