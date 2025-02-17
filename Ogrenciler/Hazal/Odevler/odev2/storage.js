
class Request {
    static async getGames() {
        const response = await fetch('http://localhost:3000/games');
        return await response.json();
    }

    static async addGame(game) {
        const response = await fetch('http://localhost:3000/games', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(game)
        });
        return await response.json();
    }

    static async deleteGame(id) {
        await fetch(`http://localhost:3000/games/${id}`, {
            method: 'DELETE'
        });
    }

    static async updateGame(id, updatedGame) {
        const response = await fetch(`http://localhost:3000/games/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedGame)
        });
        return await response.json();
    }
}

export default Request;