const GAME_URL = "http://localhost:3000/games";

export default class GamesClient {
	constructor() {}

	static async getAll() {
		return fetch(GAME_URL, {
			method: "GET",
			headers: { "Content-type": "application/json;" },
		}).then((response) => response.json());
	}

	static async sortByDes() {
		return fetch(`${GAME_URL}?_sort=-name`, {
			method: "GET",
			headers: { "Content-type": "application/json;" },
		}).then((response) => response.json());
	}

	static async sortByAsc() {
		return fetch(`${GAME_URL}?_sort=name`, {
			method: "GET",
			headers: { "Content-type": "application/json;" },
		}).then((response) => response.json());
	}

	static async sortByReleaseDate() {
		return fetch(`${GAME_URL}?_sort=releaseDate`, {
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

	static async put(game) {
		return fetch(`${GAME_URL}/${game.id}`, {
			method: "PUT",
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
