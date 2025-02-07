
document.getElementById("addFilmBtn").onclick = function () {
  const filmName = document.getElementById("filmName").value;
  const filmDirector = document.getElementById("filmDirector").value;
  const filmDate = document.getElementById("filmDate").value;
  const filmPhoto = document.getElementById("filmPhoto").value;
  if (filmName && filmDirector && filmDate && filmPhoto) {
    
    
    let newFilm = {
      fName:filmName, 
      fDirector:filmDirector, 
      fDate:filmDate, 
      fPhoto:filmPhoto
    }
    addFilm(newFilm);
    reload();


    let filmArray = JSON.parse(localStorage.getItem("filmArray")) || [];

    filmArray.push(newFilm);
    localStorage.setItem("filmArray",JSON.stringify(filmArray));
    let getFilm = JSON.parse(localStorage.getItem("filmArray"));

  }
  

};

function upload() {
  let getFilm = JSON.parse(localStorage.getItem("filmArray"));
  getFilm.forEach(film => {
    addFilm(film)
  });
}
upload();

function reload() {
  document.getElementById("filmName").value = "";
  document.getElementById("filmDirector").value = "";
  document.getElementById("filmDate").value = "";
  document.getElementById("filmPhoto").value = "";
}

function addFilm(newFilm) {
  const nameInput = document.getElementById("filmName");
  const directorInput = document.getElementById("filmDirector");
  const dateInput = document.getElementById("filmDate");
  const photoInput = document.getElementById("filmPhoto");
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
      let getFilm = JSON.parse(localStorage.getItem("filmArray"));
      let filmIndex = getFilm.findIndex()
    }
  };

  editBtn.onclick = function () {
    document.getElementById("filmName").value = newFilm.fName;
    document.getElementById("filmDirector").value = newFilm.fDirector;
    document.getElementById("filmDate").value = newFilm.fDate;
    document.getElementById("filmPhoto").value = newFilm.fPhoto;

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
      newFilm.fName = document.getElementById("filmName").value;
      newFilm.fDirector = document.getElementById("filmDirector").value;
      newFilm.fDate = document.getElementById("filmDate").value;
      newFilm.fPhoto = document.getElementById("filmPhoto").value;
      filmAdi.textContent = newFilm.fName;
      yonetmen.textContent = `Yönetmen: ${newFilm.fDirector}`;
      tarih.textContent = `Çıkış Tarihi: ${newFilm.fDate}`;
      filmImage.src = newFilm.fPhoto;
      reload();

      saveBtn.replaceWith(addBtn);
    };
  };


}
