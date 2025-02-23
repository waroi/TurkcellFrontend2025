const Blog_URL = "http://localhost:3000/musics"

export default class MusicClient {
    constructor() {}

    static async getAll() {
        return fetch(Blog_URL, {
            method: "GET",
            headers: { "Content-type": "application/json;" },
        }).then((response) => response.json());
    }

    static async get(id) {
        return fetch(`${Blog_URL}/${id}`, {
            method: "GET",
            headers: { "Content-type": "application/json;" },
        }).then((response) => response.json());
    }

}

