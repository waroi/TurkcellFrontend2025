class FilmStorage {
	static getFilms() {
		return JSON.parse(localStorage.getItem("filmler")) || [];
	}

	static saveFilms(films) {
		localStorage.setItem("filmler", JSON.stringify(films));
	}
}
