const API_URL = "http://localhost:3000/games";

export default class GameService {
  static async getGames() {
    return fetch(API_URL).then((response) => {
      if (!response.ok) throw new Error(`HTTP Hatası: ${response.status}`);
      return response.json;
    });
  }
  static addGame(game) {
    return fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(game),
    }).then((response) => {
      if (!response.ok) throw new Error("Oyun eklenemedi.");
      return response.json();
    });
  }
  static updateGame(id, updatedGame) {
    return fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(game),
    }).then((response) => {
      if (!response.ok) throw new Error("Oyun güncellenemedi.");
      return response.json;
    });
  }
  static deleteGame(id) {
    return fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) throw new Error("Oyun silinemedi.");
      return response.json;
    });
  }
}
