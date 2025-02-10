class FilmManager {
	constructor() {
		this.films = FilmStorage.getFilms();
		this.filmListElement = document.getElementById("filmList");
		this.initEvents();
		this.renderFilms();
	}

	initEvents() {
		document
			.getElementById("ekle")
			.addEventListener("click", () => this.addFilm());
	}

	addFilm() {
		const adi = document.getElementById("filmName").value;
		const yili = document.getElementById("filmYear").value;
		const yonetmen = document.getElementById("filmDirector").value;
		const img = document.getElementById("filmImage").value;

		if ([adi, yili, yonetmen, img].includes("")) {
			alert("Lütfen tüm alanları doldurunuz.");
			return;
		}

		const film = new Film(adi, yili, yonetmen, img);
		this.films.push(film);
		FilmStorage.saveFilms(this.films);
		this.renderFilms();
		this.clearInputs();
	}

	renderFilms() {
		this.filmListElement.innerHTML = "";
		this.films.forEach((film, index) => {
			const filmCard = this.createFilmCard(film, index);
			this.filmListElement.appendChild(filmCard);
		});
	}

	createFilmCard(film, index) {
		const filmCard = document.createElement("div");
		filmCard.className = "col mb-4";

		const card = document.createElement("div");
		card.className = "card h-100";

		const filmImg = document.createElement("img");
		filmImg.className = "card-img-top img-fluid";
		filmImg.src = film.img;
		filmImg.alt = film.adi;
		filmImg.style.height = "200px";
		filmImg.style.objectFit = "cover";

		const cardBody = document.createElement("div");
		cardBody.className = "card-body";

		const filmAdi = document.createElement("h5");
		filmAdi.className = "card-title";
		filmAdi.innerText = film.adi;

		const filmYili = document.createElement("p");
		filmYili.className = "card-text";
		filmYili.innerText = `Yıl: ${film.yili}`;

		const filmYonetmen = document.createElement("p");
		filmYonetmen.className = "card-text";
		filmYonetmen.innerText = `Yönetmen: ${film.yonetmen}`;

		const btnGroup = document.createElement("div");
		btnGroup.className = "d-flex gap-2 mt-3";

		const updateBtn = document.createElement("button");
		updateBtn.className = "btn btn-warning btn-sm";
		updateBtn.innerText = "Filmi Güncelle";
		updateBtn.onclick = () => this.populateFormForUpdate(index);

		const deleteBtn = document.createElement("button");
		deleteBtn.className = "btn btn-danger btn-sm";
		deleteBtn.innerText = "Filmi Sil";
		deleteBtn.onclick = () => this.deleteFilm(index);

		btnGroup.appendChild(updateBtn);
		btnGroup.appendChild(deleteBtn);

		cardBody.appendChild(filmAdi);
		cardBody.appendChild(filmYili);
		cardBody.appendChild(filmYonetmen);
		cardBody.appendChild(btnGroup);
		card.appendChild(filmImg);
		card.appendChild(cardBody);
		filmCard.appendChild(card);

		return filmCard;
	}

	clearInputs() {
		document.getElementById("filmName").value = "";
		document.getElementById("filmYear").value = "";
		document.getElementById("filmDirector").value = "";
		document.getElementById("filmImage").value = "";
	}

	deleteFilm(index) {
		this.films.splice(index, 1);
		FilmStorage.saveFilms(this.films);
		this.renderFilms();
	}

	populateFormForUpdate(index) {
		const film = this.films[index];
		document.getElementById("filmName").value = film.adi;
		document.getElementById("filmYear").value = film.yili;
		document.getElementById("filmDirector").value = film.yonetmen;
		document.getElementById("filmImage").value = film.img;

		let updateButton = document.getElementById("updateButton");
		if (!updateButton) {
			updateButton = document.createElement("button");
			updateButton.id = "updateButton";
			updateButton.className = "btn btn-success";
			updateButton.textContent = "Güncelle";
			document.querySelector(".container").appendChild(updateButton);
		}
		updateButton.onclick = () => this.updateFilm(index);
	}

	updateFilm(index) {
		this.films[index] = new Film(
			document.getElementById("filmName").value,
			document.getElementById("filmYear").value,
			document.getElementById("filmDirector").value,
			document.getElementById("filmImage").value
		);
		FilmStorage.saveFilms(this.films);
		this.renderFilms();

		const updateButton = document.getElementById("updateButton");
		if (updateButton) updateButton.remove();

		this.clearInputs();
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const filmManager = new FilmManager();
});
