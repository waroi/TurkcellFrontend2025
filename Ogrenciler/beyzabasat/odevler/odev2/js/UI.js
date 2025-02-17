import GameService from "./GameService.js";

export default class UI {
    static gameList = document.getElementById("game-list");

   
    static async displayGames() {
        const games = await GameService.fetchGames();
        this.gameList.innerHTML = "";
        games.forEach(game => {
            const gameCard = this.createGameCard(game);
            this.gameList.appendChild(gameCard);
        });
    }

    static createGameCard(game) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-md-4");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "mb-3");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = game.image;
        img.alt = game.name;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = game.name;

        const description = document.createElement("p");
        description.textContent = game.description;

        const category = document.createElement("p");
        category.textContent = `Kategori: ${game.category}`;

        const releaseDate = document.createElement("p");
        releaseDate.textContent = `Çıkış Tarihi: ${game.releaseDate}`;

        const developer = document.createElement("p");
        developer.textContent = `Yapımcı: ${game.developer}`;

        const steamLink = document.createElement("a");
        steamLink.href = game.steamUrl;
        steamLink.target = "_blank";
        steamLink.classList.add("btn", "btn-primary", "me-2");
        steamLink.textContent = "Steam'de Gör";

    
        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "btn-warning", "me-2");
        editBtn.textContent = "Düzenle";
        editBtn.addEventListener("click", function () {
            UI.fillEditModal(game);
        });

     
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger");
        deleteBtn.textContent = "Sil";
        deleteBtn.addEventListener("click", async function () {
            console.log(`Silme işlemi için gönderilen ID: ${game.id}`);
            await GameService.deleteGame(game.id);
            UI.displayGames();
        });
        

        cardBody.append(title, description, category, releaseDate, developer, steamLink, editBtn, deleteBtn);
        cardDiv.append(img, cardBody);
        colDiv.append(cardDiv);

        return colDiv;
    }

    static openAddGameModal() {
        const addGameModal = bootstrap.Modal.getOrCreateInstance(document.getElementById("addGameModal"));
        addGameModal.show();
    }

    static fillEditModal(game) {
        document.getElementById("editGameId").value = game.id;
        document.getElementById("editGameName").value = game.name;
        document.getElementById("editGameDescription").value = game.description;
        document.getElementById("editGameCategory").value = game.category;
        document.getElementById("editGameReleaseDate").value = game.releaseDate;
        document.getElementById("editGameImage").value = game.image;
        document.getElementById("editGameDeveloper").value = game.developer;
        document.getElementById("editGameSteamUrl").value = game.steamUrl;

        const editGameModal = bootstrap.Modal.getOrCreateInstance(document.getElementById("editGameModal"));
        editGameModal.show();
    }
}
