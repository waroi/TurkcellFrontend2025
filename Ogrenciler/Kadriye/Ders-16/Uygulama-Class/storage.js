class Storage {
  constructor() {
    this.list = JSON.parse(localStorage.getItem("movie_list"));
    if (list == null) {
      localStorage.setItem("movie_list", JSON.stringify([]));
    }
  }
}
Storage.prototype.saveMovie = function (movie) {
  this.list.push({
    name: movie.name,
    year: movie.year,
    director: movie.director,
    imdb: movie.imdb,
    teaser: movie.teaser,
    genre: movie.genre,
  });
  localStorage.setItem("movie_list", JSON.stringify([]));
};
Storage.prototype.updateMovie = function (index, movie) {
  this.list[index].name = movie.name;
  this.list[index].year = movie.year;
  this.list[index].director = movie.director;
  this.list[index].imdb = movie.imdb;
  this.list[index].teaser = movie.teaser;
  this.list[index].genre = movie.genre;
  localStorage.setItem("movie_list", JSON.stringify([]));
};
Storage.prototype.deleteMovie = function (index) {
  this.list.splice(index, 1);
  localStorage.setItem("movie_list", JSON.stringify([]));
};
