class Game {
  constructor(
    id,
    name,
    category,
    price,
    developer,
    releaseDate,
    description,
    URL,
    imageURL
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.developer = developer;
    this.releaseDate = releaseDate;
    this.description = description;
    this.URL = URL;
    this.imageURL = imageURL;
  }

  assignCard(card) {
    this.card = card;
  }

  toJSONString() {
    return JSON.stringify({
      name: this.name,
      category: this.category,
      price: this.price,
      developer: this.developer,
      releaseDate: this.releaseDate,
      description: this.description,
      URL: this.URL,
      imageURL: this.imageURL,
    });
  }
}
