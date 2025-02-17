export class Game {
  constructor(
    name,
    developer,
    release_date,
    description,
    category,
    steam_url,
    image_url,
    price
  ) {
    this.name = name;
    this.developer = developer;
    this.release_date = release_date;
    this.description = description;
    this.category = category;
    this.steam_url = steam_url;
    this.image_url = image_url;
    this.price = price;
  }
}
