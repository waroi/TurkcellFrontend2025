const GAME_URL = "http://localhost:3000/games";

export default class GamesClient {
	constructor() {}

	static async getAll() {
		return fetch(GAME_URL, {
			method: "GET",
			headers: { "Content-type": "application/json;" },
		}).then((response) => response.json());
	}

	static async create(game) {
		return fetch(GAME_URL, {
			method: "POST",
			body: JSON.stringify(game),
			headers: { "Content-type": "application/json;" },
		}).then((response) => response.json());
	}

	static async delete(id) {
		return fetch(`${GAME_URL}/${id}`, {
			method: "DELETE",
		}).then((response) => response.json());
	}
}
