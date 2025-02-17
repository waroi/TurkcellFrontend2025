class Game {
    constructor(id, name, category, year, producer, imageUrl, description) {
      this.id = id || null;
      this.name = name;
      this.category = category;
      this.year = year;
      this.producer = producer;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  
    static fromData(data) {
      return new Game(
        data.id,
        data.name,
        data.category,
        data.year,
        data.producer,
        data.imageUrl,
        data.description
      );
    }
  }
  