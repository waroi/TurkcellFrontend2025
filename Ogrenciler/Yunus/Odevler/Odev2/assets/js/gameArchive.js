class GameArchive {
    constructor() {
        this.games = []
        this.categories = []
        this.baseUrl = 'http://localhost:3000/games'
        // modalı bir kaç fonksiyonda çağırmak yerine constructor olarak alındı ve bu sayede her yerden tek bir şeyi kontrol eldiyoruz
        this.modal = new bootstrap.Modal(document.getElementById("addGameModal"))
        this.deleteModal = new bootstrap.Modal(document.getElementById("deleteConfirmModal"))
        this.detailsModal = new bootstrap.Modal(document.getElementById("gameDetailsModal"))
        this.gameToDelete = null
        this.gameService = new GameService()
    }

    async getAllGames() {
        this.games = await this.gameService.getAllGames()
        this.updateUI()
    }

    async addGame(game) {
        const newGame = await this.gameService.addGame(game)

        this.games.push(newGame)
        this.updateUI()
        this.closeAndResetModal()

    }

    async updateGame(game) {
        const updatedGame = await this.gameService.updateGame(game)
        const index = this.games.findIndex((game) => game.id === updatedGame.id)
        this.games[index] = updatedGame

        this.updateUI()
        this.closeAndResetModal()
        ui.showNotification("Oyun başarıyla güncellendi", "success")
    }

    async deleteGame(id) {
        const response = await this.gameService.deleteGame(id)

        this.games = this.games.filter(game => game.id !== id)
        this.updateUI()
        ui.showNotification('Oyun başarıyla silindi', 'danger')

    }

    addEventListeners() {
        document.querySelectorAll('.edit-game').forEach(button =>
            button.addEventListener('click', (event) => this.editGame(event.target.dataset.id)))

        document.querySelectorAll('.delete-game').forEach(button =>
            button.addEventListener('click', (event) => this.showDeleteConfirmation(event.target.dataset.id)))

        document.querySelectorAll('.view-details').forEach(button =>
            button.addEventListener('click', (event) => this.showGameDetails(event.target.dataset.id)))

        document.getElementById('confirmDelete').addEventListener('click', () => {
            if (this.gameToDelete !== null) {
                this.deleteGame(this.gameToDelete)
                this.deleteModal.hide()
                this.gameToDelete = null
            }
        });

        document.getElementById('cancelDelete').addEventListener('click', () => {
            this.gameToDelete = null
            this.deleteModal.hide()
        });
    }

    showDeleteConfirmation(id) {
        this.gameToDelete = id
        this.deleteModal.show()
    }

    showGameDetails(id) {
        const game = this.games.find(game => game.id === id)
        if (!game) return

        document.getElementById('detailGameName').textContent = game.name
        document.getElementById('detailGameImage').src = game.image
        document.getElementById('detailGameDescription').textContent = game.description
        document.getElementById('detailGameDeveloper').textContent = game.developer
        document.getElementById('detailGameCategory').textContent = game.category
        document.getElementById('detailGameReleaseDate').textContent = new Date(game.releaseDate).toLocaleDateString('tr-TR') // ülke ülke değiştirebilliyormuşuz bize uygun tarih gösterimi
        document.getElementById('detailGameStatus').textContent = game.favorite ? 'Favorilerde' : 'Normal'

        const ratingDiv = document.getElementById('detailGameRating')
        ratingDiv.textContent = ''
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i')
            star.className = `bi bi-star${i < game.rating ? '-fill' : ''} text-warning`
            ratingDiv.appendChild(star)
        }

        const steamLink = document.getElementById('detailSteamLink')
        steamLink.href = game.steamUrl
        steamLink.style.display = 'inline-block'
        this.detailsModal.show()
    }

    editGame(id) {
        const game = this.games.find((game) => game.id === id)

        if (game) {
            const saveGameBtn = document.getElementById("saveGameBtn")
            saveGameBtn.textContent = "Oyunu Güncelle"
            saveGameBtn.dataset.id = id

            document.getElementById("modalTitle").textContent = "Oyunu Güncelle"

            document.getElementById("gameName").value = game.name
            document.getElementById("gameDescription").value = game.description
            document.getElementById("gameCategory").value = game.category
            document.getElementById("gameReleaseDate").value = game.releaseDate
            document.getElementById("gameImage").value = game.image
            document.getElementById("gameDeveloper").value = game.developer
            document.getElementById("gameSteamUrl").value = game.steamUrl
            document.getElementById("gameRating").value = game.rating
            document.getElementById("gameFavorite").checked = game.favorite

            this.modal.show()
        }
    }

    updateCategories() {
        const categoryFilter = document.getElementById('categoryFilter')
        this.games.map(game => {
            if (!this.categories.includes(game.category)) this.categories.push(game.category)
        })

        while (categoryFilter.firstChild) {
            categoryFilter.removeChild(categoryFilter.firstChild)
        }

        const defaultOption = document.createElement('option')
        defaultOption.value = "allcategories"
        defaultOption.textContent = "Tüm Kategoriler"
        categoryFilter.appendChild(defaultOption)

        this.categories.map(category => {
            const option = document.createElement('option')
            option.value = category
            option.textContent = category
            categoryFilter.appendChild(option)
        })
        this.updateStats()
        this.addEventListeners()
    }

    filterGames() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase()
        const category = document.getElementById('categoryFilter').value
        const sortBy = document.getElementById('sortBy').value

        let filteredGames = this.games.filter(game => {
            const matchesSearch = game.name.toLowerCase().includes(searchTerm) ||
                game.category.toLowerCase().includes(searchTerm) ||
                game.developer.toLowerCase().includes(searchTerm)
            const matchesCategory = category === 'allcategories' || game.category === category;
            return matchesSearch && matchesCategory
        });

        filteredGames.sort((a, b) => {
            switch (sortBy) {
                case 'name-asc':
                    return a.name.localeCompare(b.name)
                case 'name-desc':
                    return b.name.localeCompare(a.name)
                case 'releaseDate':
                    return new Date(b.releaseDate) - new Date(a.releaseDate)
                case 'rating':
                    return b.rating - a.rating
                case 'recently-added':
                    return new Date(b.dateAdded) - new Date(a.dateAdded)
                default:
                    // ui.showNotification('Sıralama yaparken bir hata oluştu', 'danger')
                    return 0;
            }
        });

        ui.renderGames(filteredGames)
        this.updateStats(filteredGames)
        this.addEventListeners()
    }

    updateUI() {
        // her işlemden sonra ekranı güncelliyoruz, sıfırlıyoruz, listenerları tekrardan veriyoruz
        this.updateCategories()
        ui.renderGames(this.games)
        this.updateStats()
        ui.showFavGames(this.games.filter(game => game.favorite))
        this.addEventListeners()
    }

    updateStats() {
        document.getElementById('totalGames').textContent = this.games.length
        document.getElementById('totalCategories').textContent = this.categories.length
        document.getElementById('favoriteGames').textContent = this.games.filter(game => game.favorite).length
    }

    getFavoriteGames = (games) => {
        ui.showFavGames(games.filter(game => game.favorite))
        this.addEventListeners()
    }

    closeAndResetModal() {
        this.modal.hide();
        document.getElementById("gameForm").reset()
        document.getElementById("saveGameBtn").dataset.id = ''
    }
}