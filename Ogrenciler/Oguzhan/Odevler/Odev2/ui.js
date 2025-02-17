const row = document.getElementById("row")

class UI {
  static listGames(games) {
    games.map((game) => {

      const col = document.createElement("div");
      col.className = "col-lg-6 col-12 g-5";

      const cardDiv = document.createElement("div");
      cardDiv.className = "card";

      const colRow = document.createElement("div");
      colRow.className = "row g-0";

      const colLeft = document.createElement("div");
      colLeft.className = "col-md-4";

      const img = document.createElement("img");
      // img.className = "img-fluid rounded-start";
      img.className = "img-fluid h-100";
      img.src = game.imageUrl;


      const colRight = document.createElement("div");
      colRight.className = "col-md-8";

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const gameName = document.createElement("h5");
      gameName.className = "card-title";
      gameName.textContent = game.gameName;

      const description = document.createElement("p");
      description.className = "card-text";
      description.textContent = game.description;

      const categoryIds = document.createElement("small");
      categoryIds.className = "text-body-secondary";
      categoryIds.textContent = game.categoryIds

      const releaseDate = document.createElement("small");
      releaseDate.className = "text-body-secondary";
      releaseDate.textContent = game.releaseDate

      row.appendChild(col)
      col.appendChild(cardDiv)
      cardDiv.appendChild(colRow)
      colRow.append(colLeft, colRight)
      colLeft.appendChild(img)
      colRight.appendChild(cardBody)
      cardBody.append(gameName, description, categoryIds, releaseDate)

    });
  }
}
