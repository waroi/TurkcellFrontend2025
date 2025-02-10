class UI {
  static displayMovies() {
    const filmGroup = document.querySelector(".film-group");
    while (filmGroup.firstChild) {
      filmGroup.removeChild(filmGroup.firstChild);
    }
    Storage.getMovies().forEach((movie) => UI.addMovieToList(movie));
  }

  static addMovieToList(movie) {
    const filmGroup = document.querySelector(".film-group");
    const filmDiv = document.createElement("div");
    filmDiv.className = "col";

    const card = document.createElement("div");
    card.className = "card h-100";

    const filmImage = document.createElement("img");
    filmImage.className = "card-img-top h-75";
    filmImage.src = movie.photo;
    filmImage.alt = movie.name;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const filmAdi = document.createElement("h3");
    filmAdi.className = "card-title text-uppercase";
    filmAdi.textContent = movie.name;

    const yonetmen = document.createElement("h6");
    yonetmen.textContent = `Yönetmen: ${movie.director}`;

    const tarih = document.createElement("h6");
    tarih.textContent = `Çıkış Tarihi: ${movie.date}`;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "d-flex gap-2 justify-content-center";

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning edit-btn";
    editBtn.textContent = "Düzenle";

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-danger delete-btn";
    removeBtn.textContent = "Sil";

    buttonDiv.append(editBtn, removeBtn);
    cardBody.append(filmAdi, yonetmen, tarih, buttonDiv);
    card.append(filmImage, cardBody);
    filmDiv.appendChild(card);
    filmGroup.appendChild(filmDiv);

    removeBtn.addEventListener("click", () => {
      if (
        confirm(`\"${movie.name}\" filmini silmek istediğinize emin misiniz?`)
      ) {
        Storage.removeMovie(movie.name);
        UI.displayMovies();
      }
    });

    editBtn.addEventListener("click", () => {
      UI.fillForm(movie);
    });
  }

  static fillForm(movie) {
    document.getElementById("filmName").value = movie.name;
    document.getElementById("filmDirector").value = movie.director;
    document.getElementById("filmDate").value = movie.date;
    document.getElementById("filmPhoto").value = movie.photo;
    document.getElementById("addFilmBtn").textContent = "Kaydet";
    document.getElementById("addFilmBtn").dataset.editing = movie.name;
  }

  static clearForm() {
    document.getElementById("filmName").value = "";
    document.getElementById("filmDirector").value = "";
    document.getElementById("filmDate").value = "";
    document.getElementById("filmPhoto").value = "";
    document.getElementById("addFilmBtn").textContent = "Ekle";
    delete document.getElementById("addFilmBtn").dataset.editing;
  }
}
