class UI {
  static modal = ((modal, event) => {
    modal._element
      .querySelector(".btn-close")
      .addEventListener("click", () => modal.hide());
    modal._element
      .querySelector(".btn-primary")
      .addEventListener("click", () => {
        event();
        modal.hide();
      });
    modal._element
      .querySelector(".btn-secondary")
      .addEventListener("click", () => modal.hide());

    return (message, actionText, action) => {
      modal._element.querySelector(".modal-body").textContent = message;
      modal._element.querySelector(".btn-primary").textContent = actionText;
      event = action;
      modal.show();
    };
  })(new bootstrap.Modal(document.querySelector(".modal")), () => {});

  static gamesForm = {
    search: document.querySelector("nav input"),
    filter: {
      category: document.querySelector("form.games select[name='category']"),
      releaseDate: document.querySelector(
        "form.games select[name='release-date']"
      ),
    },
    sort: {
      ascending: document.querySelector("form.games input#ascending"),
      descending: document.querySelector("form.games input#descending"),
      releaseDate: document.querySelector("form.games input#release-date"),
    },
  };

  static gameForm = {
    id: document.querySelector(".form-game input[type='hidden']"),
    name: document.querySelector(".form-game div:nth-of-type(1) input"),
    category: document.querySelector(".form-game div:nth-of-type(2) select"),
    price: document.querySelector(".form-game div:nth-of-type(3) input"),
    developer: document.querySelector(".form-game div:nth-of-type(4) input"),
    releaseDate: document.querySelector(".form-game div:nth-of-type(5) select"),
    description: document.querySelector(
      ".form-game div:nth-of-type(6) textarea"
    ),
    URL: document.querySelector(".form-game div:nth-of-type(7) input"),
    imageURL: document.querySelector(".form-game div:nth-of-type(8) input"),
    image: document.querySelector(".form-game img"),
  };

  static main = document.querySelector("main");

  static sections = document.querySelectorAll("main section");

  static games = document.querySelector("#games");

  static gameArray = [];

  static editorMode = false;

  static initialize() {
    document
      .querySelector(".btn-dark")
      .addEventListener("click", () => this.changeSection(false));

    document
      .querySelector("nav .nav-item:nth-of-type(3) a")
      .addEventListener("click", (event) => {
        event.preventDefault();

        this.editorMode = !this.editorMode;
        document
          .querySelectorAll(".btn-info, .btn-group-vertical")
          .forEach((buttons) => buttons.classList.toggle("d-none"));
      });

    document
      .querySelector(".btn-info")
      .addEventListener("click", () => this.addGame());

    document
      .querySelector(".form-game button")
      .addEventListener("click", () => this.saveGame());

    this.gamesForm.search.addEventListener("input", () => {
      this.renderGames();
      this.main.scrollIntoView({ behavior: "smooth" });
    });

    this.gamesForm.filter.category.addEventListener("change", () => {
      this.renderGames();
      this.main.scrollIntoView({ behavior: "smooth" });
    });
    this.gamesForm.filter.releaseDate.addEventListener("change", () => {
      this.renderGames();
      this.main.scrollIntoView({ behavior: "smooth" });
    });

    this.gamesForm.sort.ascending.addEventListener("change", () => {
      this.renderGames();
      this.main.scrollIntoView({ behavior: "smooth" });
    });
    this.gamesForm.sort.descending.addEventListener("change", () => {
      this.renderGames();
      this.main.scrollIntoView({ behavior: "smooth" });
    });
    this.gamesForm.sort.releaseDate.addEventListener("change", () => {
      this.renderGames();
      this.main.scrollIntoView({ behavior: "smooth" });
    });

    this.gameForm.imageURL.addEventListener(
      "input",
      () => (this.gameForm.image.src = this.gameForm.imageURL.value)
    );
    this.gameForm.image.addEventListener(
      "error",
      () => (this.gameForm.image.src = "assets/img/error.png")
    );
  }

  static changeSection(direction) {
    if (direction) {
      this.sections[0].classList.remove("active");
      this.sections[1].classList.add("active");
    } else {
      this.sections[0].classList.add("active");
      this.sections[1].classList.remove("active");
    }
  }

  static addGame() {
    this.gameForm.id.value = -1;
    this.gameForm.name.value =
      this.gameForm.price.value =
      this.gameForm.developer.value =
      this.gameForm.description.value =
      this.gameForm.URL.value =
      this.gameForm.imageURL.value =
        "";
    this.gameForm.category.selectedIndex =
      this.gameForm.releaseDate.selectedIndex = 0;
    this.gameForm.image.src = "assets/img/error.png";

    this.main.scrollIntoView({ behavior: "smooth" });
    this.changeSection(true);
  }

