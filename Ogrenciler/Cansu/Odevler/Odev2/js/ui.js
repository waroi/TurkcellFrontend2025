class UI {
    static renderGames(games) {
        const gameList = document.getElementById("gameList");
        gameList.textContent = "";

        games.forEach(game => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("col-md-4");

            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.classList.add("card-img-top");
            img.src = game.image;
            img.alt = game.name;

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const title = document.createElement("h5");
            title.textContent = game.name;

            const btnDelete = document.createElement("button");
            btnDelete.classList.add("btn", "btn-danger");
            btnDelete.textContent = "Sil";
            btnDelete.addEventListener("click", () => Storage.deleteGame(game.id));

            cardBody.appendChild(title);
            cardBody.appendChild(btnDelete);
            card.appendChild(img);
            card.appendChild(cardBody);
            cardDiv.appendChild(card);
            gameList.appendChild(cardDiv);
        });
    }
}