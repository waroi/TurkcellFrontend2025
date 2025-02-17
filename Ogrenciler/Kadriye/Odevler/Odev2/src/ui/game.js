class Game {
  constructor(
    name,
    genre,
    release,
    img_url,
    company,
    stream_url,
    information,
    id = ""
  ) {
    this.name = name;
    this.genre = genre;
    this.release = release;
    this.img_url = img_url;
    this.company = company;
    this.stream_url = stream_url;
    this.information = information;
    this.id = id;
  }
}
export default Game;
