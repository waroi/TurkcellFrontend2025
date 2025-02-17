import { baseUrl, headers } from "../consts/consts.js";

export class ApiService {

    static async fetchGames() {
        try {
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error('Bir hata oluştu: ' + response.status);
            }
            const games = await response.json();
            return games;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async add(newGameData) {
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(newGameData)
            });
            if (!response.ok) {
                throw new Error('Ekleme hatası: ' + response.status);
            }
            const addedGame = await response.json();
            return addedGame;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async update(gameId,updatedGameData) {
        try {
            const response = await fetch(`${baseUrl}/${gameId}`, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(updatedGameData)
            });
            if (!response.ok) {
                throw new Error('Güncelleme hatası: ' + response.status);
            }
            const updatedGame = await response.json();
            return updatedGame;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async delete(gameId) {
        try {
            const response = await fetch(`${baseUrl}/${gameId}`, {
                method: 'DELETE',
                headers: headers
            });
            if (!response.ok) {
                throw new Error('Silme hatası: ' + response.status);
            }
            return true; 
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async fetchCategories() {

        const response = await fetch("http://localhost:3000/categories")
        if (!response.ok) {
            throw new Error('Bir hata oluştu:', response.status)
        }
        const categories = await response.json();
        return categories;
    }
}