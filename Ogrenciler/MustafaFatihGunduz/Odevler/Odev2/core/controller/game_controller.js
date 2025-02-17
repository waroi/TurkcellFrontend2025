import RequestModel from '../model/request_model.js';
import GameModel from '../model/game_model.js';
class GameController{
     async getAllGames(){
        try {
            const gamesArray =  await RequestModel.get('http://localhost:3000/games');
            const games = gamesArray.map(game => {
                const gameModel = new GameModel(game.gameID, game.gameTitle, game.gameDescription, game.gameGenre, game.gameReleaseDate, game.gamePhotoURL, game.gamePublisher, game.gameSteamURL);
                return gameModel;
            });
            return games;
        } catch (err) {
            console.error("Veri alınırken hata oluştu:", err);
        }
    }
    async addNewGame(game) {
        try {
            const newGame = new GameModel(game.gameID, game.gameTitle, game.gameDescription, game.gameGenre, game.gameReleaseDate, game.gamePhotoURL, game.gamePublisher, game.gameSteamURL);
            await RequestModel.post('http://localhost:3000/games', newGame);
        } catch (error) {
            console.error("Veri eklenirken hata oluştu:", error);
            
        }
    }
    async deleteGame(gameID) {
        try {
            const gamesArray = await RequestModel.get('http://localhost:3000/games');
            const gameWithID = gamesArray.find(game => String(game.gameID) === String(gameID));
            await RequestModel.delete(`http://localhost:3000/games/${gameWithID.id}`);
            console.log(`Oyun başarıyla silindi: ${gameWithID.gameTitle}`);
        } catch (error) {
            console.error("Veri silinirken hata oluştu:", error);
        }
    }
    
    async updateGame(gameID, updatedGame) {
        try {
            const gamesArray = await RequestModel.get('http://localhost:3000/games');
            const gameWithID = gamesArray.find(game => String(game.gameID) === String(gameID));
            await RequestModel.update(`http://localhost:3000/games/${gameWithID.id}`, updatedGame);
        } catch (error) {
            console.error("Veri güncellenirken hata oluştu:", error);
        }
    }

    async filterGamesGenreAndReleaseDate(category,startYear,endYear){
        try {        
            let url = "http://localhost:3000/games?_sort=gameReleaseDate&_order=asc";

            if (category) {
                url += `&gameGenre=${category}`;
            }
            if (startYear) {
                url += `&gameReleaseDate_gte=${startYear}`;
            }
            if (endYear) {
                url += `&gameReleaseDate_lte=${endYear}`;
            }
            const gamesArray = await RequestModel.get(url);
            return gamesArray;
        } catch (error) {
            console.error("Veri filtrelenirken hata oluştu:", error);
        }
    }

    async searchGameByTitleGenrePublisher(searchValue){
        try {
            const gamesArray = await RequestModel.get('http://localhost:3000/games');
            const filteredGames = gamesArray.filter(game => game.gameTitle.toLowerCase().includes(searchValue.toLowerCase()) || game.gameGenre.toLowerCase().includes(searchValue.toLowerCase()) || game.gamePublisher.toLowerCase().includes(searchValue.toLowerCase()));
            return filteredGames;
        } catch (error) {
            console.error("Veri filtrelenirken hata oluştu:", error);
        }
    }

    async orderGamesByAlphabeticalOrder() {
        try {
            const gamesArray = await RequestModel.get('http://localhost:3000/games');
            const orderedGames = gamesArray.sort((a, b) => a.gameTitle.localeCompare(b.gameTitle));
            return orderedGames;
        } catch (error) {
            console.error("Veri sıralanırken hata oluştu:", error);
        }
    }

    async orderGamesByAlphabeticalReverseOrder(){
        try {
            const gamesArray = await RequestModel.get('http://localhost:3000/games');
            const orderedGames = gamesArray.sort((a, b) => b.gameTitle.localeCompare(a.gameTitle));
            return orderedGames;
        } catch (error) {
            console.error("Veri sıralanırken hata oluştu:", error);
        }
    }

    async orderGamesByReleaseDate(){
        try {
            const gamesArray = await RequestModel.get('http://localhost:3000/games');
            const orderedGames = gamesArray.sort((a, b) => a.gameReleaseDate.localeCompare(b.gameReleaseDate));
            return orderedGames;
        } catch (error) {
            console.error("Veri sıralanırken hata oluştu:", error);
        }
    }
    
    async orderGamesByReleaseDateReverse(){
        try {
            const gamesArray = await RequestModel.get('http://localhost:3000/games');
            const orderedGames = gamesArray.sort((a, b) => b.gameReleaseDate.localeCompare(a.gameReleaseDate));
            return orderedGames;
        } catch (error) {
            console.error("Veri sıralanırken hata oluştu:", error);
        }
    }
    
}

export default GameController;