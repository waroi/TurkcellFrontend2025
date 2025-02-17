import {
  addEditGameItem,
  searchGames,
  deleteGameItem,
  preEditGame,
  filterByCategory,
  sortByReleaseDate,
  sortAZ,
  sortZA,
} from "./script.js";

//selectors from html

export const getModalElements = () => {
  const modalContainer = document.querySelector(".modal-container");
  const modal = document.querySelector("#gameProductModal");
  const modalTitle = document.querySelector("#gameProductModalLabel");
  const modalForm = document.querySelector("#gameForm");
  const gameName = document.querySelector("#gameName");
  const developer = document.querySelector("#developer");
  const description = document.querySelector("#gameDescription");
  const release = document.querySelector("#release");
  const price = document.querySelector("#price");
  const steamUrl = document.querySelector("#gameSteam");
  const imageUrl = document.querySelector("#imageUrl");
  const category = document.querySelector("#gameCategory");
  const footerClose = document.querySelector(".modal-footer");
  return {
    modal,
    modalTitle,
    modalForm,
    gameName,
    developer,
    description,
    release,
    price,
    steamUrl,
    imageUrl,
    category,
  };
};

//components
const createCustomGameCard = (data) => {
  const card = document.createElement("div");
  card.classList.add(
    "card",
    "w-100",
    "h-100",
    "bg-black",
    "bg-opacity-10",
    "text-light",
    "border-0",
    "position-relative"
  );

  const overlay = document.createElement("div");
  overlay.classList.add("card-img-overlay");

  const image = document.createElement("img");
  image.classList.add("card-img-top", "flex-grow-1");
  image.setAttribute("alt", "game-image");
  image.src = data.game_image;

  const cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "flex-column",
    "justify-content-end",
    "position-relative"
  );

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("d-flex", "gap-1", "align-items-center");

  const editIcon = document.createElement("button");
  editIcon.classList.add(
    "btn",
    "edit-icon",
    "bg-transparent",
    "btn-primary",
    "position-relative",
    "rounded-pill"
  );

  editIcon.textContent = "Edit";
  editIcon.addEventListener("click", () => {
    openModal();
    preEditGame(data);
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "btn",
    "edit-icon",
    "bg-transparent",
    "btn-outline-primary",
    "position-relative",
    "ms-1",
    "rounded-pill"
  );
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    deleteGameItem(data.id);
  });
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = data.name;

  const cardSubtitle = document.createElement("p");
  cardSubtitle.classList.add("card-subtitle");
  cardSubtitle.textContent = data.release_date;

  const gameDeveloper = document.createElement("p");
  gameDeveloper.classList.add("card-text", "d-inline-block", "third");
  gameDeveloper.textContent = data.developer;

  const cardText = document.createElement("div");
  cardText.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  const price = document.createElement("p");
  price.textContent = data.price;
  price.classList.add("card-text", "m-0");

  card.appendChild(image);
  card.appendChild(overlay);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardSubtitle);
  cardBody.appendChild(gameDeveloper);
  cardBody.appendChild(cardText);
  cardText.appendChild(price);
  cardText.appendChild(buttonContainer);
  buttonContainer.appendChild(editIcon);
  buttonContainer.appendChild(deleteButton);

  card.appendChild(cardBody);

  return card;
};

const createInputCol = (labelName, inputId, inputType, value, options = []) => {
  const InputColItem = document.createElement("div");
  const label = document.createElement("label");
  label.className = "form-label";
  label.textContent = labelName;
  label.setAttribute("for", inputId);

  let input;

  if (inputType === "select") {
    const inputGroup = document.createElement("div");
    inputGroup.className = "input-group";

    input = document.createElement("select");
    input.className = "form-select";
    input.id = inputId;
    input.setAttribute("aria-label", "Select Game Category");

    options.forEach((optionItem) => {
      const option = document.createElement("option");
      option.value = optionItem;
      option.textContent = optionItem;
      if (optionItem === value) {
        option.selected = true;
      }
      input.appendChild(option);
    });

    inputGroup.appendChild(input);
    InputColItem.appendChild(inputGroup);
  } else {
    input = document.createElement("input");
    input.classList.add("form-control");
    input.type = inputType;
    input.id = inputId;
    input.value = value || "";
  }
  input.classList.add("d-block", "text-light");
  InputColItem.appendChild(label);
  InputColItem.appendChild(input);

  return InputColItem;
};

