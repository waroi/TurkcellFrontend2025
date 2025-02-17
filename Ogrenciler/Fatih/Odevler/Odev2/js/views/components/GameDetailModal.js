class GameDetailModal {
  constructor() {
    this.modal = document.createElement("div");
    this.modal.classList.add("modal", "fade");
    this.modal.id = "gameDetailModal";
    this.modal.setAttribute("tabindex", "-1");
    this.modal.setAttribute("aria-hidden", "true");

    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog", "modal-lg");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content", "custom-modal");

    const modalHeader = document.createElement("div");
    modalHeader.classList.add(
      "modal-header",
      "bg-primary",
      "text-white",
      "border-0"
    );

    this.modalTitle = document.createElement("h5");
    this.modalTitle.classList.add("modal-title", "fw-bold");

    const closeButton = document.createElement("button");
    closeButton.classList.add("btn-close", "btn-close-white");
    closeButton.setAttribute("data-bs-dismiss", "modal");

    modalHeader.append(this.modalTitle, closeButton);

    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body", "p-4");

    this.modalImage = document.createElement("img");
    this.modalImage.classList.add(
      "img-fluid",
      "rounded",
      "w-100",
      "shadow-sm",
      "mb-3"
    );

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-center");

    this.modalDescription = document.createElement("p");
    this.modalDescription.classList.add("text-muted", "mb-3");

    this.modalCategory = this.createDetailItem("Kategori");
    this.modalReleaseDate = this.createDetailItem("Çıkış Tarihi");
    this.modalDeveloper = this.createDetailItem("Yapımcı");

    const modalFooter = document.createElement("div");
    modalFooter.classList.add(
      "modal-footer",
      "border-0",
      "d-flex",
      "justify-content-center"
    );

    this.steamLink = document.createElement("a");
    this.steamLink.classList.add(
      "btn",
      "btn-lg",
      "btn-outline-primary",
      "d-flex",
      "align-items-center",
      "gap-2"
    );
    this.steamLink.target = "_blank";

    const steamIcon = document.createElement("i");
    steamIcon.classList.add("fab", "fa-steam", "fa-lg");

    const steamText = document.createElement("span");
    steamText.textContent = "Steam'de Görüntüle";

    this.steamLink.append(steamIcon, steamText);
    modalFooter.appendChild(this.steamLink);

    modalBody.append(this.modalImage, textContainer);
    textContainer.append(
      this.modalDescription,
      this.modalCategory,
      this.modalReleaseDate,
      this.modalDeveloper
    );

    modalContent.append(modalHeader, modalBody, modalFooter);
    modalDialog.appendChild(modalContent);
    this.modal.appendChild(modalDialog);

    document.body.appendChild(this.modal);
  }

  createDetailItem(label) {
    const item = document.createElement("p");

    const strong = document.createElement("strong");
    strong.textContent = `${label}: `;

    const span = document.createElement("span");

    item.append(strong, span);
    return item;
  }

  show(game) {
    this.modalTitle.textContent = game.name;
    this.modalImage.src =
      game.image ||
      "https://static.vecteezy.com/system/resources/previews/027/879/755/non_2x/console-stick-controller-in-pixel-art-style-vector.jpg";
    this.modalDescription.textContent = game.description;
    this.modalCategory.querySelector("span").textContent = game.category;
    this.modalReleaseDate.querySelector("span").textContent = this.formatDate(
      game.releaseDate
    );
    this.modalDeveloper.querySelector("span").textContent = game.developer;
    this.steamLink.href = game.steamUrl || "#";

    const modalInstance = new bootstrap.Modal(this.modal);
    modalInstance.show();
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
}

export default GameDetailModal;
