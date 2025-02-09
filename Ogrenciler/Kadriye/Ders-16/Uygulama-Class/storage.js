export default class Storage {
  constructor() {
    this.list = JSON.parse(localStorage.getItem("movie_list"));
    if (this.list == null) {
      localStorage.setItem("movie_list", JSON.stringify([]));
    }
  }
  saveMovie(movie) {
    debugger;
    this.list.push({
      name: movie.name,
      year: movie.year,
      director: movie.director,
      imdb: movie.imdb,
      teaser: movie.teaser,
      genre: movie.genre,
    });
    localStorage.setItem("movie_list", JSON.stringify(this.list));
  }

  updateMovie(index, movie) {
    this.list[index].name = movie.name;
    this.list[index].year = movie.year;
    this.list[index].director = movie.director;
    this.list[index].imdb = movie.imdb;
    this.list[index].teaser = movie.teaser;
    this.list[index].genre = movie.genre;
    localStorage.setItem("movie_list", JSON.stringify(this.list));
  }

  deleteMovie(index) {
    this.list.splice(index, 1);
    localStorage.setItem("movie_list", JSON.stringify(this.list));
  }
  getMovies(){
    return this.list;
  }
}
