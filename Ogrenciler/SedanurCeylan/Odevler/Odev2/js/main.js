
//sayfa yüklendiğinde oyunları getirme
document.addEventListener("DOMContentLoaded", () => {
    fetchGames();
});

//oyunları getirme
function fetchGames() {
    fetch("./oyun.json")
        .then(response => response.json())
        .then(data => {
            const games = data.games; 
            const container = document.querySelector("#oyunlar .container .row");
            container.innerHTML = ""; 
            games.forEach(game => container.appendChild(createCard(game)));
        })
        .catch(err => console.error("Hata:", err));
}

//oyun kartı oluşturma
function createCard(game) {
    const card = document.createElement("div");
    card.className = "col mb-4";
    card.id = `game-${game.id}`;

    const cardContent = document.createElement("div");
    cardContent.className = "card bg-secondary border-agold";

    const image = document.createElement("img");
    image.src = game.image;
    image.className = "card-img-top";
    image.style.height = "500px";
    image.alt = game.name;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body text-atextcolor d-flex flex-column justify-content-between";

    const title = document.createElement("h5");
    title.className = "card-title oyunAdi fs-32";
    title.textContent = game.name;

    const date = document.createElement("p");
    date.className = "card-text";
    date.textContent = `Çıkış Tarihi: ${game.date}`;

    const developer = document.createElement("p");
    developer.className = "card-text";
    developer.textContent = `Yapımcı: ${game.developer}`;

    const genre = document.createElement("p");
    genre.className = "card-text";
    genre.textContent = `Kategori: ${game.category}`;

    const description = document.createElement("p");
    description.className = "card-text";
    description.textContent = `Açıklama: ${game.description}`;

    const buttons = document.createElement("div");
    buttons.className = "buttons d-flex justify-content-center align-items-center gap-3";

    const link = document.createElement("a");
    link.href = game.url;
    link.className = "btn btn-alightblue text-atextcolor";
    link.textContent = "Oyuna Git";
    link.target = "_blank";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.className = "btn btn-apink text-atextcolor";
    deleteButton.onclick = () => deleteGame(game.id);

    const updateButton = document.createElement("button");
    updateButton.textContent = "Güncelle";
    updateButton.className = "btn btn-agold text-atextcolor";
    updateButton.onclick = () => updateGame(game.id, { name: "Yeni Oyun Adı", description: "Yeni Açıklama" });

    const detayButton = document.createElement("button");
    detayButton.textContent = "Detay";
    detayButton.className = "btn btn-outline-agold text-atextcolor";
    detayButton.onclick = () => {
        modalAc(game); 
    };

    buttons.append(link, deleteButton, updateButton,detayButton);
    cardBody.append(title, date, developer, genre, description, buttons);
    cardContent.append(image, cardBody);
    card.append(cardContent);

    return card;
}

//oyun silme
function deleteGame(gameId) {
    if (confirm("Bu oyunu silmek istediğinize emin misiniz?")) {
        const card = document.getElementById(`game-${gameId}`);
        if (card) card.remove();
        console.log(`Oyun ID ${gameId} silindi.`);
    }
}

document.getElementById("addFilmBtn").addEventListener("click", addGame);


//inputları temizlemek için
function reload(){
    document.getElementById("oyunName").value = "";
    document.getElementById("oyunDate").value = "";
    document.getElementById("yapimci").value = "";
    document.getElementById("categorySelect").value = "";
    document.getElementById("oyunAciklama").value = "";
    document.getElementById("oyunPhoto").value = "";
    document.getElementById("url").value = "";
}

//oyun ekleme
function addGame() {
    console.log("tıklandı");
    const name = document.getElementById("oyunName").value.trim();
    const description = document.getElementById("oyunAciklama").value.trim();
    const date = document.getElementById("oyunDate").value;
    const image = document.getElementById("oyunPhoto").value.trim();
    const developer = document.getElementById("yapimci").value.trim();
    const url = document.getElementById("url").value.trim();
    const category = document.getElementById("categorySelect").value;

    if (!name || !description || !date || !image || !developer || !url || !category) {
        alert("Lütfen tüm alanları doldurunuz!");
        return;
    }

    const newGame = {
        id: Date.now(),
        name,
        description,
        date,
        image,
        developer,
        url,
        category,
    };

    document.querySelector("#oyunlar .container .row").appendChild(createCard(newGame));
    console.log("Yeni oyun eklendi:", newGame);

    reload();
}

function updateGame(){
    console.log("Güncelleme tıklandı");
}

function modalAc(game) {
    const modal = document.createElement("div");
    modal.className = "modal fade d-flex bg-primary";
    modal.id = `modal-${game.id}`;
    modal.tabIndex = -1;
    modal.setAttribute("aria-labelledby", `modalLabel-${game.id}`);
    modal.setAttribute("aria-hidden", "true");

    const modalDialog = document.createElement("div");
    modalDialog.className = "modal-dialog modal-lg";
    
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content bg-primary text-atextcolor";
    
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    
    const modalTitle = document.createElement("h5");
    modalTitle.className = "modal-title";
    modalTitle.id = `modalLabel-${game.id}`;
    modalTitle.textContent = `Detaylar: ${game.name}`;

    const closeButton = document.createElement("button");
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");

    modalHeader.append(modalTitle, closeButton);

    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";

    const modalImage = document.createElement("img");
    modalImage.src = game.image;
    modalImage.className = "img-fluid mb-4 max-h-500";
    modalImage.alt = game.name;
    
    const modalDescription = document.createElement("p");
    modalDescription.textContent = game.description;

    const modalDeveloper = document.createElement("p");
    modalDeveloper.textContent = `Yapımcı: ${game.developer}`;

    const modalDate = document.createElement("p");
    modalDate.textContent = `Çıkış Tarihi: ${game.date}`;

    const modalCategory = document.createElement("p");
    modalCategory.textContent = `Kategori: ${game.category}`;

    modalBody.append(modalImage, modalDescription, modalDeveloper, modalDate, modalCategory);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    
    const closeModalButton = document.createElement("button");
    closeModalButton.className = "btn btn-ared";
    closeModalButton.setAttribute("data-bs-dismiss", "modal");
    closeModalButton.textContent = "Kapat";

    modalFooter.appendChild(closeModalButton);

    modalContent.append(modalHeader, modalBody, modalFooter);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);

    document.body.appendChild(modal); 
    const modalInstance = new bootstrap.Modal(modal); 
    modalInstance.show();

     // Modal kapandıktan sonra event listener'ların doğru çalışması için
     modal.addEventListener("hidden.bs.modal", function () {
        modal.remove();
        modal.addGame();
        modal.updateGame();
        modal.reload();
        modal.detayButton();
    });
}
