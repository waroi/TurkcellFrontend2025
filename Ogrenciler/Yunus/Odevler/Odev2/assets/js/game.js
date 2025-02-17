class Game {
    constructor(id, name, description, category, releaseDate, image, developer, steamUrl, rating, favorite = false) {
        this.id = id
        this.name = name
        this.description = description
        this.category = category
        this.releaseDate = releaseDate
        this.image = image
        this.developer = developer
        this.steamUrl = steamUrl
        this.rating = rating
        this.favorite = favorite
        this.dateAdded = new Date()
    }
}

