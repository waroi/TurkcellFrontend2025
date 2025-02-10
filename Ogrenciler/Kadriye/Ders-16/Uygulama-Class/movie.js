export default class Movie {
  constructor(name, year, director, imdb, genre, teaser) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.imdb = imdb;
    this.genre = genre;
    this.teaser = teaser;
  }
  getMovie() {
    return this;
  }
  setMovie(name, year, director, imdb, genre, teaser) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.imdb = imdb;
    this.genre = genre;
    this.teaser = teaser;
  }
}
