export class Data {
  constructor(baseURL) {
    this.baseURL = baseURL;
}

async get() {
    try {
        const response = await fetch(`${this.baseURL}`);
        if (!response.ok) throw new Error("Veri alınamadı");
        return await response.json();
    } catch (error) {
        console.error("GET hatası:", error);
    }
}

async addGame(game) {
    try {
        const response = await fetch(`${this.baseURL}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(game)
        });
        if (!response.ok) throw new Error("Oyun eklenemedi");
    } catch (error) {
        console.error("POST hatası:", error);
    }
}

async updateGame(id, game) {
    try {
        const response = await fetch(`${this.baseURL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(game)
        });
        if (!response.ok) throw new Error("Oyun güncellenemedi");
    } catch (error) {
        console.error("PUT hatası:", error);
    }
}

async deleteGame(id) {
    try {
        const response = await fetch(`${this.baseURL}/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) throw new Error("Oyun silinemedi");
    } catch (error) {
        console.error("DELETE hatası:", error);
    }
}
}