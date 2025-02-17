const API_URL = "http://localhost:5000/games";

export class GameService {
	static async fetchGames() {
		try {
			const response = await fetch(API_URL);
			return await response.json();
		} catch (error) {
			console.log("Error fetching games:", error.message);
			GameUI.errorMessageUI();
		}
	}

	static async fetchGameById(id) {
		try {
			const response = await fetch(`${API_URL}/${id}`);
			return await response.json();
		} catch (error) {
			console.log("Error fetching games:", error.message);
		}
	}

	static async createGame(game) {
		try {
			const response = await fetch(API_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(game),
			});
			return await response.json();
		} catch (error) {
			console.log("Error fetching games:", error.message);
		}
	}

	static async updateGame(id, game) {
		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(game),
			});
			return await response.json();
		} catch (error) {
			console.log("Error fetching games:", error.message);
		}
	}

	static async deleteGame(id) {
		try {
			const response = await fetch(`${API_URL}/${id}`, {
				method: "DELETE",
			});
			return await response.json();
		} catch (error) {
			console.log("Error fetching games:", error.message);
		}
	}
}
