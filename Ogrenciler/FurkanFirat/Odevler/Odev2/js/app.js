import GameController from './controllers/GameController.js';

document.addEventListener('DOMContentLoaded', () => {
  const gameController = new GameController();
  gameController.loadGames();
});
