class Storage {
    static apiUrl = "http://localhost:3000/games";

    static async fetchGames() {
        const response = await fetch(this.apiUrl);
        return response.json();
    }

    static async addGame(game) {
        await fetch(this.apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(game)
        });
    }

    static async updateGame(id, game) {
        await fetch(`${this.apiUrl}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(game)
        });
    }

    static async deleteGame(id) {
        await fetch(`${this.apiUrl}/${id}`, {
            method: "DELETE"
        });
    }
}
