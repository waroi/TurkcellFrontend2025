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
            btnDelete.dataset.id = game.id;
            btnDelete.addEventListener("click", async () => {
                await Storage.deleteGame(game.id);
                await UI.renderGames(await Storage.fetchGames()); 
            });

            cardBody.append(title, description, releaseDate, developer, steamLink, btnDelete);
            card.append(img, cardBody);
            cardDiv.append(card);
            gameList.append(cardDiv);
        });
    }
}

