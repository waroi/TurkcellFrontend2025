export class Game {
    constructor(id, gameName, description, categoryIds, releaseDate, imageUrl, developer, steamUrl, status, myPoint) {
        this.id = id;
        this.gameName = gameName;
        this.description = description;
        this.categoryIds = categoryIds;
        this.releaseDate = releaseDate;
        this.imageUrl = imageUrl;
        this.developer = developer;
        this.steamUrl = steamUrl;
        this.status = status;
        this.myPoint = myPoint;
    }
}