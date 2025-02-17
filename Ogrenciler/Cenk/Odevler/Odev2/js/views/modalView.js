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
    this.form.name.value = game.name;
    this.form.description.value = game.description;
    this.form.category.value = game.category;
    this.form.releaseDate.value = game.releaseDate;
    this.form.imageUrl.value = game.imageUrl;
    this.form.developer.value = game.developer;
    this.form.steamUrl.value = game.steamUrl;
  }
}
