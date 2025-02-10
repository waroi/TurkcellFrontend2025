class App {
    constructor() {
        this.films = JSON.parse(localStorage.getItem("films")) || [];
        this.ui = new UI();
        this.storage = new Storage();

        this.filmListesi = document.getElementById("film-listesi");
        this.searchInput = document.getElementById("searchInput");
        this.filmForm = document.getElementById("film-form");
        this.sortSelect = document.getElementById("sortSelect");

        this.inputFilmAdi = document.getElementById("filmAdi");
        this.inputYonetmen = document.getElementById("yonetmen");
        this.inputYil = document.getElementById("yil");
        this.inputTur = document.getElementById("tur");
        this.inputAfis = document.getElementById("afis");

        this.init();
    }

    init() {
        this.storage.filmJSONToStorage(); // JSON'dan verileri yükle
        this.addEventListeners();
    }

    addEventListeners() {
        document.addEventListener("DOMContentLoaded", () => this.ui.loadFilms());
        this.filmForm.addEventListener("submit", (event) => this.ui.addFilm(event));
        this.searchInput.addEventListener("input", () => this.ui.filterFilms());
        this.sortSelect.addEventListener("change", () => this.ui.sortAlphabetical());
    }
}
new App();
