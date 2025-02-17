import GameManager from "./GameManager.js";

const gameManager = new GameManager("http://localhost:3000/games");

async function loadGames() {
  const games = await gameManager.fetchGames();
  UI.displayGames(games);
  UI.updateCategoryDropdown(games);
}

loadGames();

export class UI {
  static displayGames(games) {
    const gameList = document.getElementById("game-list");
    gameList.innerHTML = "";

    let rowDiv;

    games.forEach((game, index) => {
      if (index % 4 === 0) {
        rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        gameList.appendChild(rowDiv);
      }

      rowDiv.appendChild(UI.createGameCard(game));
    });
  }

  static async updateGamesList() {
    const games = await gameManager.fetchGames();
    UI.displayGames(games);
  }

  static async updateGame(id) {
    const updatedGameData = {
      name: document.getElementById("editGameName").value,
      description: document.getElementById("editGameDescription").value,
      category: document.getElementById("editGameCategory").value,
      developer: document.getElementById("editGameDeveloper").value,
      releaseDate: document.getElementById("editGameReleaseDate").value,
      image: document.getElementById("editGameImage").src,
    };

    await gameManager.updateGame(id, updatedGameData);
    UI.updateGamesList();
    UI.closeModal("editGameModal");
  }

  static closeModal(modalId) {
    const modalElement = document.getElementById(modalId);
    const modal = new bootstrap.Modal(modalElement);
    modal.hide();
  }

  static createGameCard(game) {
    const gameCard = document.createElement("div");
    gameCard.classList.add("col-lg-3", "col-sm-6", "mb-4");

    const card = document.createElement("div");
    card.classList.add("card", "shadow-sm", "rounded");

    const img = document.createElement("img");
    img.classList.add("card-img-top", "game-image");
    img.src = game.image;
    img.alt = game.name;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center");

    const title = document.createElement("h5");
    title.classList.add("card-title", "fw-bold");
    title.textContent = game.name;

    const description = document.createElement("p");
    description.classList.add("card-text", "text-muted");
    description.textContent = game.description.substring(0, 20) + "...";

    const category = document.createElement("p");
    category.classList.add("card-text", "mb-1");

    const categoryLabel = document.createElement("strong");
    categoryLabel.textContent = "Kategori: ";
    category.appendChild(categoryLabel);
    category.appendChild(document.createTextNode(game.category));

    const developer = document.createElement("p");
    developer.classList.add("card-text", "mb-3");

    const developerLabel = document.createElement("strong");
    developerLabel.textContent = "Yapımcı: ";
    developer.appendChild(developerLabel);
    developer.appendChild(document.createTextNode(game.developer));

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add(
      "d-flex",
      "flex-column",
      "justify-content-between",
      "gap-2",
      "mt-3"
    );

    const editButton = document.createElement("button");
    editButton.classList.add(
      "btn",
      "btn-md",
      "d-flex",
      "align-items-center",
      "rounded-pill",
      "edit-game"
    );
    editButton.setAttribute("data-id", game.id);
    editButton.setAttribute("data-bs-toggle", "modal");
    editButton.setAttribute("data-bs-target", "#editGameModal");

    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-edit", "me-2");
    editButton.appendChild(editIcon);
    editButton.appendChild(document.createTextNode(" Düzenle"));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add(
      "btn",
      "btn-md",
      "d-flex",
      "align-items-center",
      "rounded-pill",
      "delete-game"
    );
    deleteButton.setAttribute("data-id", game.id);

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt", "me-2");
    deleteButton.appendChild(deleteIcon);
    deleteButton.appendChild(document.createTextNode(" Sil"));

    const detailsButton = document.createElement("button");
    detailsButton.classList.add(
      "btn",
      "btn-sm",
      "d-flex",
      "align-items-center",
      "rounded-pill",
      "details-game"
    );

    const detailsIcon = document.createElement("i");
    detailsIcon.classList.add("fas", "fa-info-circle", "me-2");
    detailsButton.appendChild(detailsIcon);
    detailsButton.appendChild(document.createTextNode(" Detaylar"));
    detailsButton.addEventListener("click", () => UI.openGameDetailModal(game));

    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(detailsButton);

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(category);
    cardBody.appendChild(developer);
    cardBody.appendChild(buttonContainer);

    card.appendChild(img);
    card.appendChild(cardBody);
    gameCard.appendChild(card);

    return gameCard;
  }

  static openGameDetailModal(game) {
    document.getElementById("modalGameImage").src = game.image;
    document.getElementById("modalGameName").textContent = game.name;
    document.getElementById("modalGameDescription").textContent =
      game.description;
    document.getElementById("modalGameCategory").textContent = game.category;
    document.getElementById("modalGameReleaseDate").textContent =
      game.releaseDate;
    document.getElementById("modalGameDeveloper").textContent = game.developer;

    const steamUrl = document.getElementById("modalGameSteamUrl");
    steamUrl.href = game.steamUrl;
    steamUrl.textContent = "Steam'de Görüntüle";

    const modal = new bootstrap.Modal(
      document.getElementById("gameDetailModal")
    );
    modal.show();
  }

  static updateCategoryDropdown(games) {
    const categoryDropdown = document.getElementById("category-filter");

    // Mevcut kategorileri temizledim
    while (categoryDropdown.firstChild) {
      categoryDropdown.removeChild(categoryDropdown.firstChild);
    }

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Tüm Kategoriler";
    categoryDropdown.appendChild(allOption);

    const categories = new Set();
    games.forEach((game) => categories.add(game.category));

    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryDropdown.appendChild(option);
    });
  }
}
