import UI from '../../ui/UI.js';
import filmFunctions from '../../filmFunctions/FilmFunctions.js'; 

document.addEventListener("DOMContentLoaded", function () {
    const filmManager = new filmFunctions();
    const ui = new UI();
    const films = filmManager.getFilms();
    const bilimKurguFilmleri = films.filter(
        film => film.genre.toLowerCase() === "bilim kurgu"
    );
    ui.loadFilms(bilimKurguFilmleri, filmManager);
});
