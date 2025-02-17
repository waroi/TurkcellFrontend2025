export default class GameManager {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async fetchGames() {
    const res = await fetch(this.apiUrl);
    return await res.json();
  }

  async addGame(game) {
    await fetch(this.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(game),
    });
  }

  async deleteGame(id) {
    const res = await fetch(`${this.apiUrl}/${id}`, { method: "DELETE" });

    return res.json();
  }

  async updateGame(id, updatedData) {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to update game with id ${id}. Status: ${response.status}`
        );
      }

      return response.json();
    } catch (error) {
      console.error("Error updating game:", error);
      throw error;
    }
  }

  async getGameById(id) {
    const res = await fetch(`${this.apiUrl}/${id}`);
    if (!res.ok) {
      throw new Error("Game not found");
    }
    return await res.json();
  }
}
