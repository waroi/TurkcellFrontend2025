document.addEventListener("DOMContentLoaded", function () {
	const filmManager = new FilmManager();
	filmManager.renderFilms();

	document.getElementById("ekle").addEventListener("click", function () {
		filmManager.addFilmFromInput();
	});
});
