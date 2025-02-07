document.getElementById("addFilmBtn").onclick = function () {
  const filmName = document.getElementById("filmName").value;
  const filmDirector = document.getElementById("filmDirector").value;
  const filmDate = document.getElementById("filmDate").value;
  const filmPhoto = document.getElementById("filmPhoto").value;
  if (filmName && filmDirector && filmDate && filmPhoto) {
    addFilm(filmName, filmDirector, filmDate, filmPhoto);
    reload();
  }
};

function reload() {
  document.getElementById("filmName").value = "";
  document.getElementById("filmDirector").value = "";
  document.getElementById("filmDate").value = "";
  document.getElementById("filmPhoto").value = "";
}

function addFilm(filmName, filmDirector, filmDate, filmPhoto) {
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
  filmImage.src = filmPhoto;
  filmImage.alt = filmName;
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const filmAdi = document.createElement("h3");
  filmAdi.className = "card-title text-uppercase";
  filmAdi.textContent = filmName;
  const yonetmen = document.createElement("h6");
  yonetmen.textContent = `Yönetmen: ${filmDirector}`;
  const tarih = document.createElement("h6");
  tarih.textContent = `Çıkış Tarihi: ${filmDate}`;
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

  // const ul = document.createElement("ul");
  // ul.className = "list-group";
  // ul.id = "todoList";
  // const li = document.createElement("li");
  // li.className =
  // 	"list-group-item d-flex justify-content-between mt-3 border border-warning";
  // let header = document.createElement("h2");
  // header.className = "flex-shrink-1";
  // header.innerText = todoInput;
  // let desc = document.createElement("div");
  // desc.className =
  // 	"d-flex flex-col justify-content-center align-items-center text-center w-50";
  // desc.innerText = descInput;
  // const numberSpan = document.createElement("span");
  // numberSpan.className = "item-number me-2";
  // const buttonRow = document.createElement("div");
  // buttonRow.className = "d-flex gap-2";

  removeBtn.onclick = function () {
    let confirmDelete = confirm(
      `"${filmName}" filmini silmek istediğinize emin misiniz?`
    );
    if (confirmDelete) filmDiv.remove();
  };

  editBtn.onclick = function () {
    document.getElementById("filmName").value = filmName;
    document.getElementById("filmDirector").value = filmDirector;
    document.getElementById("filmDate").value = filmDate;
    document.getElementById("filmPhoto").value = filmPhoto;

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
      filmName = document.getElementById("filmName").value;
      filmDirector = document.getElementById("filmDirector").value;
      filmDate = document.getElementById("filmDate").value;
      filmPhoto = document.getElementById("filmPhoto").value;
      filmAdi.textContent = filmName;
      yonetmen.textContent = `Yönetmen: ${filmDirector}`;
      tarih.textContent = `Çıkış Tarihi: ${filmDate}`;
      filmImage.src = filmPhoto;
      reload();

      saveBtn.replaceWith(addBtn);
    };
  };
  // const completeBtn = document.createElement("button");
  // completeBtn.className = "btn btn-success btn-sm";
  // completeBtn.innerText = "Tamamla";
  // completeBtn.onclick = function () {
  // 	li.classList.toggle("list-group-item-success");
  // 	header.classList.toggle("text-decoration-line-through");
  // 	desc.classList.toggle("text-decoration-line-through");
  // };

  // const editBtn = document.createElement("button");
  // editBtn.className = "btn btn-secondary btn-sm";
  // editBtn.innerText = "Düzenle";
  // editBtn.onclick = function () {
  // 	if (editBtn.innerText === "Düzenle") {
  // 		const titleInput = document.createElement("input");
  // 		titleInput.type = "text";
  // 		titleInput.className = "form-control mb-2";
  // 		titleInput.value = header.innerText;
  // 		const descInput = document.createElement("input");
  // 		descInput.type = "text";
  // 		descInput.className = "form-control mb-2";
  // 		descInput.value = desc.innerText;
  // 		header.replaceWith(titleInput);
  // 		desc.replaceWith(descInput);
  // 		editBtn.innerText = "Kaydet";
  // 		editBtn.className = "btn btn-primary btn-sm";
  // 		alert("Bu işlemi gerçekleştirmek istediğinize emin misiniz?");
  // 	} else {
  // 		const titleInput = li.querySelector("input[type='text']:nth-of-type(1)");
  // 		const descInput = li.querySelector("input[type='text']:nth-of-type(2)");
  // 		const newHeader = document.createElement("h2");
  // 		newHeader.innerText = titleInput.value;
  // 		const newDesc = document.createElement("div");
  // 		newDesc.innerText = descInput.value;
  // 		titleInput.replaceWith(newHeader);
  // 		descInput.replaceWith(newDesc);
  // 		header = newHeader;
  // 		desc = newDesc;
  // 		editBtn.innerText = "Düzenle";
  // 		editBtn.className = "btn btn-secondary btn-sm";
  // 		alert("Güncellemeler kaydedildi");

  // 	}
  // };
  //document.getElementById("todoList").appendChild(li);
}
