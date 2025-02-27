var films = JSON.parse(localStorage.getItem("films")) || [];

var ui = new UI();
var storage = new Storage();

storage.filmJSONtoStorage(); 

var filmListesi = document.getElementById("film-listesi");
var searchInput = document.getElementById("searchInput");
var filmForm = document.getElementById("film-form");
var sortSelect = document.getElementById("sortSelect");

var inputFilmAdi = document.getElementById("filmAdi");
var inputYonetmen = document.getElementById("yonetmen");
var inputYil = document.getElementById("yil");
var inputTur = document.getElementById("tur");
var inputAfis = document.getElementById("afis");

addEventListeners();
function addEventListeners() {
    document.addEventListener("DOMContentLoaded", ui.loadFilms);
    filmForm.addEventListener("submit", ui.addFilm);
    searchInput.addEventListener("input", ui.filterFilms);
    sortSelect.addEventListener("change", ui.sortAlphabetical);
}




