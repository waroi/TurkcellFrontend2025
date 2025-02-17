export default class Game {
  constructor(
    id,
    name,
    description,
    category,
    releaseDate,
    imageUrl,
    developer,
    steamUrl
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.releaseDate = releaseDate;
    this.imageUrl = imageUrl;
    this.developer = developer;
    this.steamUrl = steamUrl;
  }
}
