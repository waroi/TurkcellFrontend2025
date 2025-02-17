class GameService {
    constructor() {
        this.apiURL = "http://localhost:3000/games";

        this.fetchGames = async function () {
            try {
                const response = await fetch(this.apiURL);
                return await response.json();
            } catch (error) {
                return console.error("Oyunları yüklerken hata oluştu:", error);
            }
        };

        this.addGame = async function (game) {
            try {
                const response = await fetch(this.apiURL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(game)
                });
                return await response.json();
            } catch (error) {
                return console.error("Oyun eklerken hata oluştu:", error);
            }
        };

        this.deleteGame = async function (gameId) {
            try {
                return await fetch(`${this.apiURL}/${gameId}`, { method: "DELETE" });
            } catch (error) {
                return console.error("Oyun silerken hata oluştu:", error);
            }
        };

        this.updateGame = async function (gameId, updatedGame) {
            try {
                const response = await fetch(`${this.apiURL}/${gameId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedGame)
                });
                return await response.json();
            } catch (error) {
                return console.error("Oyun güncellenirken hata oluştu:", error);
            }
        };
    }
}

var gameService = new GameService();
