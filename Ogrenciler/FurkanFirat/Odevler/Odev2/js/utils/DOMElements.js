export default class DOMElements {
  static getElements() {
    return {
      addGameBtn: document.getElementById('addGameBtn'),
      formModal: document.getElementById('formModal'),
      gameForm: document.getElementById('gameForm'),
      saveGameBtn: document.getElementById('saveGame'),
      gameList: document.getElementById('gameList'),
      categoryFilter: document.getElementById('categoryFilter'),
      sortSelect: document.getElementById('sortSelect'),
      searchInput: document.getElementById('searchInput'),
      resetFiltersBtn: document.getElementById('resetFiltersBtn'),
      formModalTitle: document.getElementById('formModalTitle'),

      gameDetailModal: document.getElementById('gameDetailModal'),
      gameDetailCarousel: document.querySelector('#gameDetailCarousel'),
      detailGameName: document.getElementById('detailGameName'),
      detailGameDescription: document.getElementById('detailGameDescription'),
      detailGameCategory: document.getElementById('detailGameCategory'),
      detailGameReleaseDate: document.getElementById('detailGameReleaseDate'),
      detailGameDeveloper: document.getElementById('detailGameDeveloper'),
      detailGameSteamUrl: document.getElementById('detailGameSteamUrl'),
    };
  }

  static getFormElements() {
    return {
      name: document.getElementById('gameName'),
      description: document.getElementById('gameDescription'),
      category: document.getElementById('gameCategory'),
      releaseDate: document.getElementById('gameReleaseDate'),
      coverImage: document.getElementById('gameCoverImage'),
      image1: document.getElementById('gameImage1'),
      image2: document.getElementById('gameImage2'),
      image3: document.getElementById('gameImage3'),
      image4: document.getElementById('gameImage4'),
      developer: document.getElementById('gameDeveloper'),
      steamUrl: document.getElementById('gameSteamUrl'),
    };
  }
}
