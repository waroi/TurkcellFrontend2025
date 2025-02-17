function infoModal(gameObj){
    let modalBody = document.getElementById("modalBody")

    while (modalBody.firstChild) {modalBody.removeChild(modalBody.lastChild);}

    console.log(gameObj)
    let img = document.createElement("img");
    img.src = gameObj.imageURL;
    img.alt = gameObj.gameName;
    img.classList.add("card-img-top",);
    img.style.objectFit = "cover";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body","align-left","p-0");

    let title = document.createElement("h5");
    title.classList.add("card-title", "text-left","text-white");
    title.textContent = gameObj.gameName;

    let director = document.createElement("p");
    director.classList.add("card-text", "text-left","text-white");
    director.textContent = gameObj.producer;

    let year = document.createElement("p");
    year.classList.add("card-text", "text-left","text-white");
    year.textContent = gameObj.releaseDate;

    let genre = document.createElement("p");
    genre.classList.add("card-text", "text-left","text-white");
    genre.textContent = gameObj.category;

    
    let gameText = document.createElement("p");
    gameText.classList.add("card-text", "text-left","text-white");
    gameText.style.fontWeight = "600"
    gameText.textContent = gameObj.gameText;

    modalBody.classList.add("col-8", "d-flex", "flex-column", "justify-content-between","py-4");
        
    document.getElementById("modalTitle").textContent = title.textContent
    modalBody.append(img,director,year,genre,gameText)
}

function editModal(gameObj){
    let ui = new UI(gameObj);
    let dt = new Data()
    let modalBody = document.getElementById("modalBody")

    while (modalBody.firstChild) {modalBody.removeChild(modalBody.lastChild);}

    let img = document.createElement("img");
    img.src = gameObj.imageURL;
    img.alt = gameObj.gameName;
    img.classList.add("card-img-top",);
    img.style.objectFit = "cover";
    let imgInput = ui.textOrInput(img)

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body","align-left","p-0");

    let title = document.createElement("h5");
    title.classList.add("card-title", "text-left","text-white");
    title.textContent = gameObj.gameName;
    let titleInput = ui.textOrInput(title)

    let director = document.createElement("p");
    director.classList.add("card-text", "text-left","text-white");
    director.textContent = gameObj.producer;
    let directorInput = ui.textOrInput(director)

    let year = document.createElement("p");
    year.classList.add("card-text", "text-left","text-white");
    year.textContent = gameObj.releaseDate;
    let yearInput = ui.textOrInput(year)


    let genre = document.createElement("p");
    genre.classList.add("card-text", "text-left","text-white");
    genre.textContent = gameObj.category;
    let genreInput = ui.textOrInput(genre)
    
    let gameText = document.createElement("p");
    gameText.classList.add("card-text", "text-left","text-white");
    gameText.style.fontWeight = "600"
    gameText.textContent = gameObj.gameText;
    let gameTextInput = ui.textOrInput(gameText)


    modalBody.classList.add("col-8", "d-flex", "flex-column", "justify-content-between","py-4");
    modalBody.append(img,imgInput,title,titleInput,director,directorInput,year,yearInput,genre,genreInput,gameText,gameTextInput)


    let saveButton = document.getElementById("saveButton")
    saveButton.addEventListener("click",()=>{
        let editedGame = new Game(title.textContent,gameText.textContent,genre.textContent,year.textContent,img.src,director.textContent)
        new Data("http://localhost:3000/games").updateGame(gameObj.id,editedGame)
    })
}

function addModal(){
    let modalBody = document.getElementById("modalBody")
    let modalTitle = document.getElementById("modalTitle")

    modalTitle.textContent = "Oyun Ekle"

    while (modalBody.firstChild) {modalBody.removeChild(modalBody.lastChild);}

    let imgInput = document.createElement("input");
    imgInput.classList.add("steamBtn","mb-1")
    imgInput.value = "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg?t=1736424367";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body","align-left","p-0");

    let titleInput = document.createElement("input");
    titleInput.classList.add("steamBtn","mb-1")
    titleInput.placeholder = "Oyun İsmi"


    let directorInput = document.createElement("input");
    directorInput.classList.add("steamBtn","mb-1")
    directorInput.placeholder = "Oyun Yapımcısı"

    let yearInput = document.createElement("input");
    yearInput.classList.add("steamBtn","mb-1")
    yearInput.placeholder = "Çıkış Tarihi"


    let genreInput = document.createElement("input");
    genreInput.classList.add("steamBtn","mb-1")
    genreInput.placeholder = "Kategori"

    
    let gameTextInput = document.createElement("input");
    gameTextInput.classList.add("steamBtn","mb-1")
    gameTextInput.placeholder = "Açıklama"

    let steamURLInput = document.createElement("input");
    steamURLInput.classList.add("steamBtn","mb-1")
    gameTextInput.placeholder = "Steam URL"


    modalBody.classList.add("col-8", "d-flex", "flex-column", "justify-content-between","py-4");
    modalBody.append(imgInput,titleInput,directorInput,yearInput,genreInput,gameTextInput)

    let saveButton = document.getElementById("saveButton")
    saveButton.textContent = "Oyun Ekle"
    saveButton.addEventListener("click",()=>{
        let addingGame = new Game(titleInput.value,gameTextInput.value,genreInput.value,yearInput.value,imgInput.value,directorInput.value,steamURLInput.value)
        console.log(addingGame)
        new Data("http://localhost:3000/games").addGame(addingGame)
    })
}

function deleteModal(card,onConfirm){
    let modalBody = document.getElementById("modalBody")
    let modalFooter = document.getElementById("modalFooter")

    while (modalBody.firstChild) {modalBody.removeChild(modalBody.lastChild);}

    modalBody.textContent = "Bu oyunu silmek istediğinizden emin misiniz?"
    let yesButton = document.getElementById("saveButton")
    let noButton = document.getElementById("closeButton")

    yesButton.textContent="Evet"

    noButton.textContent="Hayır"
    noButton.classList = ""
    noButton.classList.add("deleteBtn","btn","opacity-100")

    yesButton.remove();
    noButton.remove();

    // Ters sırayla tekrar ekle (Önce "Hayır", sonra "Evet")
    modalFooter.appendChild(yesButton);
    modalFooter.appendChild(noButton);

    yesButton.addEventListener("click",()=>{
        console.log(card)
        new Data("http://localhost:3000/games").deleteGame(card.id)
        onConfirm(true)
    })
    yesButton.setAttribute("data-bs-dismiss","modal")
}