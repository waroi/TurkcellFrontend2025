function UI() {}

UI.prototype.createFilmCard = function (film, filmFunctions) {
  const filmList = document.getElementById("film-list");
  const filmCard = document.createElement("div");
  filmCard.className = "col-md-3 mb-4";
  filmCard.dataset.name = film.name;

  const cardDiv = document.createElement("div");
  cardDiv.className = "card h-100";

  const filmImg = document.createElement("img");
  filmImg.className = "card-img-top img-fluid";
  filmImg.src = film.url;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";

  title.textContent = film.name;
  const director = document.createElement("p");
  
  director.className = "card-text";
  director.textContent = `Yönetmen: ${film.director}`;
  const year = document.createElement("p");
  year.className = "card-text";
  year.textContent = `Yıl: ${film.year}`;
  const genre = document.createElement("p");
  genre.className = "card-text";
  genre.textContent = `Tür: ${film.genre}`;
  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm me-2";
  deleteButton.textContent = "Sil";
  const editButton = document.createElement("button");
  editButton.className = "btn btn-warning btn-sm";
  editButton.textContent = "Düzenle";
  deleteButton.addEventListener("click", () => {
    filmFunctions.deleteFilm(film.name);
    this.clearFilmList();
    this.loadFilms(filmFunctions.getFilms(), filmFunctions);
  });
  editButton.addEventListener("click", () => {
    document.getElementById("film-name").value = film.name;
    document.getElementById("film-director").value = film.director;
    document.getElementById("film-year").value = film.year;
    document.getElementById("film-genre").value = film.genre;
    document.getElementById("film-url").value = film.url;
    const filmButton = document.getElementById("film-button");
    filmButton.textContent = "Güncelle";
    filmButton.dataset.editing = film.name;
  });
  cardBody.appendChild(title);
  cardBody.appendChild(director);
  cardBody.appendChild(year);
  cardBody.appendChild(genre);
  cardBody.appendChild(deleteButton);
  cardBody.appendChild(editButton);
  cardDiv.appendChild(filmImg);
  cardDiv.appendChild(cardBody);
  filmCard.appendChild(cardDiv);
  filmList.appendChild(filmCard);
};
UI.prototype.clearFilmList = function () {
  const filmList = document.getElementById("film-list");
  while (filmList.firstChild) {
    filmList.removeChild(filmList.firstChild);
  }
};
UI.prototype.clearForm = function () {
  document.getElementById("film-form").reset();
  document.getElementById("film-button").textContent = "Ekle";
  delete document.getElementById("film-button").dataset.editing;
};
UI.prototype.loadFilms = function (films, filmFunctions) {
  films.forEach((film) => this.createFilmCard(film, filmFunctions));
};
