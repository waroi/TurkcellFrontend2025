export default class GameService {
    static API_URL = "http://localhost:3000/games";


    static async fetchGames() {
        const response = await fetch(this.API_URL);
        return response.json();
    }

    static async addGame(game) {
        const response = await fetch(this.API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(game)
        });
        return response.json();
    }

 
    static async updateGame(id, updatedGame) {
        await fetch(`${this.API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedGame)
        });
    }


    static async   deleteGame(id) {
        if (confirm("Bu oyunu silmek istediğinize emin misiniz?")) {
            fetch(`http://localhost:3000/games/${id}`, { method: "DELETE" })
                .then(() => {
                    alert("Oyun başarıyla silindi!");
                    fetchGames();
                })
                .catch(error => console.error("Hata:", error));
        }
    }
    
}
