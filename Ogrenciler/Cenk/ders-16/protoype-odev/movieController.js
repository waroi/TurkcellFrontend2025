import local_storage from "./storage.js";

const storage = new local_storage();

export default function movieController() {
  this.movieList = storage.getMovies();
  console.log(this.movieList);
}

movieController.prototype.addMovie = function (movie) {
  this.movieList.push(movie);
  storage.setMovies(this.movieList);
};

movieController.prototype.getMovieList = function () {
  return this.movieList;
};

movieController.prototype.deleteMovie = function (movie) {
  this.movieList = this.movieList.filter((m) => m !== movie);
  storage.setMovies(this.movieList);
};

movieController.prototype.editMovie = function (index) {
  alert("Film editlendi...");
  storage.setMovies(this.movieList);
};
