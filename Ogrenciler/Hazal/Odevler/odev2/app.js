import Game from './game.js';
import Request from './storage.js';
import UI from './UI.js';

class App {
    static init() {
        document.addEventListener('DOMContentLoaded', App.loadGames);
        document.getElementById('filterCategory').addEventListener('change', App.filterGames);
        document.getElementById('sortBy').addEventListener('change', App.sortGames);
        document.getElementById('searchInput').addEventListener('input', App.searchGames);
        document.getElementById('addGameForm').addEventListener('submit', App.addGame);
        document.getElementById('addGameModal').addEventListener('hidden.bs.modal', () => {
            document.getElementById('addGameForm').reset();
            document.getElementById('gameId').value = '';
        });
        document.getElementById('gameDetailModal').addEventListener('hidden.bs.modal', () => {
            document.getElementById('gameDetailContent').innerHTML = '';
        });
    }

    static async loadGames() {
        try {
            const games = await Request.getGames();
            UI.renderGames(games);
            const categories = [...new Set(games.map(game => game.category))];
            UI.populateFilterCategories(categories);
        } catch (error) {
            UI.showError('Oyunlar yüklenirken bir hata oluştu.');
        }
    }

    static async addGame(e) {
        e.preventDefault();
        const name = document.getElementById('gameName').value;
        const description = document.getElementById('gameDescription').value;
        const category = document.getElementById('gameCategory').value;
        const releaseDate = document.getElementById('gameReleaseDate').value;
        const image = document.getElementById('gameImage').value;
        const developer = document.getElementById('gameDeveloper').value;
        const steamUrl = document.getElementById('gameSteamUrl').value;

        let gameId = document.getElementById('gameId').value;
        const game = new Game(name, description, category, image, developer, releaseDate, steamUrl, gameId);

        if (gameId) {
            try {
                await Request.updateGame(gameId, game);
                await App.loadGames();
                const modal = new bootstrap.Modal(document.getElementById('addGameModal'));
                modal.hide();
                e.target.reset();
            } catch (error) {
                UI.showError('Oyun güncellenirken bir hata oluştu.');
            }
        } else {
            try {
                await Request.addGame(game);
                await App.loadGames();
                const modal = new bootstrap.Modal(document.getElementById('addGameModal'));
                modal.hide();
                e.target.reset();
            } catch (error) {
                UI.showError('Oyun eklenirken bir hata oluştu.');
            }
        }
    }

    static async deleteGame(id) {
        if (confirm('Bu oyunu silmek istediğinize emin misiniz?')) {
            try {
                await Request.deleteGame(id);
                UI.renderGames(await Request.getGames());
            } catch (error) {
                UI.showError('Oyun silinirken bir hata oluştu.');
            }
        }
    }

    static async editGame(id) {
        try {
            const games = await Request.getGames();
            const game = games.find(game => game.id === id);
            UI.showEditGameModal(game);
        } catch (error) {
            console.error('Hata:', error);
        }
    }

    static async showGameDetail(id) {
        try {
            const games = await Request.getGames();
            const game = games.find(game => game.id === id);
            UI.showGameDetail(game);
        } catch (error) {
            UI.showError('Oyun detayları yüklenirken bir hata oluştu.');
        }
    }

    static async filterGames() {
        try {
            const games = await Request.getGames();
            const category = this.value;
            const filteredGames = category ? games.filter(game => game.category === category) : games;
            UI.renderGames(filteredGames);
        } catch (error) {
            UI.showError('Oyunlar filtrelenirken bir hata oluştu.');
        }
    }

    static async sortGames() {
        try {
            const games = await Request.getGames();
            const [key, order] = this.value.split('-');
            const sortedGames = [...games].sort((a, b) => {
                if (key === 'name') {
                    return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
                } else if (key === 'date') {
                    return order === 'asc' ? new Date(a.releaseDate) - new Date(b.releaseDate) : new Date(b.releaseDate) - new Date(a.releaseDate);
                }
                return 0;
            });
            UI.renderGames(sortedGames);
        } catch (error) {
            UI.showError('Oyunlar sıralanırken bir hata oluştu.');
        }
    }

    static async searchGames() {
        try {
            const games = await Request.getGames();
            const query = this.value.toLowerCase();
            const searchedGames = games.filter(game =>
                game.name.toLowerCase().includes(query) ||
                game.category.toLowerCase().includes(query) ||
                game.developer.toLowerCase().includes(query)
            );
            UI.renderGames(searchedGames);
        } catch (error) {
            UI.showError('Oyunlar aranırken bir hata oluştu.');
        }
    }
}

App.init();
window.App = App;