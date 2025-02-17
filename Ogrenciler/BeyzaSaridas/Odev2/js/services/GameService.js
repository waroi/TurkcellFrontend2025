class GameService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/games';
    }

    async fetchWithErrorHandling(url, options = {}) {
        try {
            const response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }//no content=204
            if (response.status === 204) {
                return null;
            }

            return await response.json();
        } catch (error) {
            console.error('API isteği sırasında hata:', error);
            throw new Error('İşlem sırasında bir hata oluştu: ' + error.message);//hata fırlatır-catch yakalayabilir.
        }
    }

    async getGames() {
        const data = await this.fetchWithErrorHandling(this.baseUrl);
        return data.map(game => new Game(game));
    }

    async getGame(id) {
        if (!id) {
            throw new Error('Geçersiz oyun ID\'si');
        }
        //fetch sadece ağ hatalarında hata fırlatır, hata kodlarını yakalamak için bunu kullanırız.
        const data = await this.fetchWithErrorHandling(`${this.baseUrl}/${id}`);
        return new Game(data);
    }
    async createGame(gameData) {
        const timestamp = new Date().getTime();
        const randomSuffix = Math.floor(Math.random() * 1000);
        const newId = `${timestamp}-${randomSuffix}`;
        const game = new Game({
            ...gameData,
            id: newId
        });

        try {
            const data = await this.fetchWithErrorHandling(this.baseUrl, {
                method: 'POST',
                body: JSON.stringify(game)
            });

            if (!data || !data.id) {
                console.warn('Server ID döndürmedi, oluşturulan ID kullanılıyor:', newId);
                data.id = newId;
            }

            return new Game(data);
        } catch (error) {
            console.error('Oyun oluşturulurken hata:', error);
            throw new Error('Oyun oluşturulamadı: ' + error.message);
        }
    }
    async updateGame(id, gameData) {
        if (!id) {
            throw new Error('Geçersiz oyun ID\'si');
        }
        const game = new Game({ ...gameData, id });
        const data = await this.fetchWithErrorHandling(`${this.baseUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(game)
        });
        
        return new Game(data);
    }
    async deleteGame(id) {
        if (!id) {
            throw new Error('Geçersiz oyun ID\'si');
        }

        await this.fetchWithErrorHandling(`${this.baseUrl}/${id}`, {
            method: 'DELETE'
        });
    }
}