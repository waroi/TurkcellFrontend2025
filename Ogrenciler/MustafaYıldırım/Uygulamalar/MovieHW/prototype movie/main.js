document.addEventListener("DOMContentLoaded", () => {
  UI.displayMovies();

  // Film ekleme veya güncelleme
  document.getElementById("addFilmBtn").addEventListener("click", () => {
    const name = document.getElementById("filmName").value;
    const director = document.getElementById("filmDirector").value;
    const date = document.getElementById("filmDate").value;
    const photo = document.getElementById("filmPhoto").value;

    if (name && director && date && photo) {
      const newMovie = new Movie(name, director, date, photo);

      const editingMovie =
        document.getElementById("addFilmBtn").dataset.editing;
      if (editingMovie) {
        Storage.prototype.clearupdateMovie(editingMovie, newMovie);
      } else {
        Storage.prototype.addMovie(newMovie);
      }

      UI.clearForm();
      UI.displayMovies();
    }
  });

  // Film silme ve düzenleme olaylarını merkezi olarak yönet
  document.querySelector(".film-group").addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
      const movieName = event.target.dataset.name;
      if (confirm(`"${movieName}" filmini silmek istediğinize emin misiniz?`)) {
        Storage.prototype.removeMovie(movieName);
        UI.displayMovies();
      }
    }

    if (event.target.classList.contains("edit-btn")) {
      const movieName = event.target.dataset.name;
      const movie = Storage.prototype
        .getMovies()
        .find((m) => m.name === movieName);
      if (movie) {
        UI.fillForm(movie);
      }
    }
  });
});
