export default function Storage() {
  this.list = JSON.parse(localStorage.getItem("movie_list"));
  if (this.list == null) {
    localStorage.setItem("movie_list", JSON.stringify([]));
  }
}
Storage.prototype.saveMovie = function (movie) {
  this.list.push({
    name: movie.name,
    year: movie.year,
    director: movie.director,
    imdb: movie.imdb,
    genre: movie.genre,
    teaser: movie.teaser,
  });
  localStorage.setItem("movie_list", JSON.stringify(this.list));
};

Storage.prototype.updateMovie = function (index, movie) {
  this.list[index].name = movie.name;
  this.list[index].year = movie.year;
  this.list[index].director = movie.director;
  this.list[index].imdb = movie.imdb;
  this.list[index].genre = movie.genre;
  this.list[index].teaser = movie.teaser;
  localStorage.setItem("movie_list", JSON.stringify(this.list));
};

Storage.prototype.deleteMovie = function (index) {
  this.list.splice(index, 1);
  localStorage.setItem("movie_list", JSON.stringify(this.list));
};
Storage.prototype.getMovies = function () {
  return JSON.parse(localStorage.getItem("movie_list"));
};
