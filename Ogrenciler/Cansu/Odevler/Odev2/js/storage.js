class Storage {
    static async fetchGames() {
        try {
            const response = await fetch("http://localhost:3000/games");

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const games = await response.json();
            console.log("Games drawn:", games);
            return games;
        } catch (error) {
            console.error("Error while loading games:", error);
            return []; 
        }
    }

    static async addGame(game) {
        try {
            const response = await fetch("http://localhost:3000/games", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(game),
            });

            if (!response.ok) {
                throw new Error(`Game could not be added! Error code: ${response.status}`);
            }

            return await response.json(); 
        } catch (error) {
            console.error("An error occurred while adding the game:", error);
            return null; 
        }
    }

    static async deleteGame(id) {
        try {
            const response = await fetch(`http://localhost:3000/games/${id}`, { method: "DELETE" });

            if (!response.ok) {
                throw new Error(`The game could not be deleted! Error code: ${response.status}`);
            }

            return true; 
        } catch (error) {
            console.error("An error occurred while deleting the game:", error);
            return false;
        }
    }
}



