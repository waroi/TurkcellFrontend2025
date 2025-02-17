import Request from "./request.js";

export async function renderGames() {
  let games = await Request.getJSON(
    "http://localhost:3000/games" // istekler JSON server'a atıldı.
  );
  window.scrollTo({ top: 0, behavior: "smooth" }); // her render olunca sayfanin en basina scroll ettim.

  //Document object model (navbar)
  let section = document.querySelector(".main-page");
  let container = document.createElement("div");
  let category_item = document.getElementById("category-item");
  let company_item = document.getElementById("company-item");
  let addButton = document.createElement("button");
  let dropdown = document.createElement("div");
  let drop_button = document.createElement("button");
  let company_drop = document.createElement("button");
  let dropdown_company = document.createElement("div");
  let company_ul = document.createElement("ul");
  let ul = document.createElement("ul");
  let columnDiv = document.createElement("div");
  let rowContainer = document.createElement("div");
  let addItem = document.getElementById("add-item");
  let searchButton = document.getElementById("search-button");

  container.className = "container";
  container.id = "game-container";
  addButton.className = "btn btn-info w-100";
  addButton.textContent = "AddGame";
  addButton.id = "add-btn";
  dropdown.className = "dropdown";
  drop_button.textContent = "Categories";
  drop_button.className = "btn btn-info dropdown-toggle w-100";
  drop_button.setAttribute("type", "button");
  drop_button.setAttribute("data-bs-toggle", "dropdown");
  drop_button.setAttribute("aria-expanded", "false");
  drop_button.id = "drop-btn";
  dropdown_company.className = "dropdown";
  company_drop = document.createElement("button");
  company_drop.textContent = "Companies";
  company_drop.className = "btn btn-info dropdown-toggle w-100";
  company_drop.setAttribute("type", "button");
  company_drop.setAttribute("data-bs-toggle", "dropdown");
  company_drop.setAttribute("aria-expanded", "false");
  company_drop.id = "company-drop";
  ul.className = "dropdown-menu";
  ul.id = "categoryDropdown";
  company_ul.className = "dropdown-menu";
  company_ul.id = "companyDropdown";
  columnDiv.id = "column-div";
  columnDiv.className = "row";
  rowContainer.className = "row bg-dark-rounded mb-5 p-5";
  rowContainer.id = "row-container";

  addItem.appendChild(addButton);
  container.appendChild(rowContainer);
  dropdown.appendChild(ul);
  dropdown_company.appendChild(company_ul)
  company_item.appendChild(dropdown_company);
  category_item.appendChild(dropdown);
  dropdown_company.appendChild(company_drop);
  dropdown.appendChild(drop_button);


  games.map((game) => { // Json serverdaki elementleri maple döndüm ve renderladım.

    let col = document.createElement("div");
    let gameCard = document.createElement("div");
    let img = document.createElement("img");
    let gameContent = document.createElement("div");
    let gameTitle = document.createElement("h4");
    let companyName = document.createElement("h6");
    let reviewButton = document.createElement("button");
    let editButton = document.createElement("button");
    let removeButton = document.createElement("button");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3";
    gameCard.className = "game-card text-center";
    img.className = "game-pic";
    img.src = game.image;
    gameContent.className = "game-content p-3";
    gameTitle.className = "text-white game-title";
    gameTitle.textContent = game.name;
    companyName.className = "text-white game-company";
    companyName.textContent = `${"By"} ` + game.company;
    reviewButton.className = "btn btn-info btn-hover ";
    reviewButton.textContent = "Review";
    reviewButton.setAttribute("data-bs-toggle", "modal");
    reviewButton.setAttribute("data-bs-target", "#reviewModal");
    editButton.className = "btn btn-warning btn-hover";
    editButton.textContent = "Edit";
    removeButton.className = "btn btn-danger btn-hover";
    removeButton.textContent = "Remove";
    removeButton.id = "rmv-button";


    editButton.addEventListener("click", () => {
      // Önce eski modal varsa kaldır
      const oldModal = document.getElementById('editModal');
      if (oldModal) {
        oldModal.remove();
      }

      // Modal Document Object Model
      const modalDiv = document.createElement('div');
      modalDiv.classList.add('modal', 'fade');
      modalDiv.id = 'editModal';
      modalDiv.setAttribute('tabindex', '-1');
      modalDiv.setAttribute('aria-labelledby', 'exampleModalLabel');
      modalDiv.setAttribute('aria-hidden', 'true');
      const modalDialog = document.createElement('div');
      modalDialog.classList.add('modal-dialog');
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
      const modalHeader = document.createElement('div');
      modalHeader.classList.add('modal-header');
      const modalTitle = document.createElement('h1');
      modalTitle.classList.add('modal-title', 'fs-5');
      modalTitle.id = 'modalTitle';
      modalTitle.textContent = 'Edit Game';
      const closeButton = document.createElement('button');
      closeButton.type = 'button';
      closeButton.classList.add('btn-close');
      closeButton.setAttribute('data-bs-dismiss', 'modal');
      closeButton.setAttribute('aria-label', 'Close');
      modalHeader.appendChild(modalTitle);
      modalHeader.appendChild(closeButton);
      const modalBody = document.createElement('div');
      modalBody.classList.add('modal-body');
      const form = document.createElement('form');


      const inputFields = [
        { label: 'Game Name', id: 'modalGameName' },
        { label: 'Company', id: 'modalCompany' },
        { label: 'Release Date', id: 'modalReleaseDate', type: 'date' },
        { label: 'Category', id: 'modalCategory' },
        { label: 'Image URL', id: 'modalImage' },
        { label: 'Steam URL', id: 'modalSteam' },
        { label: 'Description', id: 'modalDescription' }
      ];

      inputFields.forEach(field => {
        const mb3Div = document.createElement('div');
        mb3Div.classList.add('mb-3');
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.classList.add('form-label');
        label.textContent = field.label;
        const input = document.createElement('input');
        input.type = field.type || 'text';
        input.classList.add('form-control');
        input.id = field.id;

        mb3Div.appendChild(label);
        mb3Div.appendChild(input);
        form.appendChild(mb3Div);
      });

      modalBody.appendChild(form);

      const modalFooter = document.createElement('div');
      modalFooter.classList.add('modal-footer');
      const closeFooterButton = document.createElement('button');
      closeFooterButton.type = 'button';
      closeFooterButton.classList.add('btn', 'btn-secondary');
      closeFooterButton.setAttribute('data-bs-dismiss', 'modal');
      closeFooterButton.textContent = 'Close';
      const saveButton = document.createElement('button');
      saveButton.type = 'button';
      saveButton.classList.add('btn', 'btn-info');
      saveButton.id = 'save';
      saveButton.textContent = 'Save changes';
      modalFooter.appendChild(closeFooterButton);
      modalFooter.appendChild(saveButton);
      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalBody);
      modalContent.appendChild(modalFooter);
      modalDialog.appendChild(modalContent);
      modalDiv.appendChild(modalDialog);
      document.getElementById("myMain").appendChild(modalDiv);
      //Her edite tıklandıgında tıklanılan verinin bilgilerini modalda kullanıcıya gösterdim.
      document.getElementById("modalGameName").value = game.name;
      document.getElementById("modalCategory").value = game.category;
      document.getElementById("modalCompany").value = game.company;
      document.getElementById("modalReleaseDate").value = game.releasedate;
      document.getElementById("modalDescription").value = game.description;
      document.getElementById("modalImage").value = game.image;
      document.getElementById("modalSteam").value = game.steam_url;

      // Bootstrap Modal'ı elle aç
      const modal = new bootstrap.Modal(document.getElementById('editModal'));
      modal.show();

      saveButton.addEventListener("click", () => {
        game.name = document.getElementById("modalGameName").value;
        game.category = document.getElementById("modalCategory").value;
        game.company = document.getElementById("modalCompany").value;
        game.releasedate = document.getElementById("modalReleaseDate").value;
        game.description = document.getElementById("modalDescription").value;
        game.image = document.getElementById("modalImage").value;
        game.steam_url = document.getElementById("modalSteam").value;

        console.log(game.name);
        updateGames(game);

        // Modalı kapat
        modal.hide();
      });
    });


    reviewButton.addEventListener("click", () => {

      let existingModal = document.getElementById("reviewModal"); //önceden oluşturulmus modal var ise
      if (existingModal) {
        let existingModalInstance = bootstrap.Modal.getInstance(existingModal); //bootstrap modalına ait ise 
        if (existingModalInstance) {
          existingModalInstance.hide(); // bootstrap modalını kapat 
        }
        existingModal.remove(); // html'den kaldirdik.
      }

      const modalDiv = document.createElement("div");
      modalDiv.className = "modal fade";
      modalDiv.id = "reviewModal";
      modalDiv.tabIndex = "-1";
      modalDiv.setAttribute("aria-hidden", "true");
      const modalDialog = document.createElement("div");
      modalDialog.className = "modal-dialog modal-dialog-centered modal-dialog-scrollable";
      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";
      const modalHeader = document.createElement("div");
      modalHeader.className = "modal-header";
      const modalTitle = document.createElement("h5");
      modalTitle.className = "modal-title";
      modalTitle.id = "game-title";
      modalTitle.textContent = game.name;
      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "btn-close";
      closeButton.setAttribute("data-bs-dismiss", "modal");
      closeButton.setAttribute("aria-label", "Close");
      modalHeader.appendChild(modalTitle);
      modalHeader.appendChild(closeButton);
      const modalBody = document.createElement("div");
      modalBody.className = "modal-body";
      const gameImage = document.createElement("img");
      gameImage.id = "game-image";
      gameImage.src = game.image || "";
      gameImage.alt = "Game Image";
      const gameDescription = createInfoSection("Game Description", game.description);
      const gameCategory = createInfoSection("Game Category", game.category);
      const gameDate = createInfoSection("Release Date", game.releasedate);
      const gameCompany = createInfoSection("Company", game.company);
      const steamLink = document.createElement("a");
      steamLink.href = game.steam_url;
      steamLink.textContent = game.steam_url;
      steamLink.target = "_blank";
      const gameSteam = createInfoSection("Steam URL", steamLink);
      modalBody.appendChild(gameImage);
      modalBody.appendChild(gameDescription);
      modalBody.appendChild(gameCategory);
      modalBody.appendChild(gameDate);
      modalBody.appendChild(gameCompany);
      modalBody.appendChild(gameSteam);
      const modalFooter = document.createElement("div");
      modalFooter.className = "modal-footer";
      const closeFooterButton = document.createElement("button");
      closeFooterButton.type = "button";
      closeFooterButton.className = "btn btn-secondary";
      closeFooterButton.setAttribute("data-bs-dismiss", "modal");
      closeFooterButton.textContent = "Close";
      modalFooter.appendChild(closeFooterButton);

      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalBody);
      modalContent.appendChild(modalFooter);
      modalDialog.appendChild(modalContent);
      modalDiv.appendChild(modalDialog);

      document.getElementById("myMain").appendChild(modalDiv);

      var newModal = new bootstrap.Modal(modalDiv); // yeni modal nesnesi olusturduk 
      newModal.show();      //gösterdik


      modalDiv.addEventListener("hidden.bs.modal", () => {
        modalDiv.remove();  //modali domdan kaldirdim.
      });
    });

    function createInfoSection(title, content) {
      const section = document.createElement("div");
      const heading = document.createElement("h6");
      heading.textContent = title;

      const paragraph = document.createElement("p");
      if (typeof content === "string") {
        paragraph.textContent = content;
      } else {
        paragraph.appendChild(content);
      }

      section.appendChild(heading);
      section.appendChild(paragraph);
      return section;
    }

    removeButton.addEventListener("click", () => {
      deleteGame(game);
    })


    gameContent.appendChild(gameTitle);
    gameContent.appendChild(companyName);
    gameContent.appendChild(reviewButton);
    gameContent.appendChild(editButton);
    gameContent.appendChild(removeButton);
    gameCard.appendChild(img);
    gameCard.appendChild(gameContent);
    col.appendChild(gameCard);
    columnDiv.appendChild(col);
    rowContainer.appendChild(columnDiv);


  });

  let modal = null; // modali temizledik 

  addButton.addEventListener("click", () => {
    if (modal === null) {
      //add modal DOM
      const addModalDiv = document.createElement('div');
      addModalDiv.classList.add('modal', 'fade');
      addModalDiv.id = 'addExampleModal';
      addModalDiv.setAttribute('tabindex', '-1');
      addModalDiv.setAttribute('aria-labelledby', 'addExampleModalLabel');
      addModalDiv.setAttribute('aria-hidden', 'true');
      const addModalDialog = document.createElement('div');
      addModalDialog.classList.add('modal-dialog');
      const addModalContent = document.createElement('div');
      addModalContent.classList.add('modal-content');
      const addModalHeader = document.createElement('div');
      addModalHeader.classList.add('modal-header');
      const addModalTitle = document.createElement('h1');
      addModalTitle.classList.add('modal-title', 'fs-5');
      addModalTitle.id = 'addModalTitle';
      addModalTitle.textContent = "Add Game";
      const addCloseButton = document.createElement('button');
      addCloseButton.type = 'button';
      addCloseButton.classList.add('btn-close');
      addCloseButton.setAttribute('data-bs-dismiss', 'modal');
      addCloseButton.setAttribute('aria-label', 'Close');
      addModalHeader.appendChild(addModalTitle);
      addModalHeader.appendChild(addCloseButton);
      const addModalBody = document.createElement('div');
      addModalBody.classList.add('modal-body');
      const addForm = document.createElement('form');

      const addInputFields = [
        { label: 'Game Name', id: 'addModalGameName' },
        { label: 'Company', id: 'addModalCompany' },
        { label: 'Release Date', id: 'addModalReleaseDate', type: 'date' },
        { label: 'Category', id: 'addModalCategory' },
        { label: 'Image URL', id: 'addModalImage' },
        { label: 'Steam URL', id: 'addModalSteam' },
        { label: 'Description', id: 'addModalDescription' }
      ];

      addInputFields.forEach(field => {
        const mb3Div = document.createElement('div');
        mb3Div.classList.add('mb-3');

        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.classList.add('form-label');
        label.textContent = field.label;

        const input = document.createElement('input');
        input.type = field.type || 'text';
        input.classList.add('form-control');
        input.id = field.id;

        mb3Div.appendChild(label);
        mb3Div.appendChild(input);
        addForm.appendChild(mb3Div);
      });

      addModalBody.appendChild(addForm);

      const addModalFooter = document.createElement('div');
      addModalFooter.classList.add('modal-footer');

      const addCloseFooterButton = document.createElement('button');
      addCloseFooterButton.type = 'button';
      addCloseFooterButton.classList.add('btn', 'btn-secondary');
      addCloseFooterButton.setAttribute('data-bs-dismiss', 'modal');
      addCloseFooterButton.textContent = 'Close';
      const addSaveButton = document.createElement('button');
      addSaveButton.type = 'button';
      addSaveButton.classList.add('btn', 'btn-info');
      addSaveButton.id = 'addSave';
      addSaveButton.textContent = 'Add Game';
      addModalFooter.appendChild(addCloseFooterButton);
      addModalFooter.appendChild(addSaveButton);
      addModalContent.appendChild(addModalHeader);
      addModalContent.appendChild(addModalBody);
      addModalContent.appendChild(addModalFooter);
      addModalDialog.appendChild(addModalContent);
      addModalDiv.appendChild(addModalDialog);

      document.getElementById("myMain").appendChild(addModalDiv);

      modal = new bootstrap.Modal(addModalDiv); // modalı dinamik bir şekilde olusturdugumuz için modal yönetimiyle obje olusturduk

      addButton.setAttribute("data-bs-toggle", "modal");
      addButton.setAttribute("data-bs-target", "#addExampleModal");

      console.log(games.length);
    }

    // Modal'ı göster
    modal.show();
  });

  document.getElementById("myMain").addEventListener("click", (event) => {
    if (event.target && event.target.id === "addSave") {  //dinamik addsave butonunu yakaladim
      addGame(games); //event delegation 
    }
  });


  drop_button.addEventListener("click", () => {
    filterCategory(games);

  });

  company_drop.addEventListener("click", () => {
    filterCompanies(games);
  });

  searchButton.addEventListener("click", () => {
    searchWithInput(games);
  })


  document.getElementById("sortOptions").addEventListener("change", function () {
    sortGames(this.value, games);
  });



  section.appendChild(container);

}

