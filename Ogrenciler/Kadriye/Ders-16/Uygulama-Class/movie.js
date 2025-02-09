class Movie {
  constructor(name, year, director, imdb, genre, teaser) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.imdb = imdb;
    this.genre = genre;
    this.teaser = teaser;
  }
}

Movie.prototype.getInfos = function () {
  console.log(this.name, this.year, this.genre, "Bilgiler gösteriliyor...");
  return this;
};

Movie.prototype.setInfos = function (
  name,
  year,
  director,
  imdb,
  teaser,
  genre
) {
  this.name = name;
  this.year = year;
  this.director = director;
  this.imdb = imdb;
  this.teaser = teaser;
  this.genre = genre;
};
