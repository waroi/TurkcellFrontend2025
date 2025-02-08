import {storage} from "./storage.js";

export default function movieController() {
  this.movieList = storage.getMovies();
}

movieController.prototype.addMovie = function (movie) {
  this.movieList.push(movie);
  storage.setMovies(this.movieList);
};

movieController.prototype.deleteMovie = function (movie) {
  this.movieList = this.movieList.filter((m) => m !== movie);
  storage.setMovies(this.movieList);
};

movieController.prototype.editMovie = function (index) {
  alert("Film editlendi...");
  storage.setMovies(this.movieList);
};
