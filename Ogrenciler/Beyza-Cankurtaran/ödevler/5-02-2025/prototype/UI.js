function UI() { }

var ui = new UI();
//var movieObj=new MovieObj();
var storage = new Storage();

UI.prototype.createFilmCard = function (film, index) {

    let colDiv = document.createElement("div");
    colDiv.classList.add("col-md-4", "col-sm-6", "d-flex");

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mb-3", "flex-fill");

    let img = document.createElement("img");
    img.src = film.afis;
    img.alt = film.ad;
    img.classList.add("card-img-top");
    img.style.objectFit = "cover";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let title = document.createElement("h5");
    title.classList.add("card-title", "text-center");
    title.textContent = film.ad;

    let director = document.createElement("p");
    director.classList.add("card-text", "text-center");
    director.textContent = film.yonetmen;

    let year = document.createElement("p");
    year.classList.add("card-text", "text-center");
    year.textContent = film.yil;

    let genre = document.createElement("p");
    genre.classList.add("card-text", "text-center");
    genre.textContent = film.tur;

    let buttonGroup = document.createElement("div");
    buttonGroup.classList.add("btn-group-responsive", "d-flex", "justify-content-flex-start", "mt-3");

    let inceleButton = document.createElement("button");
    inceleButton.classList.add("btn", "btn-success", "text-center");
    inceleButton.textContent = "İncele";
    inceleButton.onclick = function () { ui.inceleFilm(index); };

    let editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-warning", "text-center");
    editButton.textContent = "Güncelle";
    editButton.onclick = function () { ui.editFilm(index); };

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "text-center");
    deleteButton.textContent = "Sil";
    deleteButton.onclick = function () { ui.deleteFilm(index); };

    buttonGroup.appendChild(inceleButton);
    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(deleteButton);

    cardBody.appendChild(title);
    cardBody.appendChild(director);
    cardBody.appendChild(year);
    cardBody.appendChild(genre);
    cardBody.appendChild(buttonGroup);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    colDiv.appendChild(cardDiv);

    return colDiv;
}
//burası çalışmadı!!!
/*UI.prototype.filterFilms = function () {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredFilms = films.filter(film =>
        film.ad.toLowerCase().includes(searchTerm) ||
        film.tur.toLowerCase().includes(searchTerm) ||
        film.yil.toString().includes(searchTerm)
    );
    ui.loadFilms(filteredFilms);
}*/
UI.prototype.renderFilms = function (filmsToRender) {
    const filmListesi = document.getElementById("film-listesi");
    filmListesi.innerHTML = "";
    filmsToRender.forEach((film, index) => {
        filmListesi.appendChild(this.createFilmCard(film, index));
    });
};
UI.prototype.filterFilms = function () {
    const searchTerm = this.value.toLowerCase();
    const filteredFilms = films.filter(film =>
        film.ad.toLowerCase().includes(searchTerm) ||
        film.tur.toLowerCase().includes(searchTerm) ||
        film.yil.toString().includes(searchTerm)
    );
    ui.renderFilms(filteredFilms);
}

//bunu denedik çalışmadı :(
/*UI.prototype.addFilm = function (event) {
    event.preventDefault();
    
    let filmObj = new MovieObj(
        document.getElementById("filmAdi").value,
        document.getElementById("yonetmen").value,
        document.getElementById("yil").value,
        document.getElementById("tur").value,
        document.getElementById("afis").value
    );

    storage.addFilmStorage(filmObj);
    ui.loadFilms();
    document.getElementById("film-form").reset();
};
 */
UI.prototype.addFilm = function (event) {
    event.preventDefault();
    let filmObj = {
        ad: document.getElementById("filmAdi").value,
        yonetmen: document.getElementById("yonetmen").value,
        yil: document.getElementById("yil").value,
        tur: document.getElementById("tur").value,
        afis: document.getElementById("afis").value
    };
    storage.addFilmStorage(filmObj)
    ui.loadFilms();
    document.getElementById("film-form").reset();
}

UI.prototype.loadFilms = function () {
    filmListesi.innerHTML = "";
    let films = JSON.parse(localStorage.getItem("films"));
    films.forEach((film, index) => {
        filmListesi.appendChild(ui.createFilmCard(film, index));
    });
}

UI.prototype.editFilm = function (index) {
    let films = JSON.parse(localStorage.getItem("films"));
    let film = films[index];
    inputFilmAdi.value = film.ad;
    inputYonetmen.value = film.yonetmen;
    inputYil.value = film.yil;
    inputTur.value = film.tur;
    inputAfis.value = film.afis;
    document.getElementById("film-form").scrollIntoView({ behavior: "smooth" });
    ui.deleteFilm(index);
}

UI.prototype.deleteFilm = function (index) {
    storage.deleteFilmStorage(index);
    ui.loadFilms();
}

UI.prototype.sortAlphabetical = function () {
    const sortValue = this.value;
    let sortedFilms = [...films];

    switch (sortValue) {
        case "nameAsc":
            sortedFilms.sort((a, b) => a.ad.localeCompare(b.ad));
            break;
        case "nameDesc":
            sortedFilms.sort((a, b) => b.ad.localeCompare(a.ad));
            break;
    }
    const filmsToRender = sortedFilms;
    const filmListesi = document.getElementById("film-listesi");
    filmListesi.innerHTML = "";
    filmsToRender.forEach((film, index) => {
        filmListesi.appendChild(ui.createFilmCard(film, index));
    });
};

UI.prototype.inceleFilm = function (index) {
    let films = JSON.parse(localStorage.getItem("films"));
    let film = films[index];

    document.getElementById("modalFilmAfis").src = film.afis;
    document.getElementById("modalFilmAfis").alt = film.ad;
    document.getElementById("modalFilmAdi").textContent = film.ad;
    document.getElementById("modalYonetmen").textContent = film.yonetmen;
    document.getElementById("modalYil").textContent = film.yil;
    document.getElementById("modalTur").textContent = film.tur;

    let filmModal = new bootstrap.Modal(document.getElementById("filmModal"));
    filmModal.show();
}