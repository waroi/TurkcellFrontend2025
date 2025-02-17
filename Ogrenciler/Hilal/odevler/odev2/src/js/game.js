export class Game {
  constructor(
    name,
    developer,
    release_date,
    description,
    category,
    steam_url,
    game_image,
    price
  ) {
    this.name = name;
    this.developer = developer;
    this.release_date = release_date;
    this.description = description;
    this.category = category;
    this.steam_url = steam_url;
    this.game_image = game_image;
    this.price = price;
  }
}
