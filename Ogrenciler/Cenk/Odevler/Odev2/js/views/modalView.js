export default class ModalView {
  constructor(modalId) {
    this.modal = document.querySelector(modalId);
    this.form = this.modal.querySelector("form");
  }

  getFormData() {
    return {
      name: this.form.name.value,
      description: this.form.description.value,
      category: this.form.category.value,
      releaseDate: this.form.releaseDate.value,
      imageUrl: this.form.imageUrl.value,
      developer: this.form.developer.value,
      steamUrl: this.form.steamUrl.value,
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
