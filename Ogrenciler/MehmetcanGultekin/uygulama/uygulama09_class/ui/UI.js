class UI {
    createFilmCard(film, filmFunctions) {
        const filmList = document.getElementById("film-list");

        if (!filmList) return;

        const filmCard = document.createElement("div");
        filmCard.className = "col-md-3 mb-4";
        filmCard.dataset.name = film.name;

        const card = document.createElement("div");
        card.className = "card h-100";

        const img = document.createElement("img");
        img.className = "card-img-top img-fluid";
        img.src = film.url;
        img.alt = film.name;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = film.name;

        const director = document.createElement("p");
        director.className = "card-text";
        director.textContent = `Yönetmen: ${film.director}`;

        const year = document.createElement("p");
        year.className = "card-text";
        year.textContent = `Yıl: ${film.year}`;

        const genre = document.createElement("p");
        genre.className = "card-text";
        genre.textContent = `Tür: ${film.genre}`;

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger btn-sm me-2";
        deleteButton.textContent = "Sil";
        deleteButton.addEventListener('click', () => {
            filmFunctions.deleteFilm(film.name);
            this.clearFilmList();
            this.loadFilms(filmFunctions.getFilms(), filmFunctions);
        });

        const editButton = document.createElement("button");
        editButton.className = "btn btn-warning btn-sm";
        editButton.textContent = "Düzenle";
        editButton.addEventListener('click', () => {
            this.fillFormForEdit(film);
        });

        cardBody.append(title, director, year, genre, deleteButton, editButton);
        card.append(img, cardBody);
        filmCard.appendChild(card);
        filmList.appendChild(filmCard);
    }
    
    clearFilmList() {
        const filmList = document.getElementById("film-list");
        while (filmList.firstChild) {
            filmList.removeChild(filmList.firstChild);
        }
    }
    
    fillFormForEdit(film) {
        document.getElementById("film-name").value = film.name;
        document.getElementById("film-director").value = film.director;
        document.getElementById("film-year").value = film.year;
        document.getElementById("film-genre").value = film.genre;
        document.getElementById("film-url").value = film.url;
        
        const filmButton = document.getElementById("film-button");
        filmButton.textContent = "Güncelle";
        filmButton.dataset.editing = film.name;
    }
    
    clearForm() {
        document.getElementById("film-form").reset();
        document.getElementById("film-button").textContent = "Ekle";
        delete document.getElementById("film-button").dataset.editing;
    }
    
    loadFilms(films, filmFunctions) {
        films.forEach(film => this.createFilmCard(film, filmFunctions));
    }
}

export default UI;
