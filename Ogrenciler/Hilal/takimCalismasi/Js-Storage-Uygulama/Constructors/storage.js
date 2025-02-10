export function Storage(key) {
  this.key = key;
}

Storage.prototype.getStorage = function () {
  return JSON.parse(localStorage.getItem(this.key)) || [];
};

Storage.prototype.setStorage = function (data) {
  localStorage.setItem(this.key, JSON.stringify(data));
};

Storage.prototype.addToStorage = function (movie) {
  const movies = this.getStorage();
  movies.push(movie);
  this.setStorage(movies);
};
Storage.prototype.editStorage = function (updatedMovie) {
  const movies = this.getStorage();
  const index = movies.findIndex((film) => film.id === updatedMovie.id);

  if (index !== -1) {
    movies[index] = updatedMovie;
    this.setStorage(movies);
  } else {
    console.error("Film bulunamadı.");
  }
};
