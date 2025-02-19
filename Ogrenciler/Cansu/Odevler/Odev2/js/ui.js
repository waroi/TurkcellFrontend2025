class UI {

    static async renderGames(games) {
        const gameList = document.getElementById("gameList");
        gameList.textContent = ""; 

        games.forEach(game => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("col-md-4");
            cardDiv.setAttribute("data-category", game.category); 

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

           
            const btnDelete = document.createElement("button");
            btnDelete.classList.add("btn", "btn-danger", "delete-button");
            btnDelete.textContent = "Delete";
            btnDelete.dataset.id = game.id;;
            btnDelete.addEventListener("click", async () => {
                await Storage.deleteGame(game.id);
                await UI.renderGames(await Storage.fetchGames()); 
            });
            btnDelete.style.marginRight = "5px";
           
            const btnUpdate = document.createElement("button");
            btnUpdate.classList.add("btn", "btn-warning", "update-button");
            btnUpdate.textContent = "Update";
            btnUpdate.dataset.id = game.id;
            btnUpdate.addEventListener("click", () => {
              
                document.getElementById("gameId").value = game.id;
                document.getElementById("gameName").value = game.name;
                document.getElementById("gameDescription").value = game.description;
                document.getElementById("gameCategory").value = game.category;
                document.getElementById("releaseDate").value = game.release_date;
                document.getElementById("gameImage").value = game.image;
                document.getElementById("gameDeveloper").value = game.developer;
                document.getElementById("gameSteamURL").value = game.steam_url;
             
                const gameModal = new bootstrap.Modal(document.getElementById("gameModal"));
                gameModal.show();
            });

            cardBody.append(title, description, releaseDate, developer, steamLink, btnDelete, btnUpdate);
            card.append(img, cardBody);
            cardDiv.append(card);
            gameList.append(cardDiv);
        });
    }
}







