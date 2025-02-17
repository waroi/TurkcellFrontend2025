export default class ModalView {
  constructor(modalId) {
    this.modal = document.querySelector(modalId);
    this.form = this.modal.querySelector("form");
  }

  getFormData() {
    return {
      id: document.querySelector("#gameForm").dataset.gameId || null,
      name: this.form.querySelector("#gameName").value,
      description: this.form.querySelector("#gameDescription").value,
      category: this.form.querySelector("#gameCategory").value,
      releaseDate: this.form.querySelector("#gameReleaseDate").value,
      imageUrl: this.form.querySelector("#gameImageUrl").value,
      developer: this.form.querySelector("#gameDeveloper").value,
      steamUrl: this.form.querySelector("#gameSteamUrl").value,
    };
  }

  setFormData(game) {
    this.form.querySelector("#gameName").value = game.name || "";
    this.form.querySelector("#gameDescription").value = game.description || "";
    this.form.querySelector("#gameCategory").value = game.category || "";
    this.form.querySelector("#gameReleaseDate").value = game.releaseDate || "";
    this.form.querySelector("#gameImageUrl").value = game.imageUrl || "";
    this.form.querySelector("#gameDeveloper").value = game.developer || "";
    this.form.querySelector("#gameSteamUrl").value = game.steamUrl || "";
  }
}
