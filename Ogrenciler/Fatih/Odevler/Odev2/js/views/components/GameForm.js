class GameForm {
  constructor(formElement, onSubmit) {
    this.form = formElement;
    this.onSubmit = onSubmit;

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    const gameId = document.getElementById("game-id").value;
    const gameData = {
      name: document.getElementById("game-name").value,
      description: document.getElementById("game-description").value,
      category: document.getElementById("game-category").value,
      releaseDate: document.getElementById("game-releaseDate").value,
      image: document.getElementById("game-image").value,
      developer: document.getElementById("game-developer").value,
      steamUrl: document.getElementById("game-steamUrl").value,
    };

    this.onSubmit(gameId, gameData);
    this.form.reset();
  }
}

export default GameForm;
