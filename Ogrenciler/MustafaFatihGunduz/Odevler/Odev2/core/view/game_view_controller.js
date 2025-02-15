import GameModel from "../model/game_model.js";
import GameController from "../controller/game_controller.js";

class GameViewController {
  constructor() {
    this.gameContainer = document.querySelector(".game-container");
    this.search = document.querySelector("#search");
    this.card = document.createElement("div");
    this.card.classList.add("card");
    this.cardTitle = document.querySelector("#gameTitle");
    this.cardDescription = document.querySelector("#gameDescription");
    this.cardGenre = document.querySelector("#gameGenre");
    this.cardYear = document.querySelector("#gameReleaseDate");
    this.cardImage = document.querySelector("#gamePhotoURL");
    this.cardPublisher = document.querySelector("#gamePublisher");
    this.cardURL = document.querySelector("#gameSteamURL");
    this.saveButton = document.querySelector("#saveButton");
    this.modal = new bootstrap.Modal(document.getElementById("addGameBackdrop"));
    this.editCard = null;
    this.gameController = new GameController();
  } 
  async getAllGames() {
    try {
      const games = await this.gameController.getAllGames();
      for (let index = 0; index < games.length; index++) {
            const game = games[index];
            const card = this.addCard(game);
            this.gameContainer.append(card);
      }
    } catch (err) {
      console.error("DBController içinde getAllGames alınırken hata oluştu:", err);
    }
  }
  async addGame() {
    try {
      const game = this.getGameData();
      if (!this.validateForm(game)) return;
      const card = this.addCard(game);
      this.gameContainer.append(card);
      await this.gameController.addNewGame(game);
      this.clearForm();
    } catch (err) {
      console.error("DBController içinde addGame eklenirken hata oluştu:", err);
    }
}
  addCard(game) {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";
    const cardFront = this.addCardFront(game);
    const cardBack = this.addCardBack(game);
    cardInner.append(cardFront, cardBack);
    card.append(cardInner);
    return card;
  }
  addCardFront(game) {
    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = game.gamePhotoURL;
    cardFront.append(cardImage);
    return cardFront;
  }
  addCardBack(game) {
    const cardBack = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h4");
    const cardDescription = document.createElement("p");
    const cardGenre = document.createElement("p");
    const cardYear = document.createElement("p");
    const cardPublisher = document.createElement("p");
    const cardURL = document.createElement("a");
    const buttons = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    cardBack.classList.add("card-back");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    cardDescription.classList.add("card-description");
    cardGenre.classList.add("card-genre");
    cardYear.classList.add("card-year");
    cardPublisher.classList.add("card-publisher");
    cardURL.classList.add("card-url");
    buttons.classList.add("buttons");
    editButton.classList.add("btn", "edit-button");
    deleteButton.classList.add("btn", "delete-button");
    cardTitle.textContent = "Oyun Adı: " + game.gameTitle;
    cardDescription.textContent = "Oyun Açıklaması: " + game.gameDescription;
    cardGenre.textContent = "Oyun Türü: " + game.gameGenre;
    cardYear.textContent = "Yayın Tarihi: " + game.gameReleaseDate;
    cardPublisher.textContent = "Yayıncı: " + game.gamePublisher;
    cardURL.textContent = "Steam URL: " + game.gameSteamURL;
    editButton.textContent = "Düzenle";
    editButton.addEventListener("click", () => {
      this.setEdit(this.card,game);
      this.modal.show();
    });
    deleteButton.textContent = "Sil";
    deleteButton.addEventListener("click", () => {
      this.deleteGame(game);
    });
    buttons.append(editButton, deleteButton);
    cardBody.append(
      cardTitle,
      cardDescription,
      cardGenre,
      cardYear,
      cardPublisher,
      cardURL,
      buttons
    );
    cardBack.append(cardBody);
    return cardBack;
  }
  async deleteGame(game) {
   await this.gameController.deleteGame(game.gameID);
  }
  getGameData() {
    const gameID = this.editCard ? this.editCard.dataset.gameId : document.querySelectorAll(".card").length + 1;
    return new GameModel(
        gameID,
        this.cardTitle.value.trim(),
        this.cardDescription.value.trim(),
        this.cardGenre.value.trim(),
        this.cardYear.value.trim(),
        this.cardImage.value.trim(),
        this.cardPublisher.value.trim(),
        this.cardURL.value.trim()
    );
  }
  async updateGame() { 
    const updatedGame = this.getGameData();
    console.log("Güncellenen oyun verisi:", updatedGame);
    console.log("Güncellenen oyun ID:", updatedGame.gameID);
    console.log("ALL GAMES" , await this.gameController.getAllGames());
    if (!this.validateForm(updatedGame)) return;
    await this.gameController.updateGame(updatedGame.gameID, updatedGame);
    
    this.clearForm();
    this.saveButton.textContent = "Düzenle";
    this.editCard = null;
  }
  async filterGameByTitleGenrePublisher() {
    const title = this.search.value.trim();
    const genre = this.search.value.trim();
    const publisher = this.search.value.trim();
    try {
      const filteredGames = await this.gameController.filterGameByTitleGenrePublisher(title, genre, publisher);
      this.gameContainer.innerHTML = '';
      for (let index = 0; index < filteredGames.length; index++) {
        const game = filteredGames[index];
        const card = this.addCard(game);
        this.gameContainer.append(card);
      }
    } catch (err) {
      console.error("GameViewController içinde filterGameByTitleGenrePublisher filtrelenirken hata oluştu:", err);
    }
  }
  async orderGamesByAlphabeticalOrder() {
    //! Bu fonksiyonun çalışması için backend tarafında sıralama işlemi yapılmalıdır. Sıralama işlemi yapıldığında gameContainer içerisi temizlenip sıralanmış oyunlar eklenecek.
    try {
      const games = await this.gameController.orderGamesByAlphabeticalOrder();
      this.gameContainer.innerHTML = '';
      games.forEach(game => {
        console.log("GAME",game);
        const card = this.addCard(game);
        this.gameContainer.append(card);
        console.log(this.gameContainer);
      });
    } catch (err) {
      console.error("DBController içinde orderGamesByAlphabeticalOrder sıralanırken hata oluştu:", err);
    }
  }
  setEdit(card,game) {
    this.editCard = card;
    this.editCard.dataset.gameId = game.gameID;
    this.cardTitle.value = game.gameTitle;
    this.cardDescription.value = game.gameDescription;
    this.cardGenre.value = game.gameGenre;
    this.cardYear.value = game.gameReleaseDate;
    this.cardImage.value = game.gamePhotoURL;
    this.cardPublisher.value = game.gamePublisher;
    this.cardURL.value = game.gameSteamURL;
    this.saveButton.textContent = "Düzenle";
  }
  validateForm(game) {
    if (Object.values(game).some((value) => !value)) {
      alert("Lütfen formu eksiksiz doldurunuz.");
      return false;
    }
    return true;
  }
  clearForm() {
    document.querySelectorAll("#addGameBackdrop .modal-body input, #addGameBackdrop .modal-body textarea, #addGameBackdrop .modal-body select").forEach((element) => {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.value = "";
      } else if (element.tagName === "SELECT") {
        element.selectedIndex = 0;
      }
    });
  }
}

export default GameViewController;
