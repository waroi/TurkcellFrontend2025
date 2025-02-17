import { createDiv } from "../consts/consts.js";

export class UI {
  static addedCategoryIds = [];

  static createGameCard(games, categories) {
    const row = document.getElementById("row")
    games.map((game) => {

      const col = createDiv();
      col.className = "col-lg-6 col-12 g-5"

      const cardDiv = createDiv();
      cardDiv.className = "card "

      const divRow = createDiv();
      divRow.className = "row g-0 "

      const divTop = createDiv();
      divTop.className = "divTop "

      const img = document.createElement("img");
      img.className = "img-fluid h-100 w-100"
      img.src = game.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Empty_set.svg/600px-Empty_set.svg.png";


      const divLeft = createDiv();
      divLeft.className = "divLeft col-md-9"

      const divRight = createDiv();
      divRight.className = "divRight col-md-3 d-flex flex-column justify-content-center pe-1 gap-2"

      const deleteButton = document.createElement("button")
      deleteButton.dataset.gameId = game.id;
      const deleteIcon = document.createElement("i")
      deleteIcon.className = "fa-solid fa-trash"
      deleteButton.className = "btn btn-outline-danger deleteBtn"


      const editButton = document.createElement("button")
      editButton.className = "btn btn-outline-success editBtn"
      editButton.dataset.gameId = game.id;
      editButton.setAttribute("data-bs-toggle", "modal");
      editButton.setAttribute("data-bs-target", "#addGameModal");
      const editIcon = document.createElement("i")
      editIcon.className = "fa-solid fa-pen editIcon"

      const detailButton = document.createElement("button")
      const detailIcon = document.createElement("i")
      detailIcon.className = "fa-solid fa-circle-info"
      detailButton.className = "btn btn-outline-primary detailBtn"

      const cardBody = createDiv();
      cardBody.className = "card-body d-flex align-items-start flex-column  justify-content-center"

      const gameName = document.createElement("h5");
      gameName.className = "card-title"
      gameName.textContent = game.gameName

      const description = document.createElement("p");
      description.className = "card-text d-flex justify-content-center"
      description.textContent = game.description || "Açıklama yok";


      const categoryIds = document.createElement("small");
      categoryIds.className = "text-body-secondary mb-2"
      const categoryNames = game.categoryIds
        .map(id => categories.find(cat => cat.id == id)?.name)
        .filter(name => name)
        .join(', ');

      categoryIds.textContent = categoryNames || "Kategori belirtilmemiş";


      const releaseDate = document.createElement("small");
      releaseDate.className = "text-body-secondary"
      releaseDate.textContent = game.releaseDate || "Çıkış tarihi belirtilmemiş"

      row.appendChild(col)
      col.appendChild(cardDiv)
      cardDiv.appendChild(divRow)
      divRow.append(divTop, divLeft, divRight)
      divTop.appendChild(img)
      divLeft.appendChild(cardBody)
      deleteButton.appendChild(deleteIcon)
      editButton.appendChild(editIcon)
      detailButton.appendChild(detailIcon)
      divRight.append(editButton, deleteButton, detailButton)
      cardBody.append(gameName, description, categoryIds, releaseDate)

    });
  }

  static showCategories(categories) {
    const categorySelect = document.getElementById("category")

    categories.map((category) => {
      const option = document.createElement("option")
      option.textContent = category.name
      option.value = category.id

      categorySelect.appendChild(option)
    })
  }

  static filterCategories(categories) {
    const categorySelect = document.getElementById("categoryFilter")

    categories.map((category) => {
      const option = document.createElement("option")
      option.textContent = category.name
      option.value = category.id

      categorySelect.appendChild(option)
    })
  }


  static listAddedCategories() {
    const ul = document.getElementById("list-group");
    document.getElementById('categoryIds').value = UI.addedCategoryIds.join(',');
    const select = document.getElementById("category");
    const selectedId = select.value;
    const selectedName = select.options[select.selectedIndex].text;

    if (UI.addedCategoryIds.includes(Number(selectedId))) {
      console.log("Bu kategori zaten eklenmiş!")
      alert("Bu kategori zaten eklenmiş!");
      return;
    }

    UI.addedCategoryIds.push(parseInt(selectedId));
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.id = selectedId;
    li.textContent = selectedName;
    ul.appendChild(li);
  }

  static fillEditForm(game) {
    UI.addedCategoryIds = [];
    document.getElementById("addGameForm").reset();

    document.getElementById("gameName").value = game.gameName || "";
    document.getElementById("description").value = game.description || "";
    document.getElementById("releaseDate").value = game.releaseDate?.split('T')[0] || "";
    document.getElementById("imageUrl").value = game.imageUrl || "";
    document.getElementById("developer").value = game.developer || "";
    document.getElementById("category").value = game.categoryIds || "";
    document.getElementById("steamUrl").value = game.steamUrl || "";
    document.getElementById("myPoint").value = game.myPoint || "";
    document.getElementById("isCompleted").checked = game.isCompleted || false;


    const ul = document.getElementById("list-group");
    ul.innerHTML = "";
    UI.addedCategoryIds = [...game.categoryIds];
    const categorySelect = document.getElementById("category");


    game.categoryIds.forEach((id) => {
      const option = categorySelect.querySelector(`option[value="${id}"]`);
      if (option) {
        const li = document.createElement("li");
        const deleteLi = document.createElement("button");
        deleteLi.className = "btn btn-warning ms-5"
        deleteLi.textContent = "sil"
        li.className = "list-group-item";
        li.id = id;
        li.textContent = option.textContent;

        li.appendChild(deleteLi)
        ul.appendChild(li);

        deleteLi.addEventListener("click", () => {
          li.remove();
          UI.addedCategoryIds = UI.addedCategoryIds.filter(categoryId => categoryId != id);
          document.getElementById('categoryIds').value = UI.addedCategoryIds.join(',');
        })
      }
    });
  }
}









