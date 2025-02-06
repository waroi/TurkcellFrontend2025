document.addEventListener("DOMContentLoaded", function () {
  loadFilms();
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
      if (filmButton.dataset.editing) {
        updateFilm(filmButton.dataset.editing, {
          name: filmName,
          director: filmDirector,
          year: filmYear,
          genre: filmGenre,
          url: filmUrl,
        });
        filmButton.textContent = "Ekle";
        delete filmButton.dataset.editing;
      } else {
        const film = {
          name: filmName,
          director: filmDirector,
          year: filmYear,
          genre: filmGenre,
          url: filmUrl,
        };
        saveFilmToLocalStorage(film);
        createFilmCard(film);
      }
      document.getElementById("film-form").reset();
    });
});
function loadFilms() {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  films.forEach(createFilmCard);
}
function saveFilmToLocalStorage(film) {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  films.push(film);
  localStorage.setItem("films", JSON.stringify(films));
}
function updateFilm(oldName, updatedFilm) {
  let films = JSON.parse(localStorage.getItem("films")) || [];
  films = films.map((film) => (film.name === oldName ? updatedFilm : film));
  localStorage.setItem("films", JSON.stringify(films));
  document.getElementById("film-list").innerHTML = "";
  loadFilms();
}
function createFilmCard(film) {
  const filmList = document.getElementById("film-list");
  const filmCard = document.createElement("div");
  filmCard.className = "col-md-3 mb-4";
  filmCard.dataset.name = film.name;
  const cardBody = document.createElement("div");
  cardBody.className = "card h-100";
  const filmImg = document.createElement("img");
  filmImg.className = "card-img-top img-fluid";
  filmImg.src = film.url;
  const cardContent = document.createElement("div");
  cardContent.className = "card-body";
  const filmTitle = document.createElement("h5");
  filmTitle.className = "card-title";
  filmTitle.textContent = film.name;
  const filmDirectorName = document.createElement("p");
  filmDirectorName.className = "card-text";
  filmDirectorName.textContent = `Yönetmen: ${film.director}`;
  const filmYearDate = document.createElement("p");
  filmYearDate.className = "card-text";
  filmYearDate.textContent = `Yıl: ${film.year}`;
  const filmGenreType = document.createElement("p");
  filmGenreType.className = "card-text";
  filmGenreType.textContent = `Tür: ${film.genre}`;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Sil";
  deleteButton.className = "btn btn-danger btn-sm me-2";
  deleteButton.addEventListener("click", function () {
    deleteFilm(film.name);
  });
  const editButton = document.createElement("button");
  editButton.textContent = "Düzenle";
  editButton.className = "btn btn-warning btn-sm";
  editButton.addEventListener("click", function () {
    document.getElementById("film-name").value = film.name;
    document.getElementById("film-director").value = film.director;
    document.getElementById("film-year").value = film.year;
    document.getElementById("film-genre").value = film.genre;
    document.getElementById("film-url").value = film.url;
    const filmButton = document.getElementById("film-button");
    filmButton.textContent = "Güncelle";
    filmButton.dataset.editing = film.name;
  });
  cardContent.appendChild(filmTitle);
  cardContent.appendChild(filmDirectorName);
  cardContent.appendChild(filmYearDate);
  cardContent.appendChild(filmGenreType);
  cardContent.appendChild(deleteButton);
  cardContent.appendChild(editButton);
  cardBody.appendChild(filmImg);
  cardBody.appendChild(cardContent);
  filmCard.appendChild(cardBody);
  filmList.appendChild(filmCard);
}
function deleteFilm(filmName) {
  let films = JSON.parse(localStorage.getItem("films")) || [];
  films = films.filter((film) => film.name !== filmName);
  localStorage.setItem("films", JSON.stringify(films));
  document.getElementById("film-list").innerHTML = "";
  loadFilms();
}
