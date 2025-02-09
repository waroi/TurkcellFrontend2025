export class Storage {
  constructor(key) {
    this.key = key;
  }
  getStorage() {
    return JSON.parse(localStorage.getItem(this.key)) || [];
  }
  setStorage(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
  addToStorage(movie) {
    const movies = this.getStorage();
    movies.push(movie);
    this.setStorage(movies);
  }
  editStorage(updatedMovie) {
    const movies = this.getStorage();
    const index = movies.findIndex((film) => film.id === updatedMovie.id);

    if (index !== -1) {
      movies[index] = updatedMovie;
      this.setStorage(movies);
    } else {
      console.error("Film bulunamadı.");
    }
  }
  static clear() {
    localStorage.clear();
  }
}
