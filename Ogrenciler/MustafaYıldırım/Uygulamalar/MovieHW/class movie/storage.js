class Storage {
  static getMovies() {
    return JSON.parse(localStorage.getItem("filmArray")) || [];
  }

  static addMovie(movie) {
    const movies = Storage.getMovies();
    movies.push(movie);
    localStorage.setItem("filmArray", JSON.stringify(movies));
  }

  static removeMovie(movieName) {
    let movies = Storage.getMovies().filter((m) => m.name !== movieName);
    localStorage.setItem("filmArray", JSON.stringify(movies));
  }

  static updateMovie(oldName, updatedMovie) {
    let movies = Storage.getMovies();
    let index = movies.findIndex((m) => m.name === oldName);
    if (index !== -1) {
      movies[index] = updatedMovie;
      localStorage.setItem("filmArray", JSON.stringify(movies));
    }
  }
}
