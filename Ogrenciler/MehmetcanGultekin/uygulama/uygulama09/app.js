document.addEventListener("DOMContentLoaded", function () {
  const ui = new UI();
  const filmFunctions = new FilmFunctions();
  ui.loadFilms(filmFunctions.getFilms(), filmFunctions);
  document
    .getElementById("film-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const filmName = document.getElementById("film-name").value;
      const filmDirector = document.getElementById("film-director").value;
      const filmYear = document.getElementById("film-year").value;
      const filmGenre = document.getElementById("film-genre").value;
      const filmUrl = document.getElementById("film-url").value;
      const filmButton = document.getElementById("film-button");
      const newFilm = new Film(
        filmName,
        filmDirector,
        filmYear,
        filmGenre,
        filmUrl
      );
      if (filmButton.dataset.editing) {
        filmFunctions.updateFilm(filmButton.dataset.editing, newFilm);
      } else {
        filmFunctions.addFilm(newFilm);
      }
      ui.clearFilmList();
      ui.loadFilms(filmFunctions.getFilms(), filmFunctions);
      ui.clearForm();
    });
});
