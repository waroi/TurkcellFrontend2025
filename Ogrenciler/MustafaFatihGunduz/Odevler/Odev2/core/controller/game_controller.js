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
            const gameWithID = gamesArray.find(game => game.gameID === gameID);
            await RequestModel.delete(`http://localhost:3000/games/${gameWithID.gameID}`);
            console.log(`Oyun başarıyla silindi: ${gameWithID.gameTitle}`);
        } catch (error) {
            console.error("Veri silinirken hata oluştu:", error);
        }
    }
    
    async updateGame(gameID, updatedGame) {
        try {
            const gamesArray = await RequestModel.get('http://localhost:3000/games');
            const gameWithID = gamesArray.find(game => String(game.gameID) === String(gameID));
            console.log("GAME WITH ID ID :"+ gameWithID.gameID);
            await RequestModel.update(`http://localhost:3000/games?gameID=${gameWithID.gameID}`, updatedGame);
        } catch (error) {
            console.error("Veri güncellenirken hata oluştu:", error);
        }
    }

   async filterGameByTitleGenrePublisher(title, genre, publisher) {
        try {
            const gamesArray = await RequestModel.get('http://localhost:3000/games');
            const filteredGames = gamesArray.filter(game => {
                if (title) {
                    return game.gameTitle.toLowerCase().includes(title.toLowerCase());
                } else if (genre) {
                    return game.gameGenre.toLowerCase().includes(genre.toLowerCase());
                } else if (publisher) {
                    return game.gamePublisher.toLowerCase().includes(publisher.toLowerCase());
                }
            });
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
    
}

export default GameController;