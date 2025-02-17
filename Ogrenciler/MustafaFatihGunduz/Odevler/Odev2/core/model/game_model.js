class GameModel {
    constructor(gameID,gameTitle, gameDescription, gameGenre, gameReleaseDate, gamePhotoURL, gamePublisher, gameSteamURL) {
        this.gameID = gameID;
        this.gameTitle = gameTitle;
        this.gameDescription = gameDescription;
        this.gameGenre = gameGenre;
        this.gameReleaseDate = gameReleaseDate;
        this.gamePhotoURL = gamePhotoURL;
        this.gamePublisher = gamePublisher;
        this.gameSteamURL = gameSteamURL;
    }
}

export default GameModel;