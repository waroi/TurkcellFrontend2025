class FilmFunctions {
    constructor() {
        this.films = JSON.parse(localStorage.getItem("films")) || [];
    }
    addFilm(film) {
        this.films.push(film);
        this.saveToStorage();
    }
    updateFilm(oldName, updatedFilm) {
        this.films = this.films.map(film => film.name === oldName ? updatedFilm : film);
        this.saveToStorage();
    }
    deleteFilm(filmName) {
        this.films = this.films.filter(film => film.name !== filmName);
        this.saveToStorage();
    }
    saveToStorage() {
        localStorage.setItem("films", JSON.stringify(this.films));
    }
    getFilms() {
        return this.films;
    }
}

    export default FilmFunctions;
