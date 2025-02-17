import { Game } from './Game.js';
import { normalizeArrayData, createSystemReq } from './utils/DataUtils.js';

export class GameService {
    constructor() {
        this.dataURL = 'http://localhost:3000';
        this.games = [];
        this.currentSortType = null;
    }

    fetchGames() {
        return new Promise((resolve, reject) => {
            fetch(`${this.dataURL}/games`)
                .then(response => {
                    if (!response.ok) throw new Error('Oyunlar yüklenirken hata oluştu');
                    return response.json();
                })
                .then(data => {
                    const gamesArray = Array.isArray(data) ? data : (data.games || []);
                    this.games = gamesArray.map(game => Game.fromJSON(game))
                        .filter(game => game !== null);
                    resolve(this.games);
                })
                .catch(error => reject(error));
        });
    }

    addGame(gameData) {
        return new Promise((resolve, reject) => {
            
            const highestId = Math.max(...this.games.map(game => parseInt(game.id) || 0));
            const newId = (highestId + 1).toString();

            const normalizedData = {
                id: newId,
                name: gameData.name,
                description: gameData.description,
                image: gameData.image,
                category: GameService.normalizeCategory(gameData.category),
                releaseDate: gameData.releaseDate,
                company: gameData.company,
                steamUrl: gameData.steamUrl,
                rating: gameData.rating || "Değerlendirilmedi",
                platforms: normalizeArrayData(gameData.platforms, ',', ['PC']),
                minSystemReq: createSystemReq(gameData.minSystemReq),
                tags: normalizeArrayData(gameData.tags, ',', [gameData.category])
            };

            fetch(`${this.dataURL}/games`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(normalizedData)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(errorData => {
                        throw new Error(errorData.message || 'Oyun eklenirken bir hata oluştu');
                    });
                }
                return this.fetchGames();
            })
            .then(() => resolve(Game.fromJSON(normalizedData)))
            .catch(error => reject(new Error(`Oyun eklenirken hata: ${error.message}`)));
        });
    }

    updateGame(id, gameData) {
        return new Promise((resolve, reject) => {
            const stringId = String(id);
            
            
            const platforms = Array.isArray(gameData.platforms) 
                ? gameData.platforms 
                : (gameData.platforms ? gameData.platforms.split(',').map(p => p.trim()) : ['PC']);

            const tags = Array.isArray(gameData.tags)
                ? gameData.tags
                : (gameData.tags ? gameData.tags.split(',').map(t => t.trim()) : [gameData.category]);

            const normalizedData = {
                id: stringId,
                name: gameData.name,
                description: gameData.description,
                image: gameData.image,
                category: GameService.normalizeCategory(gameData.category),
                releaseDate: gameData.releaseDate,
                company: gameData.company,
                steamUrl: gameData.steamUrl,
                rating: gameData.rating || "Değerlendirilmedi",
                platforms: platforms,
                minSystemReq: {
                    os: gameData.minSystemReq?.os || "Windows 10",
                    processor: gameData.minSystemReq?.processor || "Belirtilmedi",
                    memory: gameData.minSystemReq?.memory || "Belirtilmedi",
                    graphics: gameData.minSystemReq?.graphics || "Belirtilmedi",
                    storage: gameData.minSystemReq?.storage || "Belirtilmedi"
                },
                tags: tags
            };

            fetch(`${this.dataURL}/games/${stringId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(normalizedData)
            })
            .then(response => {
                if (!response.ok) throw new Error('Oyun güncellenirken hata oluştu');
                return response.json();
            })
            .then(updatedGame => {
                return this.fetchGames().then(() => Game.fromJSON(updatedGame));
            })
            .then(game => resolve(game))
            .catch(error => reject(error));
        });
    }

    deleteGame(id) {
        return new Promise((resolve, reject) => {
            const stringId = String(id);
            fetch(`${this.dataURL}/games/${stringId}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (!response.ok) throw new Error('Oyun silinirken hata oluştu');
                return response.json();
            })
            .then(() => resolve("Oyun başarıyla silindi"))
            .catch(err => reject("Hata: Silme işlemi başarısız"));
        });
    }

    getGameById(id) {
        const stringId = String(id);
        return this.games.find(game => game.id === stringId);
    }

    
    filterGames(searchTerm = '', category = 'all') {
        let filteredGames = this.games;

        if (searchTerm) {
            searchTerm = searchTerm.toLowerCase();
            filteredGames = filteredGames.filter(game => {
                return game.name.toLowerCase().includes(searchTerm) ||
                       game.description.toLowerCase().includes(searchTerm) ||
                       game.company.toLowerCase().includes(searchTerm) ||
                       game.category.toLowerCase().includes(searchTerm) ||
                       game.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            });
        }

        if (category && category !== 'all') {
            filteredGames = filteredGames.filter(game => game.category === category);
        }

        return filteredGames;
    }

    static normalizeCategory(category) {
        const categories = ['Aksiyon', 'Macera', 'RPG', 'Strateji', 'Spor', 'Yarış', 'Simülasyon'];
        return categories.includes(category) ? category : 'Diğer';
    }

    sortGames(sortType) {
        this.currentSortType = sortType;
        let sortedGames = [...this.games];

        switch (sortType) {
            case 'AZ':
                sortedGames.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'ZA':
                sortedGames.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'DATE':
                sortedGames.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
                break;
            default:
                sortedGames.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        }

        return sortedGames;
    }
}