export async function addGame(games) {


  let lastGame = games[games.length - 1];
  let newId;
  if (lastGame) {
    newId = String(Number(lastGame.id) + 1);  // eger oyun varsa eklenen oyun son oyunun idsinden bir fazla olarak eklenir.
  }
  else {
    newId = '1';
  }

  const gameData = {
    name: document.getElementById("addModalGameName").value,
    category: document.getElementById("addModalCategory").value,
    company: document.getElementById("addModalCompany").value,
    releasedate: document.getElementById("addModalReleaseDate").value,
    description: document.getElementById("addModalDescription").value,
    image: document.getElementById("addModalImage").value,
    steam_url: document.getElementById("addModalSteam").value,
    id: newId,
  };



  if (!gameData.name || !gameData.category || !gameData.company) {
    console.error("You need to insert game name, category,and company minumum");

    return;
  }


  try {
    const response = await Request.postJSON("http://localhost:3000/games", gameData);
    console.log("Success:", response);
    alert("The game was succesfully added !");
  } catch (error) {
    console.error("Error:", error);
  }



}

export async function deleteGame(game) {

  try {
    const result = await Request.deleteJSON(`http://localhost:3000/games/${game.id}`);
    alert(`${game.name} has been deleted !`);
    console.log(result);
  } catch (err) {
    console.log(err);
  }

}


