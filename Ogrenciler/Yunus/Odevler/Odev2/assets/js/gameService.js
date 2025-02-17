class GameService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/games'
    }
    async getAllGames() {
        const response = await fetch(this.baseUrl)
        if (!response.ok) ui.showNotification('Oyunları çekerken bir hata oluştu', 'danger')

        const data = await response.json()
        ui.showNotification('Tüm oyun arşiviniz geldi')

        return data
    }

    async addGame(game) {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            body: JSON.stringify(game),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (!response.ok) throw new Error('Oyun eklerken bir hata oluştu')
        ui.showNotification('Oyun başarıyla eklendi', 'success')

        const newGame = await response.json()
        return newGame
    }

    async updateGame(game) {
        const response = await fetch(`${this.baseUrl}/${game.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(game),
        })
        if (!response.ok) {
            ui.showNotification("Oyun güncellenirken bir hata oluştu", 'danger')
            throw new Error("Oyun güncellenirken bir hata oluştu")
        }
        const updatedGame = await response.json()
        return updatedGame
    }

    async deleteGame(id) {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Oyun silinirken bir hata oluştu')

        return true
    }

}