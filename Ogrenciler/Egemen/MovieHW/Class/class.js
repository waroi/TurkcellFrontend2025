import { Movie } from "./movie.js";
import { Storage } from "./storage.js";

document.getElementById("addFilmBtn").onclick = function () {
    const filmName = document.getElementById("filmName").value;
    const filmDirector = document.getElementById("filmDirector").value;
    const filmDate = document.getElementById("filmDate").value;
    const filmPhoto = document.getElementById("filmPhoto").value;
    if (filmName && filmDirector && filmDate && filmPhoto) {
        const movie = new Movie(filmName, filmDirector, filmDate, filmPhoto);
        addFilm(movie);
        reload();


        Storage.addFilmToStorage(movie);
    }
};


Storage.uploadFilm();

function reload() {
    document.getElementById("filmName").value = "";
    document.getElementById("filmDirector").value = "";
    document.getElementById("filmDate").value = "";
    document.getElementById("filmPhoto").value = "";
}

export function addFilm(newFilm) {
    const filmDiv = document.createElement("div");
    filmDiv.className = "col";
    const card = document.createElement("div");
    card.className = "card h-100";
    const filmImage = document.createElement("img");
    filmImage.className = "card-img-top h-75";
    filmImage.src = newFilm.fPhoto;
    filmImage.alt = newFilm.fName;
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const filmAdi = document.createElement("h3");
    filmAdi.className = "card-title text-uppercase";
    filmAdi.textContent = newFilm.fName;
    const yonetmen = document.createElement("h6");
    yonetmen.textContent = `Yönetmen: ${newFilm.fDirector}`;
    const tarih = document.createElement("h6");
    tarih.textContent = `Çıkış Tarihi: ${newFilm.fDate}`;
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "d-flex gap-2 justify-content-center";
    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning w-50";
    editBtn.type = "button";
    editBtn.textContent = "Düzenle";
    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-danger w-50";
    removeBtn.type = "button";
    removeBtn.textContent = "Sil";
    buttonDiv.append(editBtn, removeBtn);
    cardBody.append(filmAdi, yonetmen, tarih, buttonDiv);
    card.append(filmImage, cardBody);
    filmDiv.appendChild(card);
    const filmGroup = document.querySelector(".film-group");
    filmGroup.appendChild(filmDiv);

    removeBtn.onclick = function () {
        let confirmDelete = confirm(
            `"${newFilm.fName}" filmini silmek istediğinize emin misiniz?`
        );

        if (confirmDelete) {
            filmDiv.remove();

            Storage.removeFilm(newFilm);
        }
    };

    editBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });

        let getFilm = Storage.getMyFilm();
        console.log(getFilm);
        let eskiFilmAdi = newFilm.fName;
        console.log(eskiFilmAdi);
        let filmIndex = Storage.getFilmIndex(eskiFilmAdi);

        document.getElementById("filmName").value = getFilm[filmIndex].fName;
        document.getElementById("filmDirector").value =
            getFilm[filmIndex].fDirector;
        document.getElementById("filmDate").value = getFilm[filmIndex].fDate;
        document.getElementById("filmPhoto").value = getFilm[filmIndex].fPhoto;

        const addBtn = document.getElementById("addFilmBtn");
        const butonGroup = document.getElementById("butonGroup");
        let saveBtn = butonGroup.querySelector(".save-btn");

        if (!saveBtn) {
            saveBtn = document.createElement("button");
            saveBtn.className = "btn btn-success w-100 save-btn";
            saveBtn.textContent = "Kaydet";
            butonGroup.appendChild(saveBtn);
            addBtn.replaceWith(saveBtn);
        }

        saveBtn.onclick = function () {


            let getFilm = Storage.getMyFilm();


            let filmIndex = Storage.getFilmIndex(eskiFilmAdi);


            if (filmIndex !== -1) {
                let updatedFilm = {
                    fName: document.getElementById("filmName").value,
                    fDirector: document.getElementById("filmDirector").value,
                    fDate: document.getElementById("filmDate").value,
                    fPhoto: document.getElementById("filmPhoto").value,
                };
                filmImage.alt = updatedFilm.fName;
                console.log(getFilm[filmIndex]);
                getFilm[filmIndex] = updatedFilm;

                //eskiFilmAdi = updatedFilm.fName;

                localStorage.setItem("filmArray", JSON.stringify(getFilm));

                filmAdi.textContent = updatedFilm.fName;
                yonetmen.textContent = `Yönetmen: ${updatedFilm.fDirector}`;
                tarih.textContent = `Çıkış Tarihi: ${updatedFilm.fDate}`;
                filmImage.src = updatedFilm.fPhoto;
            }
            reload();

            saveBtn.replaceWith(addBtn);
        };
    };
}
