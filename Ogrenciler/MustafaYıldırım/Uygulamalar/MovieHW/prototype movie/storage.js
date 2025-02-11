function Storage() {}

// Film listesini getir
Storage.prototype.getMovies = function () {
  return JSON.parse(localStorage.getItem("filmArray")) || [];
};

// Yeni film ekle
Storage.prototype.addMovie = function (movie) {
  const movies = Storage.prototype.getMovies();
  movies.push(movie);
  localStorage.setItem("filmArray", JSON.stringify(movies));
};

// Film sil
Storage.prototype.removeMovie = function (movieName) {
  let movies = Storage.prototype
    .getMovies()
    .filter((m) => m.name !== movieName);
  localStorage.setItem("filmArray", JSON.stringify(movies));
};

// Film güncelle
Storage.prototype.updateMovie = function (oldName, updatedMovie) {
  let movies = Storage.prototype.getMovies();
  let index = movies.findIndex((m) => m.name === oldName);
  if (index !== -1) {
    movies[index] = updatedMovie;
    localStorage.setItem("filmArray", JSON.stringify(movies));
  }
};
