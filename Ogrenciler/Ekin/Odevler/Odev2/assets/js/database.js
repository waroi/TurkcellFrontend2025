class Database {
  static URL = "http://localhost:3000";

  static getGames = async () =>
    await fetch(`${this.URL}/games`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());

  static addGame = async (game) =>
    await fetch(`${this.URL}/games`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: game.toJSONString(),
    });

  static editGame = async (game) =>
    await fetch(`${this.URL}/games/${game.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: game.toJSONString(),
    });

  static deleteGame = async (game) =>
    await fetch(`${this.URL}/games/${game.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
}
