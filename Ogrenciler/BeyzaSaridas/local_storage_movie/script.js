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
		filmler=[...filmler,film]
	}
	localStorage.setItem("filmler", JSON.stringify(filmler));//yeni film listede
	filmCardEkle();//eklenen film

	document.getElementById("filmName").value = "";
	document.getElementById("filmYear").value = "";
	document.getElementById("filmDirector").value = "";
	document.getElementById("filmImage").value = "";
}
function filmCardEkle() {
	const filmler = JSON.parse(localStorage.getItem("filmler")) || [];

	const filmList = document.getElementById("filmList");
	filmList.innerHTML = "";

	filmler.forEach((film, index) => {
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
//delete,update buton yapısı
		const btnGroup = document.createElement("div");
		btnGroup.className = "d-flex gap-2 mt-3";

		const deleteBtn = document.createElement("button");
		deleteBtn.className = "btn btn-danger btn-sm";
		deleteBtn.innerText = "Filmi Sil";
		deleteBtn.onclick = () => deleteFilm(index);

		const updateBtn = document.createElement("button");
		updateBtn.className = "btn btn-warning btn-sm";
		updateBtn.innerText = "Filmi Güncelle";
		updateBtn.onclick = () => updateFilm(index);


		btnGroup.appendChild(updateBtn);
		btnGroup.appendChild(deleteBtn);
		cardBody.appendChild(filmAdi);
		cardBody.appendChild(filmYili);
		cardBody.appendChild(filmYonetmen);
		cardBody.appendChild(btnGroup);
		card.appendChild(filmImg);
		card.appendChild(cardBody);
		filmCard.appendChild(card);
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

		localStorage.setItem("filmler", JSON.stringify(filmler));//güncel film listesi locale kaydedildi.
		filmCardEkle();
		const existingButton = document.getElementById("updateButton");
		if (existingButton) {
			existingButton.remove();
		}
//girilen inputu temizleriz.
		document.getElementById("filmName").value = "";
		document.getElementById("filmYear").value = "";
		document.getElementById("filmDirector").value = "";
		document.getElementById("filmImage").value = "";
	};
}

// Güncelle 
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
