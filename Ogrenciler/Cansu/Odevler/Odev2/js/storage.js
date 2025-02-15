class Storage {
    static apiUrl = "http://localhost:5000/games";

    static async fetchGames() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        } catch (error) {
            console.error("Error fetching games:", error);
            return [];
        }
    }

    static async addGame(game) {
        try {
            const response = await fetch(this.apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(game)
            });
            if (!response.ok) {
                throw new Error("Failed to add game");
            }
            return response.json();
        } catch (error) {
            console.error("Error adding game:", error);
        }
    }

    static async updateGame(id, game) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(game)
            });
            if (!response.ok) {
                throw new Error("Failed to update game");
            }
            return response.json();
        } catch (error) {
            console.error("Error updating game:", error);
        }
    }

    static async deleteGame(id) {
        try {
            const response = await fetch(`${this.apiUrl}/${id}`, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error("Failed to delete game");
            }
            return response.ok; // true/false dönebilir
        } catch (error) {
            console.error("Error deleting game:", error);
        }
    }
}
