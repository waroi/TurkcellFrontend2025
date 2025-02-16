import GameDetailModal from "./GameDetailModal.js";

class GameCard {
  constructor(game, onEdit, onDelete) {
    this.game = game;
    this.onEdit = onEdit;
    this.onDelete = onDelete;
    this.detailModal = new GameDetailModal();
  }

  formatDate(dateString) {
    if (!dateString) return "Bilinmiyor";
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  createElement() {
    const gameCard = document.createElement("div");
    gameCard.classList.add("col-md-4", "mb-4");

    const card = document.createElement("div");
    card.classList.add("game-card");

    card.addEventListener("click", () => {
      this.detailModal.show(this.game);
    });

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("game-card__image");

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = this.game.image;
    img.alt = this.game.name;
    img.onerror = function () {
      this.onerror = null;
      this.src =
        "https://static.vecteezy.com/system/resources/previews/027/879/755/non_2x/console-stick-controller-in-pixel-art-style-vector.jpg";
    };

    const cardBody = document.createElement("div");
    cardBody.classList.add("game-card__content");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = this.game.name;

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = this.game.description;

    const category = document.createElement("p");
    const categoryLabel = document.createElement("strong");
    categoryLabel.textContent = "Kategori: ";
    category.appendChild(categoryLabel);
    category.appendChild(document.createTextNode(this.game.category));

    const releaseDate = document.createElement("p");
    const releaseDateLabel = document.createElement("strong");
    releaseDateLabel.textContent = "Çıkış Tarihi: ";
    releaseDate.appendChild(releaseDateLabel);
    releaseDate.appendChild(
      document.createTextNode(this.formatDate(this.game.releaseDate))
    );

    const developer = document.createElement("p");
    const developerLabel = document.createElement("strong");
    developerLabel.textContent = "Yapımcı: ";
    developer.appendChild(developerLabel);
    developer.appendChild(document.createTextNode(this.game.developer));

    const steamLink = document.createElement("a");
    steamLink.href = this.game.steamUrl;
    steamLink.classList.add("btn", "btn-primary", "me-2");
    steamLink.target = "_blank";
    const steamIcon = document.createElement("i");
    steamIcon.classList.add("fab", "fa-steam");
    steamLink.appendChild(steamIcon);

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-secondary", "me-2");
    editButton.addEventListener("click", () => this.onEdit(this.game));
    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-edit");
    editButton.appendChild(editIcon);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.addEventListener("click", () => this.onDelete(this.game.id));
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash");
    deleteButton.appendChild(deleteIcon);

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(category);
    cardBody.appendChild(releaseDate);
    cardBody.appendChild(developer);
    cardBody.appendChild(steamLink);
    cardBody.appendChild(editButton);
    cardBody.appendChild(deleteButton);

    card.appendChild(img);
    card.appendChild(cardBody);
    gameCard.appendChild(card);

    return gameCard;
  }
}

export default GameCard;
