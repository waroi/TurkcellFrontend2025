class GameService {
  constructor() {
    this.baseUrl = 'http://localhost:3000/games';
  }

  async getGames() {
    const response = await fetch(this.baseUrl);
    if (!response.ok) throw new Error('Failed to get games.');
    return response.json();
  }

  async addGame(game) {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    });
    if (!response.ok) throw new Error('Could not add the game');
    return response.json();
  }

  async updateGame(game) {
    const response = await fetch(`${this.baseUrl}/${game.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    });
    if (!response.ok) throw new Error('Could not update the game');
    return response.json();
  }

  async deleteGame(id) {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
    });
    console.log(`${this.baseUrl}/${id}`);
    if (!response.ok) throw new Error('Could not delete the game');
    return true;
  }
}

export default GameService;
