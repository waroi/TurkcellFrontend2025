document.addEventListener("DOMContentLoaded", UI.displayMovies);

document.getElementById("addFilmBtn").addEventListener("click", () => {
  const name = document.getElementById("filmName").value;
  const director = document.getElementById("filmDirector").value;
  const date = document.getElementById("filmDate").value;
  const photo = document.getElementById("filmPhoto").value;

  if (name && director && date && photo) {
    const newMovie = new Movie(name, director, date, photo);

    const editingMovie = document.getElementById("addFilmBtn").dataset.editing;
    if (editingMovie) {
      Storage.updateMovie(editingMovie, newMovie);
    } else {
      Storage.addMovie(newMovie);
    }

    UI.clearForm();
    UI.displayMovies();
  }
});
