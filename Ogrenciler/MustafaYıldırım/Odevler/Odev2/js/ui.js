import { getGames } from "./api.js";
import { openEditGameModal, DeleteGame, ToggleFavorite } from "./app.js";

// Oyun kartı oluşturma fonksiyonu
export function createGameCard(game) {
  const gameCard = document.createElement("div");
  gameCard.classList.add("justify-content-center", "d-flex");

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = game.photo;
  img.classList.add("card-img-top");
  img.alt = game.name;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add(
    "title",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  const title = document.createElement("h5");
  title.classList.add("card-title");
  const titleText = document.createElement("strong");
  titleText.textContent = game.name;
  title.appendChild(titleText);

  const favoriteBtn = document.createElement("button");
  favoriteBtn.classList.add("btn");
  favoriteBtn.onclick = () => ToggleFavorite(game.id, !game.isFavorite);

  const heartIcon = document.createElement("i");
  heartIcon.classList.add(
    game.isFavorite ? "fa-solid" : "fa-regular",
    "fa-heart"
  );

  favoriteBtn.appendChild(heartIcon);
  titleDiv.append(title, favoriteBtn);

  const category = document.createElement("p");
  category.classList.add("card-text");
  const categoryLabel = document.createElement("strong");
  categoryLabel.textContent = "Kategori: ";

  category.textContent = game.category;
  category.prepend(categoryLabel);

  const detailBtn = document.createElement("button");
  detailBtn.classList.add("btn", "btn-secondary", "detay", "text-white");
  detailBtn.textContent = "Detayları Görün..";
  detailBtn.onclick = () => viewGameDetails(game.id);

  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");

  const dropdownToggle = document.createElement("button");
  dropdownToggle.classList.add(
    "btn",
    "btn-secondary",
    "dropdown-toggle",
    "text-white"
  );
  dropdownToggle.setAttribute("type", "button");
  dropdownToggle.setAttribute("data-bs-toggle", "dropdown");

  const ucnokta = document.createElement("i");
  ucnokta.classList.add("fa-solid", "fa-ellipsis-vertical");
  dropdownToggle.appendChild(ucnokta);

  const dropdownMenu = document.createElement("ul");
  dropdownMenu.classList.add("dropdown-menu", "dropdown-menu-end");

  const editItem = document.createElement("li");
  const editLink = document.createElement("a");
  editLink.classList.add("dropdown-item");
  editLink.textContent = "Düzenle";
  editLink.onclick = () => openEditGameModal(game.id);
  editItem.appendChild(editLink);

  const deleteItem = document.createElement("li");
  const deleteLink = document.createElement("a");
  deleteLink.classList.add("dropdown-item", "text-danger");
  deleteLink.textContent = "Sil";
  deleteLink.onclick = () => DeleteGame(game.id);
  deleteItem.appendChild(deleteLink);

  dropdownMenu.append(editItem, deleteItem);
  dropdown.append(dropdownToggle, dropdownMenu);

  cardBody.append(titleDiv, category, detailBtn, dropdown);
  card.append(img, cardBody);
  gameCard.appendChild(card);

  return gameCard;
}

//Detail Modalı ekleme
export async function viewGameDetails(gameId) {
  try {
    const game = (await getGames()).find((gameDet) => gameDet.id === gameId);
    if (!game) {
      console.error("Game not found");
      return;
    }

    const modalContainer = document.getElementById("gameDetailModal");
    while (modalContainer.firstChild) {
      modalContainer.removeChild(modalContainer.firstChild);
    }

    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog", "modal-lg");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content", "text-white");

    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    const modalTitle = document.createElement("h5");
    modalTitle.classList.add("modal-title");
    modalTitle.id = "gameDetailModalLabel";
    modalTitle.textContent = "Oyun Detayları";

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.classList.add("btn-close");
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    const row = document.createElement("div");
    row.classList.add("row");

    const leftCol = document.createElement("div");
    leftCol.classList.add("col-md-4");

    const gameImage = document.createElement("img");
    gameImage.id = "gameImage";
    gameImage.src = game.photo;
    gameImage.alt = "Game Image";
    gameImage.classList.add("img-fluid");

    leftCol.appendChild(gameImage);

    const rightCol = document.createElement("div");
    rightCol.classList.add("col-md-8");

    const headerRow = createGameHeader(game);
    const gameDescription = document.createElement("p");
    gameDescription.id = "gameDescription";
    gameDescription.textContent = game.content;

    const gameCategory = createGameCategory(game);
    const gameReleaseDate = createGameReleaseDate(game);
    const gameDeveloper = createGameDeveloper(game);

    const gameSteamLink = document.createElement("p");
    const steamLink = document.createElement("a");
    steamLink.id = "gameSteamLink";
    steamLink.href = game.steam;
    steamLink.target = "_blank";
    steamLink.textContent = "Steam Sayfası";
    gameSteamLink.appendChild(steamLink);

    const steamButton = document.createElement("button");
    steamButton.id = "steamButton";
    steamButton.classList.add("btn", "btn-secondary", "text-white");
    steamButton.textContent = "Steam Sayfasına Git";
    steamButton.onclick = () => window.open(game.steam, "_blank");

    rightCol.appendChild(headerRow);
    rightCol.appendChild(gameDescription);
    rightCol.appendChild(gameCategory);
    rightCol.appendChild(gameReleaseDate);
    rightCol.appendChild(gameDeveloper);
    rightCol.appendChild(gameSteamLink);
    rightCol.appendChild(steamButton);

    row.appendChild(leftCol);
    row.appendChild(rightCol);

    modalBody.appendChild(row);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);

    modalDialog.appendChild(modalContent);

    modalContainer.appendChild(modalDialog);

    const gameDetailModal = new bootstrap.Modal(modalContainer);
    gameDetailModal.show();
  } catch (error) {
    console.error("Error while viewing game details:", error);
  }
}
function createGameDeveloper(game) {
  const gameDeveloper = document.createElement("p");

  const developerStrong = document.createElement("strong");
  developerStrong.textContent = "Yapımcı Firma: ";

  const developerSpan = document.createElement("span");
  developerSpan.id = "gameDeveloper";
  developerSpan.textContent = game.developer;

  gameDeveloper.appendChild(developerStrong);
  gameDeveloper.appendChild(developerSpan);

  return gameDeveloper;
}
function createGameHeader(game) {
  const headerRow = document.createElement("div");
  headerRow.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "mb-3",
    "mt-1"
  );

  const gameInfo = document.createElement("div");

  const gameTitle = document.createElement("h4");
  gameTitle.id = "gameTitle";
  gameTitle.textContent = game.name;

  gameInfo.appendChild(gameTitle);

  const favoriteAndDropdown = document.createElement("div");
  favoriteAndDropdown.classList.add("d-flex", "align-items-center");

  const favoriteBtn = document.createElement("button");
  favoriteBtn.classList.add("btn");
  favoriteBtn.onclick = () => ToggleFavorite(game.id, !game.isFavorite);

  const heartIcon = document.createElement("i");
  heartIcon.classList.add(
    game.isFavorite ? "fa-solid" : "fa-regular",
    "fa-heart"
  );

  favoriteBtn.appendChild(heartIcon);

  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");

  const dropdownButton = document.createElement("button");
  dropdownButton.classList.add(
    "btn",
    "btn-secondary",
    "dropdown-toggle",
    "text-white"
  );
  dropdownButton.type = "button";
  dropdownButton.id = "dropdownMenuButton";
  dropdownButton.setAttribute("data-bs-toggle", "dropdown");
  dropdownButton.setAttribute("aria-expanded", "false");

  const ucnokta = document.createElement("i");
  ucnokta.classList.add("fa", "fa-ellipsis-v");

  dropdownButton.appendChild(ucnokta);

  const dropdownMenu = document.createElement("ul");
  dropdownMenu.classList.add("dropdown-menu");
  dropdownMenu.setAttribute("aria-labelledby", "dropdownMenuButton");

  const editItem = document.createElement("li");
  const editLink = document.createElement("a");
  editLink.classList.add("dropdown-item");
  editLink.onclick = () => openEditGameModal(game.id);
  editLink.textContent = "Düzenle";
  editItem.appendChild(editLink);

  const deleteItem = document.createElement("li");
  const deleteLink = document.createElement("a");
  deleteLink.classList.add("dropdown-item");
  deleteLink.onclick = () => DeleteGame(game.id);
  deleteLink.textContent = "Sil";
  deleteItem.appendChild(deleteLink);

  dropdownMenu.appendChild(editItem);
  dropdownMenu.appendChild(deleteItem);

  dropdown.appendChild(dropdownButton);
  dropdown.appendChild(dropdownMenu);

  favoriteAndDropdown.appendChild(favoriteBtn);
  favoriteAndDropdown.appendChild(dropdown);

  headerRow.appendChild(gameInfo);
  headerRow.appendChild(favoriteAndDropdown);

  return headerRow;
}
function createGameReleaseDate(game) {
  const gameReleaseDate = document.createElement("p");

  const releaseDateStrong = document.createElement("strong");
  releaseDateStrong.textContent = "Çıkış Tarihi: ";

  const releaseDateSpan = document.createElement("span");
  releaseDateSpan.id = "gameReleaseDate";
  releaseDateSpan.textContent = game.date;

  gameReleaseDate.appendChild(releaseDateStrong);
  gameReleaseDate.appendChild(releaseDateSpan);

  return gameReleaseDate;
}
function createGameCategory(game) {
  const gameCategory = document.createElement("p");

  const categoryStrong = document.createElement("strong");
  categoryStrong.textContent = "Kategori: ";

  const categorySpan = document.createElement("span");
  categorySpan.id = "gameCategory";
  categorySpan.textContent = game.category;

  gameCategory.appendChild(categoryStrong);
  gameCategory.appendChild(categorySpan);

  return gameCategory;
}
