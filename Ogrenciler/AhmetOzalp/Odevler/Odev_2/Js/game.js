export class Game {
    constructor(
      id,
      name,
      description,
      category,
      releaseDate,
      image,
      video,
      developer,
      steamURL
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.category = category;
      this.releaseDate = releaseDate;
      this.image = image;
      this.video=video;
      this.developer = developer;
      this.steamURL = steamURL;
    }
  
  
    createCard() {
      const cardCol = document.createElement("div"); 
      cardCol.className = "col-md-4 my-2 d-flex justify-content-center"; 
  
      const card = document.createElement("div");
      card.className = "card d-flex justify-content-center";
  
      const cardContent = document.createElement("div");
      cardContent.className = "card-body clickable justify-content-center d-flex flex-column align-items-stretch";
      cardContent.style.cursor = "pointer";
  
      cardContent.addEventListener("click", () => {
          window.open(`game_details.html?id=${this.id}`, "_blank"); 
      });
  
      const img = document.createElement("img");
      img.className = "card-img-top w-100 h-100";
      img.src = this.image;
      img.alt = this.name;
  
      const title = document.createElement("h5");
      title.className = "card-title text-warning";
      title.textContent = this.name;
  
      const desc = document.createElement("p");
      desc.className = "card-text";
      desc.textContent = this.description;
  
      const category = document.createElement("p");
      const categoryLabel = document.createElement("strong");
      categoryLabel.textContent = "Kategori: ";
      category.appendChild(categoryLabel);
      category.appendChild(document.createTextNode(this.category));
  
      const releaseDate = document.createElement("p");
      releaseDate.className = "card-text";
      const releaseDateLabel = document.createElement("strong");
      releaseDateLabel.textContent = "Çıkış Tarihi: ";
      releaseDate.appendChild(releaseDateLabel);
      releaseDate.appendChild(document.createTextNode(this.releaseDate));
  
      const developer = document.createElement("p");
      developer.className = "card-text";
      const developerLabel = document.createElement("strong");
      developerLabel.textContent = "Geliştirici: ";
  
      const cardButtons = document.createElement("div");
      cardButtons.className = "text-center d-flex flex-wrap mb-3 mt-auto justify-content-between";
  
      const steamLink = document.createElement("a");
      steamLink.className = "btn btn-dark steam-btn me-auto p-2 rounded-4 ms-2 d-flex flex-wrap";
      const sticon = document.createElement("i");
      sticon.className = "fab fa-steam ";
      steamLink.href = this.steamURL;
      steamLink.target = "_blank";
  
      const deleteButton = document.createElement("button");
      deleteButton.className = "btn btn-danger delete-btn me-1 p-2 rounded-4";
      const dicon = document.createElement("i");
      dicon.className = "fas fa-trash";
      deleteButton.setAttribute("data-id", this.id);
      deleteButton.addEventListener("click", () => {
          this.deleteGame(this.id);
      });
  
      const editButton = document.createElement("button");
      editButton.className = "btn btn-warning edit-btn p-2 rounded-4";
      const eicon = document.createElement("i");
      eicon.className="fas fa-edit";
      editButton.setAttribute("data-id", this.id);
      editButton.addEventListener("click", () => {
          this.editGame();
      }); 
  
      cardContent.appendChild(img);
      cardContent.appendChild(title);
      cardContent.appendChild(desc);
      cardContent.appendChild(category);
      cardContent.appendChild(releaseDate);
      cardContent.appendChild(developer);
      developer.appendChild(developerLabel);
      developer.appendChild(document.createTextNode(this.developer));
      card.appendChild(cardContent);
      cardButtons.appendChild(steamLink);
      steamLink.appendChild(sticon);
      cardButtons.appendChild(deleteButton);
      deleteButton.appendChild(dicon);
      cardButtons.appendChild(editButton);
      editButton.appendChild(eicon);
      card.appendChild(cardButtons);
      cardCol.appendChild(card);
  
      return cardCol;
  }
  
  
    deleteGame(id) {
      fetch(`http://localhost:5000/games/${id}`, { method: "DELETE" }).then(
        () => {
          document.getElementById("game-list").textContent = "";
          fetchGames();
        }
      );
    }
  
    editGame() {
      document.getElementById("game-id").value = this.id;
      document.getElementById("name").value = this.name;
      document.getElementById("description").value = this.description;
      document.getElementById("game_category").value = this.category;
      document.getElementById("releaseDate").value = this.releaseDate;
      document.getElementById("image").value = this.image;
      document.getElementById("videoURL").value = this.video;
      document.getElementById("developer").value = this.developer;
      document.getElementById("steamURL").value = this.steamURL;
  
      let modal = new bootstrap.Modal(document.getElementById("addGameModal"));
      modal.show();
    }
  }
  