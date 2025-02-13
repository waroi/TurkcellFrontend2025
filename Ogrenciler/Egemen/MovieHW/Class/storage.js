import { addFilm } from "./class.js";
export class Storage {
  static addFilmToStorage(movie) {
    let filmArray = JSON.parse(localStorage.getItem("filmArray")) || [];
    filmArray.push(movie);
    localStorage.setItem("filmArray", JSON.stringify(filmArray));
  }

  static uploadFilm() {
    let getFilm = JSON.parse(localStorage.getItem("filmArray"));

    if (getFilm != null) {
      getFilm.forEach((film) => {
        addFilm(film);
      });
    }
  }

  static removeFilm(newFilm) {
    let getFilm = JSON.parse(localStorage.getItem("filmArray")) || [];
    let filmIndex = getFilm.findIndex((film) => film.fName === newFilm.fName);
    if (filmIndex !== -1) {
      getFilm.splice(filmIndex, 1);

      localStorage.setItem("filmArray", JSON.stringify(getFilm));
    }
  }

  static getMyFilm() {
    let getFilm = JSON.parse(localStorage.getItem("filmArray")) || [];
    return getFilm;
  }

  static getFilmIndex(eskiFilmAdi) {
    let getFilm = JSON.parse(localStorage.getItem("filmArray")) || [];

    let filmIndex = getFilm.findIndex((film) => film.fName === eskiFilmAdi);
    return filmIndex;
  }
}
