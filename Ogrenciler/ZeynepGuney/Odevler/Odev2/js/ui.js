export class UI {
    constructor(games) {
        this.createGameCardsCallCount = 0;
        this.updateIndex = null;
        this.games = games;
        this.gameWrap = document.getElementById("games-wrap");
        this.addGameButton = document.querySelector(".btn-add");
        this.saveChangesButton = document.getElementById("changes");
        this.createHomeSection();
        this.createAboutSection();
        // this.createGamesSection();
        // this.createGameCards(this.games);
        this.createContactSection();
        this.addGameButton.addEventListener("click", this.openAddGameModal.bind(this));
        this.saveChangesButton.addEventListener("click", () => this.saveChanges());
    }
    createHomeSection() {
        const homeSection = document.createElement("section");
        homeSection.className = "home d-flex flex-wrap h-100 mb-20";

        const leftSection = document.createElement("div");
        leftSection.className = "home-left position-relative col-12 col-lg-9";

        const gradientBg = document.createElement("div");
        gradientBg.className = "gradient-bg position-absolute z-1 w-50 h-100 top-0 start-0";

        const imgWrapper = document.createElement("div");
        imgWrapper.className = "home-img-wrapper position-absolute z-2 mt-5 start-0 bottom-0 col-6";
        const img = document.createElement("img");
        img.src = "./assets/home-img.png";
        img.className = "home-img";
        imgWrapper.append(img);

        const bulletWrapper = document.createElement("div");
        bulletWrapper.className = "bullet"; 

        const bulletImg = document.createElement("img");
        bulletImg.src = "./assets/bullet.png";
        bulletWrapper.append(bulletImg);  

        imgWrapper.append(bulletWrapper);

        const rightSection = document.createElement("div");
        rightSection.className = "home-right d-flex flex-column justify-content-center align-items-center p-4 col-12 col-lg-6";

        const titleWrapper = document.createElement("div");
        titleWrapper.className = "home-title-wrapper mb-4 text-center text-white";
        const title = document.createElement("h1");
        title.className = "home-title fw-bold fs-128 text-primary";
        title.textContent = "Game'Z";
        titleWrapper.append(title);

        const sloganBox = document.createElement("div");
        sloganBox.className = "slogan-box d-flex align-items-center justify-content-center p-5";

        const slogan = document.createElement("p");
        slogan.className = "slogan-text text-white text-center fw-bold fs-20";
        slogan.textContent = "Game'Z – Gerçek Oyuncuların Adresi";

        sloganBox.append(slogan);
        rightSection.append(titleWrapper, sloganBox);

        leftSection.append(gradientBg, imgWrapper);
        homeSection.append(leftSection, rightSection);

        document.querySelector("#home").append(homeSection);
    }
    createAboutSection() {
        const aboutSection = document.createElement("section");
        aboutSection.className = "about-us d-flex flex-wrap my-20";

        const leftSection = document.createElement("div");
        leftSection.className = "about-left col-12 col-lg-4 position-relative";

        const img = document.createElement("img");
        img.src = "./assets/about.png";
        img.className = "about-img w-100 h-100";
        leftSection.append(img);

        const rightSection = document.createElement("div");
        rightSection.className = "about-right col-12 col-lg-8 d-flex flex-column justify-content-center align-items-center p-4";

        const titleWrapper = document.createElement("div");
        titleWrapper.className = "about-title-wrapper mb-4";
        const title = document.createElement("h2");
        title.className = "about-title fs-50 fw-bold text-primary";
        title.textContent = "HAKKIMIZDA";
        titleWrapper.append(title);

        const textList = document.createElement("ul");
        textList.className = "about-text-list list-unstyled text-white";

        const listItems = [
            "Game'Z, oyun dünyasındaki en güncel ve detaylı bilgileri sunan bir platformdur.",
            "Game'Z’de Neler Bulabilirsiniz?",
            "Oyunların çıkış tarihleri ve platform bilgileri.",
            "Kategorilerine göre ayrılmış aksiyon, strateji, RPG, spor ve daha fazlası.",
            "Eğer bir oyun hakkında bilgi arıyorsanız, Game'Z her zaman yanınızda."
        ];

        listItems.forEach(item => {
            const li = document.createElement("li");
            li.className = "about-text-item d-flex align-items-center mb-2 fs-18";
            const point = document.createElement("span");
            point.className = "point rounded me-3";
            li.append(point, document.createTextNode(item));
            textList.append(li);
        });

        rightSection.append(titleWrapper, textList);
        aboutSection.append(leftSection, rightSection);

        document.querySelector("#about-us").append(aboutSection);
    }
    // createGamesSection() {
    //     const gamesSection = document.querySelector('#gamesSection');
    // }
    addGame() {
        const newGame = {
            id: this.games.length + 1,
            poster: document.getElementById('game-poster-url').value,
            name: document.getElementById('game-name').value,
            type: document.getElementById('game-type').value,
            date: document.getElementById('game-year').value,
            steam_url: document.getElementById('game-steam-url').value,
            director: document.getElementById('game-director').value,
            description: document.getElementById('game-description').value
        };
        this.games.push(newGame);
        this.createGameCards(this.games);
        this.createGameCardsCallCount++;
        console.log("createGameCards çağrıldı addGame, sayac: " + this.createGameCardsCallCount);
        console.log("Yeni oyun eklendi:", newGame);
    }
    openAddGameModal() {
        document.getElementById("game-poster-url").value = "";
        document.getElementById("game-name").value = "";
        document.getElementById("game-type").value = "";
        document.getElementById("game-year").value = "";
        document.getElementById("game-steam-url").value = "";
        document.getElementById("game-director").value = "";
        document.getElementById("game-description").value = "";
        this.updateIndex = null;
        const modal = new bootstrap.Modal(document.getElementById('gameModal'));
        modal.show();
    }
    openGameModal(game) {
        document.getElementById('modalTitle').textContent = game.name;
        document.getElementById('modalPoster').textContent = game.poster;
        document.getElementById('modalName').textContent = game.name;
        document.getElementById('modalType').textContent = game.type;
        document.getElementById('modalPrice').textContent = game.date;
        document.getElementById('modalSteam').textContent = game.steam_url;
        document.getElementById('modalDirector').textContent = game.director;
        document.getElementById('modalDescription').textContent = game.description;

        const modal = new bootstrap.Modal(document.getElementById('gameModals'));
        modal.show();
    }
    createCard(game, index) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card p-3 h-100";
        cardDiv.id = `game-card-${game.id}`;

        const colDiv = document.createElement("div");
        colDiv.className = "col-lg-3 col-md-6 col-sm-12 mb-5";

        const img = document.createElement("img");
        img.src = game.poster;
        img.className = "card-img-top";
        img.alt = `${game.name} Poster`;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body p-3 h-100 d-flex flex-column p-3";
        cardBody.style.height = "100%";

        const title = document.createElement("h5");
        title.className = "card-title h-25 fw-bold";
        title.textContent = game.name;
        title.style.cursor = 'pointer';
        title.onclick = () => this.openGameModal(game);

        const description = document.createElement("p");
        description.className = "card-text";
        description.textContent = `Açıklama: ${game.description}`;

        const director = document.createElement("p");
        director.className = "card-text";
        director.textContent = `Yapımcı: ${game.director}`;

        const date = document.createElement("p");
        date.className = "card-text";
        date.textContent = `Yıl: ${game.date}`;

        const type = document.createElement("p");
        type.className = "card-text";
        type.textContent = `Tür: ${game.type}`;

        const steam_url = document.createElement("a");
        steam_url.className = "game-steam-url fw-bold text-black";
        steam_url.href = game.steam_url;
        steam_url.target = "_blank";
        steam_url.textContent = "Steam";

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "d-flex justify-content-center mt-2 w-100";

        const updateButton = this.createUpdateButton('btn btn-update btn-primary mx-2', 'Güncelle', () => this.openUpdateModal(index));

        const deleteButton = this.createButton('btn btn-delete btn-purple', 'Sil', () => this.deleteGame(game.id));
        buttonContainer.append(updateButton, deleteButton);
        cardBody.append(title, description, director, date, type, steam_url, buttonContainer);
        cardDiv.append(img, cardBody);
        colDiv.append(cardDiv);

        return colDiv;
    }
    createButton(className, text, onClick) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = className;
        button.onclick = onClick;
        const span = document.createElement('span');
        span.className = 'text';
        span.textContent = text;
        button.append(span);
        return button;
    }
    createUpdateButton(className, text, onClick) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = className;
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#gameModal');
        button.onclick = onClick;
        const span = document.createElement('span');
        span.className = 'text';
        span.textContent = text;
        button.append(span);
        return button;
    }
    getUpdateIndex() {
        return this.updateIndex;
    }
    setUpdateIndex(index) {
        this.updateIndex = index;
    }
    openUpdateModal(index) {
        this.updateIndex = index;
        const game = this.games[index];

        document.getElementById('game-poster-url').value = game.poster || '';
        document.getElementById('game-name').value = game.name || '';
        document.getElementById('game-type').value = game.type || '';
        document.getElementById('game-year').value = game.date || '';
        document.getElementById('game-steam-url').value = game.steam_url || '';
        document.getElementById('game-director').value = game.director || '';
        document.getElementById('game-description').value = game.description || '';

        const modal = new bootstrap.Modal(document.getElementById('gameModal'));
        modal.show();
    }
    updateGameCard(index, updatedGame) {
        const gameCard = document.getElementById(`game-card-${index}`);
        if (!gameCard) {
            console.error(`Game card with index ${index} not found!`);
            return;
        }
        const nameElement = gameCard.querySelector('.card-title');
        const descriptionElement = gameCard.querySelector('.card-text:nth-of-type(1)');
        const directorElement = gameCard.querySelector('.card-text:nth-of-type(2)');
        const yearElement = gameCard.querySelector('.card-text:nth-of-type(3)');
        const typeElement = gameCard.querySelector('.card-text:nth-of-type(4)');
        const steamUrlElement = gameCard.querySelector('.game-steam-url');
        const posterElement = gameCard.querySelector('.card-img-top');

        if (!nameElement || !descriptionElement || !directorElement || !yearElement || !typeElement || !steamUrlElement || !posterElement) {
            console.error("Oyun kartında bazı öğeler eksik!");
            return;
        }
        nameElement.textContent = updatedGame.name;
        descriptionElement.textContent = `Açıklama: ${updatedGame.description}`;
        directorElement.textContent = `Yapımcı: ${updatedGame.director}`;
        yearElement.textContent = `Yıl: ${updatedGame.date}`;
        typeElement.textContent = `Tür: ${updatedGame.type}`;
        steamUrlElement.href = updatedGame.steam_url;
        posterElement.src = updatedGame.poster;

        console.log(`Oyun kartı güncellendi: ${updatedGame.name}`);
    }
    saveChanges() {

        // bunu incele
        if (this.updateIndex !== null) {
            const updatedGame = {
                id: this.games[this.updateIndex].id,
                poster: document.getElementById('game-poster-url').value,
                name: document.getElementById('game-name').value,
                type: document.getElementById('game-type').value,
                date: document.getElementById('game-year').value,
                steam_url: document.getElementById('game-steam-url').value,
                director: document.getElementById('game-director').value,
                description: document.getElementById('game-description').value
            };

            this.games[this.updateIndex] = updatedGame;
            // this.updateGameCard(this.updateIndex, updatedGame);
            console.log("Oyun güncellendi:", updatedGame);
        } else {
            this.addGame();
            console.log("else girdi")
        }
    }
    createGameCards(games) {
        if (this.gameWrap) {
            this.gameWrap.innerHTML = '';
            games.forEach((game, index) => {
                const card = this.createCard(game, index);
                this.gameWrap.append(card);
            });
        }
    }
    deleteGame(gameId) {
        const gameToDelete = this.games.find(game => game.id === gameId);
        if (gameToDelete) {
            const index = this.games.indexOf(gameToDelete);
            this.games.splice(index, 1);
            this.createGameCards(this.games);
            alert('Oyun başarıyla silindi!');

        }
    }
    removeGameCard(gameId) {
        const gameCard = document.getElementById(`game-card-${gameId}`);
        console.log(`ID'si game-card-${gameId} olan kartı kaldırıyor.`);
        if (gameCard) {
            gameCard.remove();
            console.log(`ID'si game-card-${gameId} olan kart DOM'dan kaldırıldı.`);
        } else {
            console.error(`ID'si game-card-${gameId} olan kart DOM'da bulunamadı.`);
        }
    }
    createContactSection() {
        const contactSection = document.createElement("section");
        contactSection.className = "contact d-flex flex-wrap my-20";

        const leftSection = document.createElement("div");
        leftSection.className = "contact-left col-12 col-lg-6 position-relative d-flex align-items-center justify-content-center p-5";

        const gradientBg = document.createElement("div");
        gradientBg.className = "gradient-bg position-absolute z-1 w-100 h-100 top-0 start-0";

        const formWrapper = document.createElement("div");
        formWrapper.className = "form-wrapper d-flex flex-column justify-content-center align-items-center p-3 bg-white rounded col-12 col-lg-6 z-2";

        const form = document.createElement("form");
        form.className = "w-100";

        const formTitle = document.createElement("h2");
        formTitle.className = "form-title mb-4 text-purple";
        formTitle.textContent = "Bize Ulaşın";

        const nameInput = this.createInput("Ad Soyad", "text");
        const emailInput = this.createInput("E-mail", "email");
        const messageInput = this.createTextarea("Mesaj");

        const errorMessage = document.createElement("div");
        errorMessage.className = "text-danger mt-2";
        errorMessage.style.display = "none";

        const submitButton = document.createElement("button");
        submitButton.className = "btn btn-purple w-100 mt-4 text-white";
        submitButton.textContent = "Gönder";
        submitButton.type = "submit";

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const nameValue = nameInput.querySelector("input").value.trim();
            const emailValue = emailInput.querySelector("input").value.trim();
            const messageValue = messageInput.querySelector("textarea").value.trim();

            if (!nameValue || !emailValue || !messageValue) {
                errorMessage.textContent = "Lütfen tüm alanları doldurun!";
                errorMessage.style.display = "block";
            } else {
                errorMessage.style.display = "none";
                console.log("Ad Soyad:", nameValue);
                console.log("E-mail:", emailValue);
                console.log("Mesaj:", messageValue);
                form.reset();
            }
        });

        form.append(formTitle, nameInput, emailInput, messageInput, errorMessage, submitButton);
        formWrapper.append(form);
        leftSection.append(gradientBg, formWrapper);

        const rightSection = document.createElement("div");
        rightSection.className = "contact-right col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center p-4";

        const rightTitle = document.createElement("h2");
        rightTitle.className = "right-title text-primary mb-4 fw-bold";
        rightTitle.textContent = "İLETİŞİM BİLGİLERİMİZ";

        const list = document.createElement("ul");
        list.className = "contact-list list-unstyled text-white fs-18";

        const contactItems = [
            { icon: "fa-map-marker-alt", text: "Adres: Balıkesir" },
            { icon: "fa-phone", text: "Telefon: 123-456-7890" },
            { icon: "fa-envelope", text: "E-mail: contact@gamez.com" }
        ];

        contactItems.forEach(item => {
            const li = document.createElement("li");
            li.className = "contact-item d-flex align-items-center mb-3 position-relative";
            const point = document.createElement("span");
            point.className = "point rounded me-3 position-absolute";
            const icon = document.createElement("span");
            icon.className = `contact-icon me-3 fas z-2 p-1 ${item.icon}`;
            const text = document.createTextNode(item.text);
            li.append(point, icon, text);
            list.append(li);
        });

        rightSection.append(rightTitle, list);

        leftSection.append(gradientBg, formWrapper);
        contactSection.append(leftSection, rightSection);

        document.querySelector("#contact").append(contactSection);
    }
    createInput(placeholder, type) {
        const inputWrapper = document.createElement("div");
        inputWrapper.className = "mb-3";
        const input = document.createElement("input");
        input.className = "form-control";
        input.type = type;
        input.placeholder = placeholder;
        inputWrapper.append(input);
        return inputWrapper;
    }
    createTextarea(placeholder) {
        const textareaWrapper = document.createElement("div");
        textareaWrapper.className = "mb-3";
        const textarea = document.createElement("textarea");
        textarea.className = "form-control";
        textarea.placeholder = placeholder;
        textarea.rows = 5;
        textareaWrapper.append(textarea);
        return textareaWrapper;
    }
}