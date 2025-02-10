function FilmManager() {
	this.filmler = JSON.parse(localStorage.getItem("filmler")) || [];
	this.updateButton = null;
}

FilmManager.prototype.saveFilms = function () {
	localStorage.setItem("filmler", JSON.stringify(this.filmler));
};

FilmManager.prototype.renderFilms = function () {
	const filmList = document.getElementById("filmList");
	filmList.innerHTML = "";

	this.filmler.forEach((film, index) => {
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

		const filmAdiEl = document.createElement("h5");
		filmAdiEl.className = "card-title";
		filmAdiEl.innerText = film.adi;

		const filmYiliEl = document.createElement("p");
		filmYiliEl.className = "card-text";
		filmYiliEl.innerText = "Yıl: " + film.yili;

		const filmYonetmenEl = document.createElement("p");
		filmYonetmenEl.className = "card-text";
		filmYonetmenEl.innerText = "Yönetmen: " + film.yonetmen;

		const btnGroup = document.createElement("div");
		btnGroup.className = "d-flex gap-2 mt-3";

		const updateBtn = document.createElement("button");
		updateBtn.className = "btn btn-warning btn-sm";
		updateBtn.innerText = "Filmi Güncelle";
		updateBtn.onclick = () => {
			this.prepareUpdateFilm(index);
		};

		const deleteBtn = document.createElement("button");
		deleteBtn.className = "btn btn-danger btn-sm";
		deleteBtn.innerText = "Filmi Sil";
		deleteBtn.onclick = () => {
			this.deleteFilm(index);
		};

		btnGroup.appendChild(updateBtn);
		btnGroup.appendChild(deleteBtn);
		cardBody.appendChild(filmAdiEl);
		cardBody.appendChild(filmYiliEl);
		cardBody.appendChild(filmYonetmenEl);
		cardBody.appendChild(btnGroup);
		card.appendChild(filmImg);
		card.appendChild(cardBody);
		filmCard.appendChild(card);
		filmList.appendChild(filmCard);
	});
};

FilmManager.prototype.addFilmFromInput = function () {
	const filmName = document.getElementById("filmName").value;
	const filmYear = document.getElementById("filmYear").value;
	const filmDirector = document.getElementById("filmDirector").value;
	const filmImage = document.getElementById("filmImage").value;

	if (
		filmName === "" ||
		filmYear === "" ||
		filmDirector === "" ||
		filmImage === ""
	) {
		alert("Lütfen tüm alanları doldurunuz.");
		return;
	}

	const film = new Film(filmName, filmYear, filmDirector, filmImage);
	this.filmler.push(film);
	this.saveFilms();
	this.renderFilms();

	document.getElementById("filmName").value = "";
	document.getElementById("filmYear").value = "";
	document.getElementById("filmDirector").value = "";
	document.getElementById("filmImage").value = "";
};

FilmManager.prototype.prepareUpdateFilm = function (index) {
	const film = this.filmler[index];
	document.getElementById("filmName").value = film.adi;
	document.getElementById("filmYear").value = film.yili;
	document.getElementById("filmDirector").value = film.yonetmen;
	document.getElementById("filmImage").value = film.img;

	const self = this;

	if (!this.updateButton) {
		this.updateButton = document.createElement("button");
		this.updateButton.id = "updateButton";
		this.updateButton.className = "btn btn-success";
		this.updateButton.textContent = "Güncelle";
		document.querySelector(".container").appendChild(this.updateButton);
	}

	this.updateButton.onclick = function () {
		self.filmler[index] = new Film(
			document.getElementById("filmName").value,
			document.getElementById("filmYear").value,
			document.getElementById("filmDirector").value,
			document.getElementById("filmImage").value
		);
		self.saveFilms();
		self.renderFilms();

		if (self.updateButton) {
			self.updateButton.remove();
			self.updateButton = null;
		}

		document.getElementById("filmName").value = "";
		document.getElementById("filmYear").value = "";
		document.getElementById("filmDirector").value = "";
		document.getElementById("filmImage").value = "";
	};
};

FilmManager.prototype.deleteFilm = function (index) {
	this.filmler.splice(index, 1);
	this.saveFilms();
	this.renderFilms();
};
