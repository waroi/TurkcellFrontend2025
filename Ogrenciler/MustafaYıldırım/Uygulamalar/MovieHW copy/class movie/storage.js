class Storage {
  static getMovies() {
    return JSON.parse(localStorage.getItem("filmArray")) || [];
  }
  static addMovies(movie) {
    let movies = Storage.getMovies();
    movies.push(movie);
    localStorage.setItem("filmArryay", JSON.stringify(movies));
  }
  static removeMovies(movieName) {
    let movies = Storage.getMovies().filter((m) => m.fname !== movieName);
    localStorage.setItem("filmArryay", JSON.stringify(movies));
  }
  static updateMovie(oldName, updateMovie) {
    let movies = Storage.getMovies();
    let index = movies.findIndex((m) => m.name === oldName);
    if (index !== -1) {
      movies[index] = updateMovie;
      localStorage.setItem("filmArryay", JSON.stringify(movies));
    }
  }
}
