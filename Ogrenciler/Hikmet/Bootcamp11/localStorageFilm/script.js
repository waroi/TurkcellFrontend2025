function addFilm() {
	const filmAdi = document.getElementById("filmName").value;
	const filmYili = document.getElementById("filmYear").value;
	const filmYonetmen = document.getElementById("filmDirector").value;
	const filmImg = document.getElementById("filmImage").value;

	const film = {
		adi: filmAdi,
		yili: filmYili,
		yonetmen: filmYonetmen,
		img: filmImg,
	};

	let filmler = JSON.parse(localStorage.getItem("filmler")) || [];
	filmler.push(film);
	localStorage.setItem("filmler", JSON.stringify(filmler));

	console.log(filmler);

	filmCardEkle();
	document.getElementById("filmName").value = "";
	document.getElementById("filmYear").value = "";
	document.getElementById("filmDirector").value = "";
	document.getElementById("filmImage").value = "";
}

function filmCardEkle() {
	const filmler = JSON.parse(localStorage.getItem("filmler")) || [];

	const filmList = document.getElementById("filmList");
	filmList.innerHTML = "";

	filmler.map((film, index) => {
		const filmCard = document.createElement("div");
		filmCard.className = "card mb-2";

		const cardBody = document.createElement("div");
		cardBody.className = "card-body";

		const filmAdi = document.createElement("h5");
		filmAdi.className = "card-title";
		filmAdi.innerText = film.adi;

		const filmYili = document.createElement("p");
		filmYili.className = "card-text";
		filmYili.innerText = film.yili;

		const filmYonetmen = document.createElement("p");
		filmYonetmen.className = "card-text";
		filmYonetmen.innerText = film.yonetmen;

		const filmImg = document.createElement("img");
		filmImg.alt = film.adi;
		filmImg.style.width = "100px";
		filmImg.style.height = "100px";
		filmImg.src = film.img;
		filmImg.className = "card-img-top img-fluid";

		const filmSilmeButton = document.createElement("a");
		filmSilmeButton.className = "btn btn-danger";
		filmSilmeButton.text = "Filmi Sil";
		filmSilmeButton.id = "sil";
		filmSilmeButton.onclick = () => deleteFilm(index);

		const filmGüncelle = document.createElement("a");
		filmGüncelle.className = "btn btn-warning";
		filmGüncelle.text = "Filmi Güncelle";
		filmGüncelle.id = "guncelle";
		filmGüncelle.onclick = () => updateFilm(index);

		cardBody.appendChild(filmImg);
		cardBody.appendChild(filmAdi);
		cardBody.appendChild(filmYili);
		cardBody.appendChild(filmYonetmen);
		cardBody.appendChild(filmGüncelle);
		cardBody.appendChild(filmSilmeButton);
		filmCard.appendChild(cardBody);
		filmList.appendChild(filmCard);
	});
}

function updateFilm(index) {
	let filmler = JSON.parse(localStorage.getItem("filmler")) || [];
	const film = filmler[index];
	console.log(film);
	document.getElementById("filmName").value = film.adi;
	document.getElementById("filmDirector").value = film.yonetmen;
	document.getElementById("filmImage").value = film.img;
	document.getElementById("filmYear").value = film.yili;

	filmler.splice(index, 1);
	localStorage.setItem("filmler", JSON.stringify(filmler));
	console.log(filmler);
	filmCardEkle();
}

function deleteFilm(index) {
	let filmler = JSON.parse(localStorage.getItem("filmler")) || [];
	filmler.splice(index, 1);
	localStorage.setItem("filmler", JSON.stringify(filmler));
	console.log(filmler);

	filmCardEkle();
}
