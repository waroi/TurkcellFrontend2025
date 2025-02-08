import {storage} from "./storage.js";

export default function movieController() {
  this.movieList = ["abc"];
}

movieController.prototype.addMovie = function (movie) {
  this.movieList.push(movie);
  storage.prototype.setMovies(this.movieList);
};

movieController.prototype.getMovieList = function () {
  return this.movieList;
};

movieController.prototype.deleteMovie = function (movie) {
  this.movieList = this.movieList.filter((m) => m !== movie);
  storage.prototype.setMovies(this.movieList);
};

movieController.prototype.editMovie = function (index) {
  alert("Film editlendi...");
  storage.setMovies(this.movieList);
};

const movie_controller = new movieController();
export { movie_controller };
