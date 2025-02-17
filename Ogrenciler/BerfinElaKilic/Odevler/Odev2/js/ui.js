let gameCard = document.getElementById("gameCard");
let gameName = document.getElementById("name");
let gameImg = document.getElementById("img");
let gameDate = document.getElementById("releaseDate");
let gameCategory = document.getElementById("category");
let gameDescription = document.getElementById("description");
let gameProducer = document.getElementById("producer");
let gameURL = document.getElementById("url");
let saveButton = document.getElementById("saveButton");
let updateButton = document.getElementById("updateButton");
let addGameButton = document.getElementById("addGame");
let gameForm = document.getElementById("gameForm");

addGameButton.addEventListener("click", () => {
  gameName.value = "";
  gameImg.value = "";
  gameDate.value = "";
  gameCategory.value = "";
  gameDescription.value = "";
  gameProducer.value = "";
  gameURL.value = "";
  updateButton.disabled = true;
  saveButton.disabled = false;
});

class UI {
  static createGameCard(game) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add(
      "game-card",
      "card",
      "border-0",
      "col-lg-4",
      "col-md-6",
      "col-12",
      "p-4",
      "g-4"
    );

    const img = document.createElement("img");
    img.src = `${game.img}`;
    img.alt = `${game.name}`;
    img.classList.add("img-fluid", "card-img-top", "mb-3");

    const title = document.createElement("h5");
    title.classList.add("card-title", "fw-bold", "text-truncate", "text-primary");
    title.textContent = `${game.name}`;

    const badge = document.createElement("span");
    badge.className = "card-category badge bg-secondary text-light px-3 py-2 mb-3";
    badge.textContent = `${game.category}`;

    let point = document.createElement("div");

    let pStar = document.createElement("div");
    point.className = "d-flex justify-content-between ";

    const star = document.createElement("img");
    star.className = "me-1";
    star.src =
      "https://img.icons8.com/?size=20&id=7856&format=png&color=f3de2b";

    const number = document.createElement("span");
    number.className = "fw-bold text-secondary";
    number.textContent = randomTwoDigit();

    const date = document.createElement("p");
    date.className = "game-date fw-bold";
    date.textContent = `Çıkış Tarihi: ${game.releaseDate}`;

    const producer = document.createElement("p");
    producer.className = "game-producer  fw-bold";
    producer.textContent = `Yapımcı Firma: ${game.producer}`;

    let buttons = document.createElement("div");
    buttons.className = "d-flex justify-content-between mt-3";

    const editButton = document.createElement("button");
    editButton.className = "btn btn-primary w-45";
    editButton.id = `${game.id}`;
    editButton.textContent = "Güncelle";
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#createGameModal");
    editButton.addEventListener("click", function () {
      apiCall.editGame(game, game.id);
      updateButton.disabled = false;
      saveButton.disabled = true;
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger w-45";
    deleteButton.id = `${game.id}`;
    deleteButton.textContent = "Sil";
    deleteButton.addEventListener("click", function () {
      cardDiv.remove();
      apiCall.deleteGame(game.id);
    });

    const detailButton = document.createElement("button");
    detailButton.className = "btn btn-info text-light w-100 mt-3";
    detailButton.textContent = "Oyun Detay Görüntüle";
    detailButton.setAttribute("data-bs-toggle", "modal");
    detailButton.setAttribute("data-bs-target", "#gameDetailModal");
    detailButton.addEventListener("click", function () {
      UI.showGameDetails(game);
    });

    gameCard.appendChild(cardDiv);
    cardDiv.appendChild(img);
    cardDiv.appendChild(title);
    point.appendChild(badge);
    point.appendChild(pStar);
    pStar.appendChild(star);
    pStar.appendChild(number);
    cardDiv.appendChild(point);
    cardDiv.appendChild(date);
    cardDiv.appendChild(producer);
    cardDiv.appendChild(buttons);
    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);
    cardDiv.appendChild(detailButton);
  }
  static showGameDetails(game) {
    document.getElementById("gameDetailTitle").textContent = game.name;
    document.getElementById("gameDetailImg").src = game.img;
    document.getElementById("gameDetailImg").alt = game.name;
    document.getElementById("gameDetailCategory").textContent = game.category;
    document.getElementById("gameDetailDate").textContent = game.releaseDate;
    document.getElementById("gameDetailProducer").textContent = game.producer;
    document.getElementById("gameDetailDescription").textContent =
      game.description;
    document.getElementById("gameDetailURL").href = game.url;
  }

  static getUI(data) {
    data.forEach((game) => {
      UI.createGameCard(game);
    });
  }
}
