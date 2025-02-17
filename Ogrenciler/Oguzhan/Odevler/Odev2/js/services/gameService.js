import { baseUrl, getFormData } from '../consts/consts.js';
import { Game } from './../model/game.js';
import { ApiService } from './apiService.js';

export class GameService {

    static async createGame() {
        const formData = getFormData();
        const createGameId = formData.gameName + formData.myPoint;

        const newGame = new Game(
            createGameId,
            formData.gameName,
            formData.description,
            formData.categoryIds,
            formData.releaseDate,
            formData.imageUrl,
            formData.developer,
            formData.isCompleted,
            formData.steamUrl,
            formData.myPoint
        )
        return ApiService.add(newGame);
    }

    static async deleteGame(gameId) {
        return ApiService.delete(gameId);
    }

    static async updateGame(gameId) {
        const formData = getFormData();
        console.log("Form verisi:", formData);
        const updatedGameData = new Game(
            gameId,
            formData.gameName,
            formData.description,
            formData.categoryIds,
            formData.releaseDate,
            formData.imageUrl,
            formData.developer,
            formData.isCompleted,
            formData.steamUrl,
            formData.myPoint
        )

        return ApiService.update(gameId, updatedGameData);
    }

    static async getGameById(gameId) {
        const response = await fetch(`${baseUrl}/${gameId}`);
        return await response.json();
    }
}