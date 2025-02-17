import { GameService } from './GameService.js';
import { GameUI } from './GameUI.js';

class App {
    constructor() {
        this.gameService = new GameService();
        this.gameUI = new GameUI(this.gameService);
    }

    loadGames() {
        this.gameService.fetchGames()
            .then(games => this.gameUI.displayGames(games))
            .catch(() => {
                this.gameUI.alertManager.showAlert(
                    'Oyunlar yüklenirken bir hata oluştu', 
                    'danger'
                );
            });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.loadGames();
});
