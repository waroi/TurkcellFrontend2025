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
            console.log("GAME WITH ID ID :"+ gameWithID.gameID);
            await RequestModel.update(`http://localhost:3000/games/${gameWithID.id}`, updatedGame);
        } catch (error) {
            console.error("Veri güncellenirken hata oluştu:", error);
        }
    }

    async filterGameByTitleGenrePublisher(title, genre, publisher) {
        try {
            const gamesArray = await RequestModel.get('http://localhost:3000/games');
    
            const filteredGames = gamesArray.filter(game => {
                console.log("Kontrol Edilen Oyun:", game);
    
                const titleMatch = title ? game.gameTitle?.toLowerCase().includes(title.toLowerCase()) : true;
                const genreMatch = genre ? game.gameGenre?.toLowerCase().includes(genre.toLowerCase()) : true;
                const publisherMatch = publisher ? game.gamePublisher?.toLowerCase().includes(publisher.toLowerCase()) : true;
    
                console.log(`Title: ${title}, Genre: ${genre}, Publisher: ${publisher}`);
                console.log(`Eşleşmeler -> Title: ${titleMatch}, Genre: ${genreMatch}, Publisher: ${publisherMatch}`);
    
                return titleMatch && genreMatch && publisherMatch;
            });
    
            if (filteredGames.length === 0) {
                alert("Aradığınız kriterlere uygun oyun bulunamadı!");
                return;
            }
    
            return filteredGames; // Eksik olan return eklendi
        } catch (error) {
            console.error("Veri filtrelenirken hata oluştu:", error);
            return [];
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