export async function updateGames(game) {

  try {
    const updatedGame = await Request.putJSON(`http://localhost:3000/games/${game.id}`, game);
    console.log("The game was succesfully updated:", updatedGame);
  } catch (err) {
    console.error("The error was occurred:", err);
  }
}


export async function filterCategory(games) {

  let uniqueCategories = [...new Set(games.map(game => game.category))];  // unique olanlardan array olusturdum

  let dropdownMenu = document.getElementById("categoryDropdown");
  let gameContainer = document.getElementById("game-container");
  let rowContainer = document.getElementById("row-container");
  let drop_button = document.getElementById("drop-btn");
  let section = document.getElementById("myMain");
  let columnDiv = document.getElementById("column-div");


  dropdownMenu.innerHTML = "";


  uniqueCategories.forEach(category => {  // kategoriler dinamik bir şekilde eklendi
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.className = "dropdown-item";
    a.href = "#";
    a.textContent = category;

    a.setAttribute("data-category", category);
    li.appendChild(a);
    dropdownMenu.appendChild(li);


    a.addEventListener("click", () => {
      let gameCategory = a.getAttribute("data-category");
      console.log(a.getAttribute("data-category"));


      let filteredCategory = games.filter((game) => game.category === gameCategory);

      columnDiv.innerHTML = "";

      renderFilteredGames(filteredCategory);


      drop_button.addEventListener("click", () => {
        filterCategory(games);

      })

      gameContainer.appendChild(rowContainer);
      section.appendChild(gameContainer);


    });

  });

}


