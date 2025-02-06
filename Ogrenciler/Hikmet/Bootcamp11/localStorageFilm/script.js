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
	if (
		filmAdi === "" ||
		filmYili === "" ||
		filmYonetmen === "" ||
		filmImg === ""
	) {
		alert("Lütfen tüm alanları doldurunuz.");
		return;
	} else {
		filmler.push(film);
	}
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
		filmCard.className = "card mb-2 h-100";

		const cardBody = document.createElement("div");
		cardBody.className = "card-body";

		const filmAdi = document.createElement("h5");
		filmAdi.className = "card-title";
		filmAdi.innerText = "Film Adı: " + film.adi;

		const filmYili = document.createElement("p");
		filmYili.className = "card-text";
		filmYili.innerText = "Yıl: " + film.yili;

		const filmYonetmen = document.createElement("p");
		filmYonetmen.className = "card-text";
		filmYonetmen.innerText = "Yönetmen: " + film.yonetmen;

		const filmImg = document.createElement("img");
		filmImg.alt = film.adi;
		filmImg.style.width = "200px";
		filmImg.style.height = "200px";
		filmImg.src = film.img;
		filmImg.className = "card-img-top";
		filmImg.style.objectFit = "cover";

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

	document.getElementById("filmName").value = film.adi;
	document.getElementById("filmDirector").value = film.yonetmen;
	document.getElementById("filmImage").value = film.img;
	document.getElementById("filmYear").value = film.yili;

	const updateButton =
		document.getElementById("updateButton") || createUpdateButton();

	updateButton.onclick = () => {
		filmler[index] = {
			adi: document.getElementById("filmName").value,
			yonetmen: document.getElementById("filmDirector").value,
			img: document.getElementById("filmImage").value,
			yili: document.getElementById("filmYear").value,
		};

		localStorage.setItem("filmler", JSON.stringify(filmler));

		filmCardEkle();

		const existingButton = document.getElementById("updateButton");
		if (existingButton) {
			existingButton.remove();
		}

		// Input alanlarını temizle
		document.getElementById("filmName").value = "";
		document.getElementById("filmYear").value = "";
		document.getElementById("filmDirector").value = "";
		document.getElementById("filmImage").value = "";
	};
}

// Güncelle butonu oluşturma yardımcı fonksiyonu
function createUpdateButton() {
	const button = document.createElement("button");
	button.id = "updateButton";
	button.className = "btn btn-success";
	button.textContent = "Güncelle";
	document.querySelector(".container").appendChild(button);
	return button;
}

function deleteFilm(index) {
	let filmler = JSON.parse(localStorage.getItem("filmler")) || [];
	filmler.splice(index, 1);
	localStorage.setItem("filmler", JSON.stringify(filmler));
	console.log(filmler);
	filmCardEkle();
}

document.addEventListener("DOMContentLoaded", () => {
	filmCardEkle();
});
