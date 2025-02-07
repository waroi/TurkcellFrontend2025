
let films = JSON.parse(localStorage.getItem("films")) || [];

function filmJSONtoStorage() {
    if (films.length === 0){
        fetch("./movies.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("JSON dosyası yüklenemedi!");
            }
            return res.json();
        })
        .then((movieJSON) => {
            movieJSON.forEach((movie) => {
                let filmObj = {
                    ad: movie.title,
                    yonetmen: movie.cast[0],
                    yil: movie.year,
                    tur: movie.genres[0],
                    afis: movie.thumbnail,
                };

                films.push(filmObj);
            });

            localStorage.setItem("films", JSON.stringify(films));
            console.log("Filmler başarıyla kaydedildi:", films);
        })
        .catch((err) => console.error("Hata:", err));
    }
    
}

filmJSONtoStorage();

//object olarak kullanımı
/*let movie={
    name:"Avatar",
    director:"a b",
    year:"2010",
    genre:"bilim-kurgu",
}
sessionStorage.setItem("user",JSON.stringify(movie));
let getUser=JSON.parse(sessionStorage.getItem("movie"));
console.log(getUser);
console.log(typeof getUser);*/

//bu kod sayfa yüklendiğinde önceki filmlerin yüklenmesini sağlıyormuş
document.addEventListener("DOMContentLoaded", loadFilms);
document.getElementById("film-form").addEventListener("submit", addFilm);
function loadFilms() {
    let films = JSON.parse(localStorage.getItem("films")) || [];
    const filmListesi = document.getElementById("film-listesi");
    filmListesi.innerHTML = "";
    films.forEach((film, index) => {
        filmListesi.appendChild(createFilmCard(film, index));
    });

}

function addFilm(event) {
    event.preventDefault();
    let film = {
        ad: document.getElementById("filmAdi").value,
        yonetmen: document.getElementById("yonetmen").value,
        yil: document.getElementById("yil").value,
        tur: document.getElementById("tur").value,
        afis: document.getElementById("afis").value
    };
    let films = JSON.parse(localStorage.getItem("films"));
    films.unshift(film);
    localStorage.setItem("films", JSON.stringify(films));
    loadFilms();
    document.getElementById("film-form").reset();

}

function createFilmCard(film, index) {

    let colDiv = document.createElement("div");
    colDiv.classList.add("col-md-4", "col-sm-6", "d-flex");

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mb-3", "flex-fill");

    let img = document.createElement("img");
    img.src = film.afis;
    img.alt = film.ad;
    img.classList.add("card-img-top");
    //img.style.maxHeight="500px";
    img.style.objectFit="cover";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let title = document.createElement("h5");
    title.classList.add("card-title","text-center");
    title.textContent = film.ad;

    let director = document.createElement("p");
    director.classList.add("card-text","text-center");
    director.innerHTML = `<strong>Yönetmen:</strong> ${film.yonetmen}`;

    let year = document.createElement("p");
    year.classList.add("card-text","text-center");
    year.innerHTML = `<strong>Yıl:</strong> ${film.yil}`;

    let genre = document.createElement("p");
    genre.classList.add("card-text","text-center");
    genre.innerHTML = `<strong>Tür:</strong> ${film.tur}`;

    let buttonGroup = document.createElement("div");
    buttonGroup.classList.add("btn-group-responsive", "d-flex", "justify-content-flex-start", "mt-3");

    let inceleButton = document.createElement("button");
    inceleButton.classList.add("btn", "btn-success","ms-5","me-5","text-center");
    inceleButton.textContent = "İncele";
    inceleButton.onclick = function() { inceleFilm(index); };

    let editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-warning","text-center","me-5");
    editButton.textContent = "Güncelle";
    editButton.onclick = function() { editFilm(index); };

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "text-center");
    deleteButton.textContent = "Sil";
    deleteButton.onclick = function() { deleteFilm(index); };

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

document.getElementById("searchInput").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredFilms = films.filter(film =>
        film.ad.toLowerCase().includes(searchTerm) ||
        film.tur.toLowerCase().includes(searchTerm) ||
        film.yil.toString().includes(searchTerm)
    );
    renderFilms(filteredFilms);
});

document.getElementById("sortSelect").addEventListener("change", function () {
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

    renderFilms(sortedFilms);
});

function renderFilms(filmsToRender) {
    const filmListesi = document.getElementById("film-listesi");
    filmListesi.innerHTML = "";
    filmsToRender.forEach((film, index) => {
        filmListesi.appendChild(createFilmCard(film, index));
    });
}

function inceleFilm(index) {
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

function editFilm(index) {
    let films = JSON.parse(localStorage.getItem("films"));
    let film = films[index];
    document.getElementById("filmAdi").value = film.ad;
    document.getElementById("yonetmen").value = film.yonetmen;
    document.getElementById("yil").value = film.yil;
    document.getElementById("tur").value = film.tur;
    document.getElementById("afis").value = film.afis;
    document.getElementById("film-form").scrollIntoView({ behavior: "smooth" });
    deleteFilm(index);


}
function deleteFilm(index) {
    let films = JSON.parse(localStorage.getItem("films"));
    films.splice(index, 1);
    localStorage.setItem("films", JSON.stringify(films));
    loadFilms();
}