export async function filterCompanies(games) {

  let uniqueCompanies = [...new Set(games.map(game => game.company))];
  let dropdownMenu = document.getElementById("companyDropdown");
  let columnDiv = document.getElementById("column-div");

  dropdownMenu.innerHTML = "";

  uniqueCompanies.forEach(company => {  // kategoriler dinamik bir şekilde eklendi
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.className = "dropdown-item";
    a.href = "#";
    a.textContent = company;

    a.setAttribute("data-company", company);
    li.appendChild(a);
    dropdownMenu.appendChild(li);


    a.addEventListener("click", () => {
      let gameCompany = a.getAttribute("data-company");
      console.log(a.getAttribute("data-company"));



      let filteredCompanies = games.filter((game) => game.company === gameCompany);
      columnDiv.innerHTML = "";
      renderFilteredGames(filteredCompanies);

    });

  });

}




export async function searchWithInput(games) {
  const mySearchInput = document.getElementById("search-form");
  let columnDiv = document.getElementById("column-div");
  const searchEntry = mySearchInput.value.toLowerCase();

  const filteredEntry = games.filter(game =>
    game.name.toLowerCase().includes(searchEntry) ||
    game.category.toLowerCase().includes(searchEntry) ||
    game.company.toLowerCase().includes(searchEntry)


  );

  columnDiv.innerHTML = "";
  renderFilteredGames(filteredEntry);


}


