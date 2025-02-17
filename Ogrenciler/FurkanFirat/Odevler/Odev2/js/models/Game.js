class Game {
  constructor(
    id,
    name,
    description,
    category,
    releaseDate,
    images,
    developer,
    steamUrl
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.releaseDate = releaseDate;
    this.images = images;
    this.developer = developer;
    this.steamUrl = steamUrl;
  }
}

export default Game;
