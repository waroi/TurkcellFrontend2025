export default class GameListView {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
  }

  renderGames(games) {
    this.container.innerHTML = "";
    games.forEach((game) => {
      const gameCard = this.createGameCard(game);
      this.container.appendChild(gameCard);
    });
  }

  createGameCard(game) {
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "game-card",
      "col-12",
      "col-md-3",
      "p-0",
      "shadow"
    );

    const img = document.createElement("img");
    img.src = game.imageUrl;
    img.alt = game.name;
    img.classList.add("card-img-top", "img-fluid", "object-fit-cover");
    img.addEventListener("error", () => (img.src = "./assets/logo.png"));

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = game.name;

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = game.description;

    const category = document.createElement("p");
    category.classList.add("small", "text-muted");
    category.textContent = `${game.category} | ${game.releaseDate}`;

    const steamLink = document.createElement("a");
    steamLink.href = game.steamUrl;
    steamLink.target = "_blank";
    steamLink.classList.add("btn", "btn-sm", "btn-primary");
    steamLink.textContent = " Steam";

    const steamIcon = document.createElement("i");
    steamIcon.classList.add("fas", "fa-external-link-alt");
    steamLink.prepend(steamIcon);

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "btn-sm", "btn-warning", "edit-game");
    editBtn.dataset.id = game.id;
    editBtn.textContent = " Düzenle";

    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-edit");
    editBtn.prepend(editIcon);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-sm", "btn-danger", "delete-game");
    deleteBtn.dataset.id = game.id;
    deleteBtn.textContent = " Sil";

    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash");
    deleteBtn.prepend(deleteIcon);

    cardBody.append(
      title,
      description,
      category,
      steamLink,
      editBtn,
      deleteBtn
    );
    card.append(img, cardBody);

    return card;
  }
}