export async function sortGames(criteria, games) {

  let columnDiv = document.getElementById("column-div");
  let sortedGames = [...games];

  if (criteria === "A-Z") {

    sortedGames.sort((a, b) => a.name.localeCompare(b.name));
  }
  else if (criteria === "Z-A") {
    sortedGames.sort((a, b) => b.name.localeCompare(a.name));
  }
  else if (criteria === "releaseDate") {
    sortedGames.sort((a, b) => new Date(b.releasedate) - new Date(a.releasedate));
  }



  columnDiv.innerHTML = "";
  renderFilteredGames(sortedGames);


}

export async function renderFilteredGames(filtered) {



  let rowContainer = document.getElementById("row-container");
  let columnDiv = document.getElementById("column-div");



  filtered.map((game) => {

    let col = document.createElement("div");
    let gameCard = document.createElement("div");
    let img = document.createElement("img");
    let gameContent = document.createElement("div");
    let gameTitle = document.createElement("h4");
    let companyName = document.createElement("h6");
    let reviewButton = document.createElement("button");
    let editButton = document.createElement("button");
    let removeButton = document.createElement("button");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3";
    gameCard.className = "game-card text-center";
    img.className = "game-pic";
    img.src = game.image;
    gameContent.className = "game-content p-3";
    gameTitle.className = "text-white game-title";
    gameTitle.textContent = game.name;
    companyName.className = "text-white game-company";
    companyName.textContent = `${"By"} ` + game.company;
    reviewButton.className = "btn btn-info btn-hover ";
    reviewButton.textContent = "Review";
    reviewButton.setAttribute("data-bs-toggle", "modal");
    reviewButton.setAttribute("data-bs-target", "#reviewModal");
    editButton.className = "btn btn-warning btn-hover";
    editButton.textContent = "Edit";
    removeButton.className = "btn btn-danger btn-hover";
    removeButton.textContent = "Remove";
    removeButton.id = "rmv-button";

    editButton.addEventListener("click", () => {
      // Önce eski modal varsa kaldır
      const oldModal = document.getElementById('editModal');
      if (oldModal) {
        oldModal.remove();
      }

      // Modal Document Object Model
      const modalDiv = document.createElement('div');
      modalDiv.classList.add('modal', 'fade');
      modalDiv.id = 'editModal';
      modalDiv.setAttribute('tabindex', '-1');
      modalDiv.setAttribute('aria-labelledby', 'exampleModalLabel');
      modalDiv.setAttribute('aria-hidden', 'true');
      const modalDialog = document.createElement('div');
      modalDialog.classList.add('modal-dialog');
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
      const modalHeader = document.createElement('div');
      modalHeader.classList.add('modal-header');
      const modalTitle = document.createElement('h1');
      modalTitle.classList.add('modal-title', 'fs-5');
      modalTitle.id = 'modalTitle';
      modalTitle.textContent = 'Edit Game';
      const closeButton = document.createElement('button');
      closeButton.type = 'button';
      closeButton.classList.add('btn-close');
      closeButton.setAttribute('data-bs-dismiss', 'modal');
      closeButton.setAttribute('aria-label', 'Close');
      modalHeader.appendChild(modalTitle);
      modalHeader.appendChild(closeButton);
      const modalBody = document.createElement('div');
      modalBody.classList.add('modal-body');
      const form = document.createElement('form');


      const inputFields = [
        { label: 'Game Name', id: 'modalGameName' },
        { label: 'Company', id: 'modalCompany' },
        { label: 'Release Date', id: 'modalReleaseDate', type: 'date' },
        { label: 'Category', id: 'modalCategory' },
        { label: 'Image URL', id: 'modalImage' },
        { label: 'Steam URL', id: 'modalSteam' },
        { label: 'Description', id: 'modalDescription' }
      ];

      inputFields.forEach(field => {
        const mb3Div = document.createElement('div');
        mb3Div.classList.add('mb-3');
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.classList.add('form-label');
        label.textContent = field.label;
        const input = document.createElement('input');
        input.type = field.type || 'text';
        input.classList.add('form-control');
        input.id = field.id;

        mb3Div.appendChild(label);
        mb3Div.appendChild(input);
        form.appendChild(mb3Div);
      });

      modalBody.appendChild(form);

      const modalFooter = document.createElement('div');
      modalFooter.classList.add('modal-footer');
      const closeFooterButton = document.createElement('button');
      closeFooterButton.type = 'button';
      closeFooterButton.classList.add('btn', 'btn-secondary');
      closeFooterButton.setAttribute('data-bs-dismiss', 'modal');
      closeFooterButton.textContent = 'Close';
      const saveButton = document.createElement('button');
      saveButton.type = 'button';
      saveButton.classList.add('btn', 'btn-info');
      saveButton.id = 'save';
      saveButton.textContent = 'Save changes';
      modalFooter.appendChild(closeFooterButton);
      modalFooter.appendChild(saveButton);
      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalBody);
      modalContent.appendChild(modalFooter);
      modalDialog.appendChild(modalContent);
      modalDiv.appendChild(modalDialog);
      document.getElementById("myMain").appendChild(modalDiv);
      //Her edite tıklandıgında tıklanılan verinin bilgilerini modalda kullanıcıya gösterdim.
      document.getElementById("modalGameName").value = game.name;
      document.getElementById("modalCategory").value = game.category;
      document.getElementById("modalCompany").value = game.company;
      document.getElementById("modalReleaseDate").value = game.releasedate;
      document.getElementById("modalDescription").value = game.description;
      document.getElementById("modalImage").value = game.image;
      document.getElementById("modalSteam").value = game.steam_url;

      // Bootstrap Modal'ı elle aç
      const modal = new bootstrap.Modal(document.getElementById('editModal'));
      modal.show();

      saveButton.addEventListener("click", () => {
        game.name = document.getElementById("modalGameName").value;
        game.category = document.getElementById("modalCategory").value;
        game.company = document.getElementById("modalCompany").value;
        game.releasedate = document.getElementById("modalReleaseDate").value;
        game.description = document.getElementById("modalDescription").value;
        game.image = document.getElementById("modalImage").value;
        game.steam_url = document.getElementById("modalSteam").value;

        console.log(game.name);
        updateGames(game);

        // Modalı kapat
        modal.hide();
      });
    });


    reviewButton.addEventListener("click", () => {

      let existingModal = document.getElementById("reviewModal"); //önceden oluşturulmus modal var ise
      if (existingModal) {
        let existingModalInstance = bootstrap.Modal.getInstance(existingModal); //bootstrap modalına ait ise 
        if (existingModalInstance) {
          existingModalInstance.hide(); // bootstrap modalını kapat 
        }
        existingModal.remove(); // html'den kaldirdik.
      }

      const modalDiv = document.createElement("div");
      modalDiv.className = "modal fade";
      modalDiv.id = "reviewModal";
      modalDiv.tabIndex = "-1";
      modalDiv.setAttribute("aria-hidden", "true");
      const modalDialog = document.createElement("div");
      modalDialog.className = "modal-dialog modal-dialog-centered modal-dialog-scrollable";
      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";
      const modalHeader = document.createElement("div");
      modalHeader.className = "modal-header";
      const modalTitle = document.createElement("h5");
      modalTitle.className = "modal-title";
      modalTitle.id = "game-title";
      modalTitle.textContent = game.name;
      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "btn-close";
      closeButton.setAttribute("data-bs-dismiss", "modal");
      closeButton.setAttribute("aria-label", "Close");
      modalHeader.appendChild(modalTitle);
      modalHeader.appendChild(closeButton);
      const modalBody = document.createElement("div");
      modalBody.className = "modal-body";
      const gameImage = document.createElement("img");
      gameImage.id = "game-image";
      gameImage.src = game.image || "";
      gameImage.alt = "Game Image";
      const gameDescription = createInfoSection("Game Description", game.description);
      const gameCategory = createInfoSection("Game Category", game.category);
      const gameDate = createInfoSection("Release Date", game.releasedate);
      const gameCompany = createInfoSection("Company", game.company);
      const steamLink = document.createElement("a");
      steamLink.href = game.steam_url;
      steamLink.textContent = game.steam_url;
      steamLink.target = "_blank";
      const gameSteam = createInfoSection("Steam URL", steamLink);
      modalBody.appendChild(gameImage);
      modalBody.appendChild(gameDescription);
      modalBody.appendChild(gameCategory);
      modalBody.appendChild(gameDate);
      modalBody.appendChild(gameCompany);
      modalBody.appendChild(gameSteam);
      const modalFooter = document.createElement("div");
      modalFooter.className = "modal-footer";
      const closeFooterButton = document.createElement("button");
      closeFooterButton.type = "button";
      closeFooterButton.className = "btn btn-secondary";
      closeFooterButton.setAttribute("data-bs-dismiss", "modal");
      closeFooterButton.textContent = "Close";
      modalFooter.appendChild(closeFooterButton);

      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalBody);
      modalContent.appendChild(modalFooter);
      modalDialog.appendChild(modalContent);
      modalDiv.appendChild(modalDialog);

      document.getElementById("myMain").appendChild(modalDiv);

      var newModal = new bootstrap.Modal(modalDiv); // yeni modal nesnesi olusturduk 
      newModal.show();      //gösterdik


      modalDiv.addEventListener("hidden.bs.modal", () => {
        modalDiv.remove();  //modali domdan kaldirdim.
      });
    });

    function createInfoSection(title, content) {
      const section = document.createElement("div");
      const heading = document.createElement("h6");
      heading.textContent = title;

      const paragraph = document.createElement("p");
      if (typeof content === "string") {
        paragraph.textContent = content;
      } else {
        paragraph.appendChild(content);
      }

      section.appendChild(heading);
      section.appendChild(paragraph);
      return section;
    }

    removeButton.addEventListener("click", () => {
      deleteGame(game);
    })

    gameContent.appendChild(gameTitle);
    gameContent.appendChild(companyName);
    gameContent.appendChild(reviewButton);
    gameContent.appendChild(editButton);
    gameContent.appendChild(removeButton);
    gameCard.appendChild(img);
    gameCard.appendChild(gameContent);
    col.appendChild(gameCard);
    columnDiv.appendChild(col);
    rowContainer.appendChild(columnDiv);

  });
}
