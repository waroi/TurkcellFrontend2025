class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getGames() {
    const response = await fetch(`${this.baseUrl}/games`);
    return response.json();
  }

  async addGame(game) {
    const response = await fetch(`${this.baseUrl}/games`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game),
    });
    return response.json();
  }

  async deleteGame(id) {
    const response = await fetch(`${this.baseUrl}/games/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Silme işlemi sırasında hata oluştu!");
      return;
    }

    return response.json();
  }

  async updateGame(id, updatedGame) {
    const response = await fetch(`${this.baseUrl}/games/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGame),
    });

    if (!response.ok) {
      console.error("Güncelleme sırasında hata oluştu!");
      return;
    }

    return response.json();
  }
}

export default ApiService;
