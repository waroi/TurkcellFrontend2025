class Game {
  constructor(
    id,
    name,
    description,
    category,
    releaseDate,
    image,
    developer,
    steamUrl
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.releaseDate = releaseDate;
    this.image = image;
    this.developer = developer;
    this.steamUrl = steamUrl;
  }
}

export default Game;
