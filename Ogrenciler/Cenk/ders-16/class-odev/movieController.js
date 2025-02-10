import local_storage from "./storage.js";
import Movie from "./movie.js";

export default class movieController{
  constructor(){
    this.storage = new local_storage();
    this.movieList = this.storage.getMovies();
    this.editingIndex = null;
  }

addMovie(movie) {
    if (this.editingIndex !== null) {
      this.movieList[this.editingIndex] = movie;
      this.editingIndex = null;
    } else {
      this.movieList.push(movie);
  }
    this.storage.setMovies(this.movieList);
  };
  
 getMovieList() {
    return this.movieList;
  };
  
  deleteMovie(index) {
    this.movieList.splice(index, 1);
    this.storage.setMovies(this.movieList);
  };
  
 editMovie(index) {
    const movie = this.movieList[index];
    this.editingIndex = index;
    document.querySelector("#movieName").value = movie.name;
    document.querySelector("#director").value = movie.director;
    document.querySelector("#year").value = movie.year;
    document.querySelector(".category").value = movie.type;
    document.querySelector("#movie-banner").value = movie.image;
    document.querySelector('#movieName').focus();
  };

}

