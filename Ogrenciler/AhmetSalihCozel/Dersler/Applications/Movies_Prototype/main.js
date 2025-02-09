var films = JSON.parse(localStorage.getItem("films")) || [];

var ui = new UI();
var storage = new Storage();

filmJSONtoStorage();
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
                let filmObj = new movieObj(movie.title,movie.cast[0],movie.year,movie.genres[0],movie.thumbnail);
                films.push(filmObj);
            });
            localStorage.setItem("films", JSON.stringify(films));
            console.log("Filmler başarıyla kaydedildi:", films);
        })
        .catch((err) => console.error("Hata:", err));
    }
}


var filmListesi = document.getElementById("film-listesi");
var searchInput = document.getElementById("searchInput");
var filmForm = document.getElementById("film-form");
var sortSelect = document.getElementById("sortSelect");

var inputFilmAdi = document.getElementById("filmAdi")
var inputYonetmen = document.getElementById("yonetmen")
var inputYil = document.getElementById("yil")
var inputTur = document.getElementById("tur")
var inputAfis = document.getElementById("afis")

addEventListeners();
function addEventListeners() {
    document.addEventListener("DOMContentLoaded", ui.loadFilms);
    filmForm.addEventListener("submit", ui.addFilm);
    searchInput.addEventListener("input", ui.filterFilms);
    sortSelect.addEventListener("change", ui.sortAlphabetical)
}






