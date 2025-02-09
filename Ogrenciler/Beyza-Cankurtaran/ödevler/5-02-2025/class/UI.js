class UI {
    constructor() {
        this.films = JSON.parse(localStorage.getItem("films")) || [];
        this.storage = new Storage(); // Storage sınıfını başlatıyoruz
    }

    // Film kartlarını oluşturma
    createFilmCard(film, index) {
        let colDiv = document.createElement("div");
        colDiv.classList.add("col-md-4", "col-sm-6", "d-flex");

        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "mb-3", "flex-fill");

        let img = document.createElement("img");
        img.src = film.afis;
        img.alt = film.ad;
        img.classList.add("card-img-top");
        img.style.objectFit = "cover";

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let title = document.createElement("h5");
        title.classList.add("card-title", "text-center");
        title.textContent = film.ad;

        let director = document.createElement("p");
        director.classList.add("card-text", "text-center");
        director.textContent = film.yonetmen;

        let year = document.createElement("p");
        year.classList.add("card-text", "text-center");
        year.textContent = film.yil;

        let genre = document.createElement("p");
        genre.classList.add("card-text", "text-center");
        genre.textContent = film.tur;

        let buttonGroup = document.createElement("div");
        buttonGroup.classList.add("btn-group-responsive", "d-flex", "justify-content-flex-start", "mt-3");

        let inceleButton = document.createElement("button");
        inceleButton.classList.add("btn", "btn-success", "text-center");
        inceleButton.textContent = "İncele";
        inceleButton.onclick = () => { this.inceleFilm(index); };

        let editButton = document.createElement("button");
        editButton.classList.add("btn", "btn-warning", "text-center");
        editButton.textContent = "Güncelle";
        editButton.onclick = () => { this.editFilm(index); };

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "text-center");
        deleteButton.textContent = "Sil";
        deleteButton.onclick = () => { this.deleteFilm(index); };

        buttonGroup.appendChild(inceleButton);
        buttonGroup.appendChild(editButton);
        buttonGroup.appendChild(deleteButton);

        cardBody.appendChild(title);
        cardBody.appendChild(director);
        cardBody.appendChild(year);
        cardBody.appendChild(genre);
        cardBody.appendChild(buttonGroup);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        colDiv.appendChild(cardDiv);

        return colDiv;
    }

    // Filmleri filtreleme
    filterFilms() {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const filteredFilms = this.films.filter(film =>
            film.ad.toLowerCase().includes(searchTerm) ||
            film.tur.toLowerCase().includes(searchTerm) ||
            film.yil.toString().includes(searchTerm)
        );
        this.loadFilms(filteredFilms);
    }

    // Yeni film ekleme
    addFilm(event) {
        event.preventDefault();
        let filmObj = {
            ad: document.getElementById("filmAdi").value,
            yonetmen: document.getElementById("yonetmen").value,
            yil: document.getElementById("yil").value,
            tur: document.getElementById("tur").value,
            afis: document.getElementById("afis").value
        };
        this.storage.addFilmStorage(filmObj); // Film ekleme işlemi
        this.loadFilms();
        document.getElementById("film-form").reset();
    }

    // Filmleri yükleme
    loadFilms(films = JSON.parse(localStorage.getItem("films")) || []) {
        const filmListesi = document.getElementById("film-listesi");
        filmListesi.innerHTML = "";
        films.forEach((film, index) => {
            filmListesi.appendChild(this.createFilmCard(film, index));
        });
    }

    // Film düzenleme
    editFilm(index) {
        let films = JSON.parse(localStorage.getItem("films"));
        let film = films[index];
        document.getElementById("inputFilmAdi").value = film.ad;
        document.getElementById("inputYonetmen").value = film.yonetmen;
        document.getElementById("inputYil").value = film.yil;
        document.getElementById("inputTur").value = film.tur;
        document.getElementById("inputAfis").value = film.afis;
        document.getElementById("film-form").scrollIntoView({ behavior: "smooth" });

        // Güncelleme işlemi
        document.getElementById("film-form").onsubmit = (event) => {
            event.preventDefault();
            let updatedFilm = {
                ad: document.getElementById("inputFilmAdi").value,
                yonetmen: document.getElementById("inputYonetmen").value,
                yil: document.getElementById("inputYil").value,
                tur: document.getElementById("inputTur").value,
                afis: document.getElementById("inputAfis").value
            };

            this.storage.updateFilmStorage(index, updatedFilm); // Film güncelleme işlemi
            this.loadFilms();
            document.getElementById("film-form").reset();
        };
    }

    // Film silme
    deleteFilm(index) {
        this.storage.deleteFilmStorage(index); // Film silme işlemi
        this.loadFilms();
    }

    // Filmleri alfabetik sıralama
    sortAlphabetical() {
        const sortValue = document.getElementById("sortSelect").value;
        let sortedFilms = [...this.films];

        switch (sortValue) {
            case "nameAsc":
                sortedFilms.sort((a, b) => a.ad.localeCompare(b.ad));
                break;
            case "nameDesc":
                sortedFilms.sort((a, b) => b.ad.localeCompare(a.ad));
                break;
        }
        this.loadFilms(sortedFilms);
    }

    // Film detayını gösterme
    inceleFilm(index) {
        let films = JSON.parse(localStorage.getItem("films"));
        let film = films[index];

        document.getElementById("modalFilmAfis").src = film.afis;
        document.getElementById("modalFilmAfis").alt = film.ad;
        document.getElementById("modalFilmAdi").textContent = film.ad;
        document.getElementById("modalYonetmen").textContent = film.yonetmen;
        document.getElementById("modalYil").textContent = film.yil;
        document.getElementById("modalTur").textContent = film.tur;

        let filmModal = new bootstrap.Modal(document.getElementById("filmModal"));
        filmModal.show();
    }
}