  static editGame(game) {
    this.gameForm.id.value = game.id;
    this.gameForm.name.value = game.name;
    this.gameForm.category.value = game.category;
    this.gameForm.price.value = game.price;
    this.gameForm.developer.value = game.developer;
    this.gameForm.releaseDate.value =
      game.releaseDate < 2010 ? "Before 2010" : game.releaseDate;
    this.gameForm.description.value = game.description;
    this.gameForm.URL.value = game.URL;
    this.gameForm.imageURL.value = game.imageURL;
    this.gameForm.image.src = game.imageURL;

    this.main.scrollIntoView({ behavior: "smooth" });
    this.changeSection(true);
  }

  static deleteGame(game) {
    this.modal("Are you sure you want to delete this game?", "Delete", () => {
      Database.deleteGame(game);
      game.card.remove();
    });
  }

  static renderGames(
    search = this.gamesForm.search.value.trim().toLowerCase()
  ) {
    this.games.innerHTML = "";

    this.gameArray
      .reduce((games, game) => {
        if (
          (!search ||
            game.name.toLowerCase().includes(search) ||
            game.category.toLowerCase().includes(search) ||
            game.developer.toLowerCase().includes(search)) &&
          (!this.gamesForm.filter.category.selectedIndex ||
            this.gamesForm.filter.category.value == game.category) &&
          (!this.gamesForm.filter.releaseDate.selectedIndex ||
            this.gamesForm.filter.releaseDate.value == game.releaseDate ||
            (this.gamesForm.filter.releaseDate.value == "Before 2010" &&
              game.releaseDate < 2010))
        )
          games.push(game);

        return games;
      }, [])
      .sort((previous, next) =>
        this.gamesForm.sort.ascending.checked
          ? previous.name.localeCompare(next.name)
          : this.gamesForm.sort.descending.checked
          ? next.name.localeCompare(previous.name)
          : previous.releaseDate - next.releaseDate
      )
      .forEach((game, card) => {
        card = document.createElement("div");
        card.className = "card bg-dark";
        card.innerHTML = `<img class="card-img-top object-fit-cover" /><div class="card-body"><h5 class="card-title"></h5><hr class="border-3 rounded border-black opacity-100" /><p class="card-text text-success"><i class="fa-solid fa-coins text-info me-2"></i><b></b></p><p class="card-text"><i class="fa-solid fa-screwdriver-wrench text-info me-2"></i><span></span></p><p class="card-text"><i class="fa-solid fa-icons text-info me-2"></i><span></span></p><p class="card-text"><i class="fa-solid fa-calendar-days text-info me-2"></i><span></span></p><p class="card-text"></p><div class="mt-auto"><a target="_blank" class="btn btn-primary w-100 flex-center">View Game<i class="fa-solid fa-magnifying-glass ms-2"></i></a></div><div class="btn-group-vertical w-100 mt-4 ${
          this.editorMode ? "" : "d-none"
        }"><button type="button" class="btn btn-warning">Edit Game<i class="fa-solid fa-pen-to-square ms-2"></i></button><button type="button" class="btn btn-danger">Delete Game<i class="fa-solid fa-trash-can ms-2"></i></button></div></div>`;
        card.querySelector("img").src = game.imageURL;
        card.querySelector(".card-title").textContent = game.name;
        card.querySelector(".card-text:nth-of-type(1) b").textContent =
          game.price != "0" ? "$" + game.price : "Free";
        card.querySelector(".card-text:nth-of-type(2) span").textContent =
          game.developer;
        card.querySelector(".card-text:nth-of-type(3) span").textContent =
          game.category;
        card.querySelector(".card-text:nth-of-type(4) span").textContent =
          game.releaseDate;
        card.querySelector(".card-text:nth-of-type(5)").textContent =
          game.description;
        card.querySelector(".btn-primary").href = game.URL;
        card
          .querySelector("button:nth-of-type(1)")
          .addEventListener("click", () => this.editGame(game));
        card
          .querySelector("button:nth-of-type(2)")
          .addEventListener("click", () => this.deleteGame(game));

        game.assignCard(card);
        games.appendChild(card);
      });
  }

  static saveGame(
    game = new Game(
      this.gameForm.id.value,
      this.gameForm.name.value,
      this.gameForm.category.value,
      this.gameForm.price.value,
      this.gameForm.developer.value,
      this.gameForm.releaseDate.value,
      this.gameForm.description.value,
      this.gameForm.URL.value,
      this.gameForm.imageURL.value
    )
  ) {
    if (this.gameForm.id.value == -1) {
      Database.addGame(game);
    } else Database.editGame(game);
  }
}
