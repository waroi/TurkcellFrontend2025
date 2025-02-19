class UI {

    static async renderGames(games) {
        const gameList = document.getElementById("gameList");
        gameList.textContent = ""; // Clear the game list before re-rendering

        games.forEach(game => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("col-md-4");
            cardDiv.setAttribute("data-category", game.category); // Store category data
            cardDiv.id = `game-card-${game.id}`;

            const card = document.createElement("div");
            card.classList.add("card");
            card.style.backgroundColor = "#FFD300";
            card.style.border = "none";

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
            description.classList.add("card-text");
            description.textContent = game.description;

            const releaseDate = document.createElement("p");
            releaseDate.classList.add("card-date");
            releaseDate.textContent = `Release Date: ${game.release_date}`;

            const developer = document.createElement("p");
            developer.textContent = `Developer: ${game.developer}`;

            const steamLink = document.createElement("a");
            steamLink.href = game.steam_url;
            steamLink.textContent = "See on steam";
            steamLink.classList.add("btn", "btn-primary");
            steamLink.target = "_blank";
            steamLink.style.marginRight = "10px";

            // Delete Button
            const btnDelete = document.createElement("button");
            btnDelete.classList.add("btn", "btn-danger", "delete-button");
            btnDelete.textContent = "Delete";
            btnDelete.dataset.id = game.id;
            btnDelete.addEventListener("click", async () => {
                await Storage.deleteGame(game.id);
                await UI.renderGames(await Storage.fetchGames()); // Re-render games after deletion
            });
            btnDelete.style.marginRight="5px";

            // Update Button
            const btnUpdate = document.createElement("button");
            btnUpdate.classList.add("btn", "btn-warning", "update-button");
            btnUpdate.textContent = "Update";
            btnUpdate.dataset.id = game.id;
            btnUpdate.addEventListener("click", () => {
                // Populate the form with the existing game data for update
                document.getElementById("gameId").value = game.id;
                document.getElementById("gameName").value = game.name;
                document.getElementById("gameDescription").value = game.description;
                document.getElementById("gameCategory").value = game.category;
                document.getElementById("releaseDate").value = game.release_date;
                document.getElementById("gameImage").value = game.image;
                document.getElementById("gameDeveloper").value = game.developer;
                document.getElementById("gameSteamURL").value = game.steam_url;
                
                editingGameId = game.id;
                const gameModal = new bootstrap.Modal(document.getElementById("gameModal"));
                gameModal.show();
            });

            cardBody.append(title, description, releaseDate, developer, steamLink, btnDelete, btnUpdate);
            card.append(img, cardBody);
            cardDiv.append(card);
            gameList.append(cardDiv);
        });
    }

    static updateGameCard(gameId, updatedGame) {
        const cardDiv = document.getElementById(`game-card-${gameId}`);
        if (!cardDiv) return;

        cardDiv.querySelector(".card-title").textContent = updatedGame.name;
        cardDiv.querySelector(".card-text").textContent = updatedGame.description;
        cardDiv.querySelector(".card-date").textContent = `Release Date: ${updatedGame.release_date}`;
        cardDiv.querySelector("img").src = updatedGame.image;
        cardDiv.querySelector("p").textContent = `Developer: ${updatedGame.developer}`;
        cardDiv.querySelector("a").href = updatedGame.steam_url;
    }
}









