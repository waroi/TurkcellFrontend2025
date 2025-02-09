import local_storage from "./storage.js";
import Movie from "./movie.js";

//const storage = new local_storage();
export default function movieController() {
  this.storage = new local_storage();
  this.movieList = this.storage.getMovies();
  // this.movieList = storage.getMovies();
  // console.log(this.movieList);
  this.editingIndex = null;
}

movieController.prototype.addMovie = function (movie) {
  if (this.editingIndex !== null) {
    this.movieList[this.editingIndex] = movie;
    this.editingIndex = null;
  } else {
    this.movieList.push(movie);
}
  this.storage.setMovies(this.movieList);
  //storage.setMovies(this.movieList);
};

movieController.prototype.getMovieList = function () {
  return this.movieList;
};

movieController.prototype.deleteMovie = function (index) {
  //this.movieList = this.movieList.filter((m) => m !== movie);
  //storage.setMovies(this.movieList);
  this.movieList.splice(index, 1);
  this.storage.setMovies(this.movieList);
};

movieController.prototype.editMovie = function (index) {
  alert("Film editlendi...");
  //storage.setMovies(this.movieList);
  const movie = this.movieList[index];
  this.editingIndex = index;
  document.querySelector("#movieName").value = movie.name;
  document.querySelector("#director").value = movie.director;
  document.querySelector("#year").value = movie.year;
  document.querySelector(".category").value = movie.type;
  document.querySelector("#movie-banner").value = movie.image;
  document.querySelector("form").scrollIntoView({ behavior: "smooth" });
};