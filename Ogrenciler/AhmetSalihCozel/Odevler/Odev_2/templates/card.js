
function card(gameObj){
    let ui = new UI(gameObj);
    let colDiv = document.createElement("div");
    colDiv.classList.add("col-md-6", "col-lg-4","col-sm-12","d-flex","cardCss");

    colDiv.setAttribute("item-id",gameObj.id)

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mb-3","bg-dark");

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

    let inceleButton = document.createElement("button");
    inceleButton.classList.add("cyberButton", "infoBtn");
    inceleButton.setAttribute("data-bs-target","#editAddModal")
    inceleButton.setAttribute("data-bs-toggle","modal")
    let infoSvg = document.createElement("i")
    infoSvg.classList.add("bi","bi-info-square")
    inceleButton.append(infoSvg)
    inceleButton.onclick = function () { ui.infoCard(); };

    let editButton = document.createElement("button");
    editButton.classList.add("cyberButton", "editBtn");
    editButton.setAttribute("data-bs-target","#editAddModal")
    editButton.setAttribute("data-bs-toggle","modal")
    let editSvg = document.createElement("i")
    editSvg.classList.add("bi","bi-pencil-square")
    editButton.append(editSvg)
    editButton.onclick = function () { ui.editCard(); };

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("cyberButton", "deleteBtn");
    let deleteSvg = document.createElement("i")
    deleteSvg.classList.add("bi","bi-trash")
    deleteButton.append(deleteSvg)
    deleteButton.setAttribute("data-bs-target","#editAddModal")
    deleteButton.setAttribute("data-bs-toggle","modal")
    deleteButton.onclick = function () { ui.deleteCard(colDiv,gameObj); };

    let steamButton = document.createElement("button");
    steamButton.classList.add("cyberButton", "steamBtn");
    steamButton.addEventListener("click",()=>{
        window.open(gameObj.steamURL, '_blank')
    })
    let steamSvg = document.createElement("i")
    steamSvg.classList.add("bi","bi-steam")
    steamButton.append(steamSvg)

    let colOne = document.createElement("div");
    colOne.classList.add("col-2", "d-flex", "flex-column", "justify-content-between");
    colOne.append(inceleButton,editButton)

    let colTwo = document.createElement("div");
    colTwo.classList.add("col-8", "d-flex", "flex-column", "justify-content-between","py-4");
    colTwo.append(title,director,year,genre,gameText)

    let colThree = document.createElement("div");
    colThree.classList.add("col-2", "d-flex", "flex-column", "justify-content-between");
    colThree.append(steamButton,deleteButton)

    let row = document.createElement("div");
    row.classList.add("row","d-flex", "align-items-stretch","h-100");
    row.append(colOne,colTwo,colThree)

    cardBody.appendChild(row);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBody);

    colDiv.appendChild(cardDiv);
    
    return colDiv;
}