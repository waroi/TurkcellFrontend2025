const iTitle = document.getElementById("input-title");
const iDesc = document.getElementById("input-description");
const iCategory = document.getElementById("input-cat");
const iDate = document.getElementById("input-date");
const iImg = document.getElementById("input-img");
const iPub = document.getElementById("input-pub");
const iSteam = document.getElementById("input-steam");
const addButton = document.getElementById("addGameBtn");
const addSaveButton = document.getElementById("addSaveGameBtn");
const updateSaveButton = document.getElementById("updateSaveGameBtn");
let selectedGameId;

addButton.addEventListener("click", () => {
  iTitle.value = "";
  iDesc.value = "";
  iCategory.value = "";
  iDate.value = "";
  iImg.value = "";
  iPub.value = "";
  iSteam.value = "";
  updateSaveButton.style.display = "none";
  addSaveButton.style.display = "block";
});
addSaveButton.addEventListener("click", () => {
  const gTitle = iTitle.value;
  const gDesc = iDesc.value;
  const gCat = iCategory.value;
  const gDate = iDate.value;
  const gImg = iImg.value;
  const gPub = iPub.value;
  const gSteam = iSteam.value;

  if (!gTitle || !gDesc || !gCat || !gDate || !gImg || !gPub || !gSteam) {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  const newGame = new Game(
    gTitle,
    gDesc,
    gDate,
    gImg,
    gCat,
    gPub,
    gSteam
  );

  GameAPI.postData("http://localhost:3000/games", newGame)
    .then((response) => {
      console.log("Oyun başarıyla eklendi:", response);
      alert("Oyun başarıyla eklendi!");
      UI.createGameCard(newGame); // UI'ye ekle
    })
    .catch((err) => {
      console.error("Hata oluştu:", err);
      alert("Oyun eklenirken bir hata oluştu.");
    });
});

updateSaveButton.addEventListener("click", () => UI.saveGame(selectedGameId));
class UI {
  static texts = [
    "Gamify ile Oyun Dünyanı Şekillendir!",
    "Oyunlarını Arşivle, Filtrele ve Yönet!",
    "Favori Oyunlarını Listene Ekle!",
  ];

  static textIndex = 0;
  static charIndex = 0;
  static isDeleting = false;
  static speed = 100;
  static deleteSpeed = 50;
  static delayBetweenTexts = 2000;
  static gameCtn = document.getElementById("game-ctn");

  static deleteGame(gameId) {
    GameAPI.delete(`http://localhost:3000/games/${gameId}`).catch((err) => console.error("hata oluştu: " + err))
  }

  static updateGame(game) {
    selectedGameId = game.id;
    iTitle.value = game.title;
    iDesc.value = game.description;
    iCategory.value = game.categories;
    iDate.value = game.releaseDate;
    iImg.value = game.gameImg;
    iPub.value = game.publisher;
    iSteam.value = game.steamUrl;
    updateSaveButton.style.display = "block";
    addSaveButton.style.display = "none";
  };
  static saveGame(gameId) {
    const gTitle = iTitle.value;
    const gDesc = iDesc.value;
    const gCat = iCategory.value;
    const gDate = iDate.value;
    const gImg = iImg.value;
    const gPub = iPub.value;
    const gSteam = iSteam.value;

    // Formdaki alanların boş olup olmadığını kontrol et
    if (!gTitle || !gDesc || !gCat || !gDate || !gImg || !gPub || !gSteam) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    // Güncellemek istediğimiz game objesini oluştur
    const updatedGame = {
      title: gTitle,
      description: gDesc,
      categories: gCat,
      releaseDate: gDate,
      gameImg: gImg,
      publisher: gPub,
      steamUrl: gSteam,
    };

    // API'ye PUT isteği gönder
    GameAPI.put(`http://localhost:3000/games/${gameId}`, updatedGame)
      .then((response) => {
        console.log("Oyun başarıyla güncellendi:", response);
        alert("Oyun başarıyla güncellendi!");
      })
      .catch((err) => {
        console.error("Hata oluştu:", err);
        alert("Oyun güncellenirken bir hata oluştu.");
      });
  };

  static createGameCard(game) {
    let cardWrap = document.createElement("div");
    cardWrap.className = "cardWrap col-lg-4";

    const card = document.createElement("div");
    card.className = "card rounded-5 mb-3";

    const cardContent = document.createElement("div");
    cardContent.className = "row h-100 g-0";

    const cardImgWrap = document.createElement("div");
    cardImgWrap.className = "h-100 col-xl-5 col-4";

    const cardImg = document.createElement("img");
    cardImg.src = game.gameImg;
    cardImg.className = "img-fluid h-100 object-fit-fill rounded-start-5";

    const cardBodyWrap = document.createElement("div");
    cardBodyWrap.className = "col-xl-7 col-8";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body h-100 d-flex flex-column justify-content-between";

    const gameTitle = document.createElement("h5");
    gameTitle.className = "card-title";
    gameTitle.textContent = game.title;

    const gameCategory = document.createElement("span");
    gameCategory.className = "badge rounded-pill mb-2 text-bg-secondary w-50 me-2";
    gameCategory.textContent = game.categories;

    const gameDesc = document.createElement("p");
    gameDesc.className = "card-text";
    const gameDate = document.createElement("p");
    gameDate.className = "card-text opacity-0";
    gameDate.textContent = game.releaseDate;
    const first10Words = game.description.split(' ').slice(0, 10).join(' ') + '...';
    gameDesc.textContent = first10Words;
    const gameProducer = document.createElement("p");
    gameProducer.className = "card-text pub";
    gameProducer.textContent = `${game.publisher}`;

    const buttons = document.createElement("div");
    buttons.className = "btn-group";
    const steamLink = document.createElement("a");
    steamLink.className = "btn btn-secondary rounded-start-pill";
    steamLink.href = game.steamUrl;
    steamLink.target = "_blank";
    const steamIcon = document.createElement("i");
    steamIcon.className = "fa-brands fa-steam";
    const editButton = document.createElement("button");
    editButton.className = "btn btn-secondary";
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#addGame");
    const editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-edit";
    editButton.addEventListener("click", () => UI.updateGame(game));
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-secondary rounded-end-pill";
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";

    cardImgWrap.appendChild(cardImg);
    deleteButton.appendChild(deleteIcon);
    editButton.appendChild(editIcon);
    steamLink.append(steamIcon);
    buttons.append(steamLink, editButton, deleteButton);
    cardBody.append(gameTitle, gameCategory, gameProducer, gameDesc, gameDate, buttons);
    cardBodyWrap.appendChild(cardBody);
    cardContent.append(cardImgWrap, cardBodyWrap);
    card.appendChild(cardContent);
    cardWrap.appendChild(card);

    UI.gameCtn.appendChild(cardWrap);
    deleteButton.addEventListener("click", () => {
      if (confirm("Bu oyunu silmek istediğinizden emin misiniz?")) {
        UI.deleteGame(game.id);
        cardWrap.remove();
      }
    });

  }


  static getOnUI(data) {
    console.log("API'den gelen veri:", data);
    data.forEach((game) => {
      UI.createGameCard(game);
    });
  }
  static typeEffect() {
    const heroText = document.getElementById("hero__text__head");
    if (!heroText) return;

    const currentText = UI.texts[UI.textIndex];

    if (!UI.isDeleting) {
      heroText.textContent = currentText.substring(0, UI.charIndex + 1);
      UI.charIndex++;

      if (UI.charIndex === currentText.length) {
        UI.isDeleting = true;
        setTimeout(UI.typeEffect, UI.delayBetweenTexts);
        return;
      }
    } else {
      heroText.textContent = currentText.substring(0, UI.charIndex - 1);
      UI.charIndex--;

      if (UI.charIndex === 0) {
        UI.isDeleting = false;
        UI.textIndex = (UI.textIndex + 1) % UI.texts.length;
      }
    }

    setTimeout(UI.typeEffect, UI.isDeleting ? UI.deleteSpeed : UI.speed);
  }
}

window.onload = () => UI.typeEffect();

