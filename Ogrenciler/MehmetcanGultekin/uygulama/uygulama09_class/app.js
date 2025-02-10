import Film from './film/Film.js'; 
import FilmFunctions from './filmFunctions/FilmFunctions.js';
import UI from './ui/UI.js';

class App {
    constructor() {
        this.ui = new UI();
        this.filmFunctions = new FilmFunctions();
        this.initializeEventListeners();
        this.loadInitialFilms();
    }
    
    initializeEventListeners() {
        document.getElementById("film-form")
            .addEventListener("submit", event => this.handleFormSubmit(event));
    }
    
    loadInitialFilms() {
        this.ui.loadFilms(this.filmFunctions.getFilms(), this.filmFunctions);
    }
    
    handleFormSubmit(event) {
        event.preventDefault();
        const filmData = {
            name: document.getElementById("film-name").value,
            director: document.getElementById("film-director").value,
            year: document.getElementById("film-year").value,
            genre: document.getElementById("film-genre").value,
            url: document.getElementById("film-url").value
        };
        const filmButton = document.getElementById("film-button");
        const newFilm = new Film(
            filmData.name,
            filmData.director,
            filmData.year,
            filmData.genre,
            filmData.url
        );
        
        if (filmButton.dataset.editing) {
            this.filmFunctions.updateFilm(filmButton.dataset.editing, newFilm);
        } else {
            this.filmFunctions.addFilm(newFilm);
        }
        
        this.ui.clearFilmList();
        this.ui.loadFilms(this.filmFunctions.getFilms(), this.filmFunctions);
        this.ui.clearForm();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new App();
});
