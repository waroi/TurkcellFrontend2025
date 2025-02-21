const BLOG_URL = "http://localhost:3000/posts";

export default class BlogClient {
	constructor() {}

	static async getAll() {
		return fetch(BLOG_URL, {
			method: "GET",
			headers: { "Content-type": "application/json;" },
		}).then((response) => response.json());
	}

	static async get(id) {
		return fetch(`${BLOG_URL}/${id}`, {
			method: "GET",
			headers: { "Content-type": "application/json;" },
		}).then((response) => response.json());
	}
}
