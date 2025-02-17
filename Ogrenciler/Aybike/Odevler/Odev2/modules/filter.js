import { GameService } from "./storage.js";
export class filterGames {
	static async filterGames(category, releaseDate) {
		try {
			const games = await GameService.fetchGames();
			if (category) {
				return games.filter(
					(game) => game.category.toLowerCase() === category.toLowerCase()
				);
			}

			if (releaseDate) {
				return games.filter((game) => game.releaseDate.startsWith(releaseDate));
			}
		} catch (error) {
			console.log("Error fetching games:", error.message);
		}
	}

	static async sortGames(sortBy) {
    try {
      const games = await GameService.fetchGames();
      
		if (sortBy === "A-Z") {
			return games.sort((x, y) => x.name.localeCompare(y.name));
		}
		if (sortBy === "Z-A") {
			return games.sort((x, y) => y.name.localeCompare(x.name));
		}
		if (sortBy === "newest") {
			return games.sort(
				(a, b) =>b.releaseDate - a.releaseDate
			);
		}
		if (sortBy === "oldest") {
			return games.sort(
				(a, b) => a.releaseDate -b.releaseDate
			);
		}
    } catch (error) {
      console.log("Error fetching games:", error.message);
      GameUI.errorMessageUI();
      
    }
	}

	static searchGames = async (query) => {
    try {
		const lowerQuery = query.toLowerCase();
		const games = await GameService.fetchGames();
		return games.filter((game) => game.name.toLowerCase().includes(lowerQuery));
      
    } catch (error) {
      console.log("Error fetching games:", error.message);      
    }
	};
}
