function Storage() {}

// Film listesini getir
Storage.getMovies = function () {
  return JSON.parse(localStorage.getItem("filmArray")) || [];
};

// Yeni film ekle
Storage.addMovie = function (movie) {
  const movies = Storage.getMovies();
  movies.push(movie);
  localStorage.setItem("filmArray", JSON.stringify(movies));
};

// Film sil
Storage.removeMovie = function (movieName) {
  let movies = Storage.getMovies().filter((m) => m.name !== movieName);
  localStorage.setItem("filmArray", JSON.stringify(movies));
};

// Film güncelle
Storage.updateMovie = function (oldName, updatedMovie) {
  let movies = Storage.getMovies();
  let index = movies.findIndex((m) => m.name === oldName);
  if (index !== -1) {
    movies[index] = updatedMovie;
    localStorage.setItem("filmArray", JSON.stringify(movies));
  }
};