const createForm = (gameData = {}, gameCategories) => {
  const form = document.createElement("form");
  form.id = "gameForm";

  const row1 = document.createElement("div");
  row1.className = "row";
  const col1 = createInputCol("Game Name", "gameName", "text", gameData.name);
  const col2 = createInputCol(
    "Game Developer",
    "developer",
    "text",
    gameData.developer
  );
  col1.classList.add("col-md-6", "mb-2");
  col2.classList.add("col-md-6", "mb-2");
  row1.appendChild(col1);
  row1.appendChild(col2);

  const descriptionField = document.createElement("div");
  descriptionField.className = "mb-3";
  const labelDescription = document.createElement("label");
  labelDescription.className = "form-label";
  labelDescription.textContent = "Description";
  const textarea = document.createElement("textarea");
  textarea.className = "form-control bg-transparent text-light";
  textarea.id = "gameDescription";
  textarea.rows = 3;
  textarea.value = gameData.description || "";
  descriptionField.appendChild(labelDescription);
  descriptionField.appendChild(textarea);

  const row2 = document.createElement("div");
  row2.className = "row";
  const col3 = createInputCol(
    "Release Date",
    "release",
    "date",
    gameData.release_date
  );
  const col4 = createInputCol(
    "Game Price",
    "price",
    "text",
    gameData.price || "Free To Play"
  );
  col3.classList.add("col-md-6", "mb-2");
  col4.classList.add("col-md-6", "mb-2");

  row2.appendChild(col3);
  row2.appendChild(col4);
  const row3 = document.createElement("div");
  row3.className = "row";
  const col5 = createInputCol(
    "Game Steam Url",
    "gameSteam",
    "text",
    gameData.steam_url
  );
  const col6 = createInputCol(
    "Game Image Url",
    "imageUrl",
    "text",
    gameData.game_image || "https://picsum.photos/200/200"
  );
  col5.classList.add("col-md-6", "mb-2");
  col6.classList.add("col-md-6", "mb-2");
  row3.appendChild(col5);
  row3.appendChild(col6);

  const row4 = createInputCol(
    "Game Category",
    "gameCategory",
    "select",
    gameData.category,
    gameCategories
  );

  form.appendChild(row1);
  form.appendChild(row2);
  form.appendChild(row3);
  form.appendChild(row4);
  form.appendChild(descriptionField);

  return form;
};

export const createGameModal = (gameData = {}, gameCategories) => {
  const modalContainer = document.querySelector(".modal-container");
  const modal = document.createElement("div");
  modal.classList.add("modal", "fade", "bg-dark", "bg-opacity-10");
  modal.id = "gameProductModal";
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("aria-labelledby", "gameProductModalLabel");
  modal.setAttribute("aria-hidden", "true");

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog");
  modal.appendChild(modalDialog);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalDialog.appendChild(modalContent);

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  modalContent.appendChild(modalHeader);

  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal-title", "fs-4", "fw-bold", "text-primary");
  modalTitle.id = "gameProductModalLabel";
  modalTitle.textContent = gameData.name || "Add new game";
  modalHeader.appendChild(modalTitle);

  const closeButton = document.createElement("button");
  closeButton.classList.add("btn-close", "text-light");
  closeButton.setAttribute("type", "button");
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");
  modalHeader.appendChild(closeButton);

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalContent.appendChild(modalBody);

  const form = createForm({}, gameCategories);
  modalBody.appendChild(form);

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");
  form.appendChild(modalFooter);

  const closeFooterButton = document.createElement("button");
  closeFooterButton.classList.add("btn", "btn-secondary");
  closeFooterButton.setAttribute("data-bs-dismiss", "modal");
  closeFooterButton.textContent = "Close";
  modalFooter.appendChild(closeFooterButton);

  const submitButton = document.createElement("button");
  submitButton.classList.add("btn", "btn-primary");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Save Game";
  modalFooter.appendChild(submitButton);

  modalContainer.appendChild(modal);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addEditGameItem();
  });
  getModalElements();
};

export const createFilteredUi = (filteredGames, category) => {
  if (filteredGames && filteredGames !== null) {
    createPopularGameList(filteredGames, category);
  }
};

const createCategoryButtons = (gameCategories) => {
  const categoryContainer = document.querySelector(".category-buttons");
  categoryContainer.innerHTML = "";

  gameCategories.map((category) => {
    const button = document.createElement("div");
    button.classList.add(
      "btn",
      "text-light",
      "category-button",
      "py-3",
      "my-2",
      "text-center",
      "btn-link"
    );
    button.textContent = category;
    button.addEventListener("click", () => filterByCategory(category));
    categoryContainer.appendChild(button);
  });
};

const createPopularGameList = (gameData, category = "All") => {
  console.log(category);
  const popularGameList = document.querySelector(".popular-games");
  const heading = document.querySelector("#category-name");
  console.log(heading);
  popularGameList.innerHTML = "";
  heading.innerHTML = category || "All";
  console.log(popularGameList);
  gameData.map((gameItem) => {
    const card = createCustomGameCard(gameItem);
    const col = document.createElement("div");
    col.className = "col-sm-12 col-md-4 col-lg-3 mb-3";

    popularGameList.appendChild(col);
    col.appendChild(card);
  });
};

export const createUi = (gameData, gameCategories) => {
  console.log(gameCategories);
  createPopularGameList(gameData);
  createCategoryButtons(gameCategories);

  //Other Uı actions below
  document.getElementById("sortAZ").addEventListener("click", () => {
    const sortedGames = sortAZ(gameData);
    createFilteredUi(sortedGames);
    document.getElementById("category-name").textContent = "Games Sorted A-Z";
  });

  document.getElementById("sortZA").addEventListener("click", () => {
    const sortedGames = sortZA(gameData);
    createFilteredUi(sortedGames);
    document.getElementById("category-name").textContent = "Games Sorted Z-A";
  });

  document.getElementById("sortReleaseDate").addEventListener("click", () => {
    const sortedGames = sortByReleaseDate(gameData);
    createFilteredUi(sortedGames);
    document.getElementById("category-name").textContent =
      "Games Sorted by Release Date";
  });

  document.getElementById("search-input").addEventListener("input", (e) => {
    const inputValue = e.target.value;
    if (inputValue) {
      searchGames(inputValue);
    } else {
      createFilteredUi(gameData);
    }
  });
};

function openModal() {
  const myModal = new bootstrap.Modal(
    document.getElementById("gameProductModal")
  );
  myModal.show();
}
