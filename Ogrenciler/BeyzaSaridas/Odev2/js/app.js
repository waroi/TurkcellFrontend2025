class App {
    constructor() {
        this.gameService = new GameService();
        this.gameView = new GameView('#gamesList');
        this.modalView = new ModalView();
        this.games = [];
        this.initializeEventListeners();
        this.loadGames();
    }

    initializeEventListeners() {
        document.getElementById('addGameBtn').addEventListener('click', () => {
            this.modalView.show();
        });

        document.getElementById('saveGameBtn').addEventListener('click', async () => {
            const gameData = this.modalView.getFormData();
            try {
                if (gameData.id) {
                    await this.gameService.updateGame(gameData.id, gameData);
                } else {
                    await this.gameService.createGame(gameData);
                }
                this.modalView.hide();
                this.loadGames(); 
            } catch (error) {
                console.error('Oyun kaydedilirken hata oluştu:', error);
                alert('Oyun kaydedilirken bir hata oluştu!');
            }
        });

        document.getElementById('gamesList').addEventListener('click', async (e) => {
            const gameId = e.target.dataset.id;
            if (!gameId) return;

            if (e.target.classList.contains('delete-game')) {
                if (confirm('Bu oyunu silmek istediğinizden emin misiniz?')) {
                    try {
                        await this.gameService.deleteGame(gameId);
                        this.loadGames(); 
                    } catch (error) {
                        console.error('Oyun silinirken hata oluştu:', error);
                        alert('Oyun silinirken bir hata oluştu!');
                    }
                }
            } else if (e.target.classList.contains('edit-game')) {
                try {
                    const game = await this.gameService.getGame(gameId);
                    this.modalView.show(game);
                } catch (error) {
                    console.error('Oyun bilgileri alınırken hata oluştu:', error);
                    alert('Oyun bilgileri alınırken bir hata oluştu!');
                }
            }
        });

        document.getElementById('searchInput').addEventListener('input', helpers.debounce(() => {
            this.filterGames();
        }, 300));

        document.getElementById('categoryFilter').addEventListener('change', () => {
            this.filterGames();
        });

        document.getElementById('sortSelect').addEventListener('change', () => {
            this.filterGames();
        });
    }

    async loadGames() {
        try {
            this.games = await this.gameService.getGames();
            this.updateCategoryFilter();
            this.filterGames();
        } catch (error) {
            console.error('Oyunlar yüklenirken hata oluştu:', error);
            alert('Oyunlar yüklenirken bir hata oluştu!');
        }
    }

    updateCategoryFilter() {
        const categoryFilter = document.getElementById('categoryFilter');
        const categories = [...new Set(this.games.map(game => game.category))];

        categoryFilter.innerHTML = 
            `<option value="">Tüm Kategoriler</option>` +
            categories.map(category => `<option value="${category}">${category}</option>`).join('');
    }

    filterGames() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const categoryFilter = document.getElementById('categoryFilter').value;
        const sortBy = document.getElementById('sortSelect').value;

        let filteredGames = this.games;

        if (searchTerm) {
            filteredGames = filteredGames.filter(game => 
                game.name.toLowerCase().includes(searchTerm) ||
                game.category.toLowerCase().includes(searchTerm) ||
                game.developer.toLowerCase().includes(searchTerm)
            );
        }

        if (categoryFilter) {
            filteredGames = filteredGames.filter(game => game.category === categoryFilter);
        }

        filteredGames = helpers.sortGames(filteredGames, sortBy);
        this.gameView.renderGames(filteredGames);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
