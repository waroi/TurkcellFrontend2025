
let films = JSON.parse(localStorage.getItem("films")) || [];



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



function addFilm(event) {
    event.preventDefault();
    let film = {
        ad: document.getElementById("filmAdi").value,
        yonetmen: document.getElementById("yonetmen").value,
        yil: document.getElementById("yil").value,
        tur: document.getElementById("tur").value,
        afis: document.getElementById("afis").value
    };

    loadFilms();
    document.getElementById("film-form").reset();

}





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