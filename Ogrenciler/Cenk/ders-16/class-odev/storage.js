export default class local_storage {
  setMovies(movies) {
    localStorage.setItem("movies", JSON.stringify(movies));
  };
  getMovies() {
    return localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];
  };
}

