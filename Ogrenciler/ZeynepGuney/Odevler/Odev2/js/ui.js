const gameWrap = document.getElementById("games-wrap");
export class UI {
    constructor() {
        this.createHomeSection();
        this.createAboutSection();
        this.createGamesSection();
        this.createContactSection();
    }
    createHomeSection(){
        const homeSection = document.createElement("section");
    homeSection.className = "home d-flex flex-wrap h-100";  

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

    const rightSection = document.createElement("div");
    rightSection.className = "home-right d-flex flex-column justify-content-center align-items-center p-4 col-12 col-lg-6"; 

    const titleWrapper = document.createElement("div");
    titleWrapper.className = "home-title-wrapper mb-4 text-center text-white";
    const title = document.createElement("h1");
    title.className = "home-title bold fs-128 text-primary";
    title.textContent = "Game'Z";
    titleWrapper.append(title);

    const sloganBox = document.createElement("div");
    sloganBox.className = "slogan-box d-flex align-items-center justify-content-center p-5";

    const slogan = document.createElement("p");
    slogan.className = "slogan-text text-white text-center bold fs-18";
    slogan.textContent = "Game'Z – Gerçek Oyuncuların Adresi";

    sloganBox.append(slogan);
    rightSection.append(titleWrapper, sloganBox);

    leftSection.append(gradientBg, imgWrapper);
    homeSection.append(leftSection, rightSection);

    document.querySelector("#home").append(homeSection);
    }
    createAboutSection(){
        const aboutSection = document.createElement("section");
    aboutSection.className = "about-us d-flex flex-wrap my-13"; 

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
    title.className = "about-title fs-50 bold text-primary";
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
        li.className = "about-text-item d-flex align-items-center mb-2";
        const point = document.createElement("span");
        point.className = "point rounded me-3";
        li.append(point, document.createTextNode(item));
        textList.appendChild(li);
    });

    rightSection.append(titleWrapper, textList);
    aboutSection.append(leftSection, rightSection);

    document.querySelector("#about-us").append(aboutSection);
    }
    createGamesSection(){
        this.gameWrap = document.querySelector("#games-wrap");
        const sectionTitle = document.createElement("h2");
        sectionTitle.className = "section-title fs-50 bold text-primary text-center my-5"; 
        sectionTitle.textContent = "OYUNLAR"; 
        this.gameWrap.parentElement.insertBefore(sectionTitle, this.gameWrap);
        this.createGameControls();
        this.createGameCards();
    }
    createGameControls() {
        const gamesControlsDiv = document.createElement('div');
        gamesControlsDiv.className = "mb-4 text-center";
    
        const addGameButton = document.createElement('button');
        addGameButton.className = "btn btn-primary me-2 my-3"
        addGameButton.textContent = 'Oyun Ekle';
        gamesControlsDiv.append(addGameButton);
    
        const filterSortDiv = document.createElement('div');
        filterSortDiv.className = 'd-flex justify-content-center gap-3 ms-2'; 
    
        const categorySelect = document.createElement('select');
        categorySelect.className = 'form-select me-2';
        categorySelect.id = 'filter-category';
        const categoryOptions = ['Kategori Seç', 'Aksiyon', 'Strateji', 'RPG'];
        categoryOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText.toLowerCase();
            option.textContent = optionText;
            categorySelect.append(option);
        });
        filterSortDiv.append(categorySelect);
    
        const sortSelect = document.createElement('select');
        sortSelect.className = 'form-select';
        sortSelect.id = 'sort-option';
        const sortOptions = ['Sıralama', 'A-Z', 'Z-A', 'Çıkış Tarihi'];
        sortOptions.forEach(optionText => {
            const option = document.createElement('option');
            option.value = optionText.toLowerCase().replace(' ', '-');
            option.textContent = optionText;
            sortSelect.append(option);
        });
        filterSortDiv.append(sortSelect);

        gamesControlsDiv.append(filterSortDiv);

        this.gameWrap.parentElement.insertBefore(gamesControlsDiv, this.gameWrap);
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
        cardBody.className = "card-body p-5";

        const title = document.createElement("h5");
        title.className = "card-title h-25 fw-bold";
        title.textContent = game.name;

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

        const updateButton = document.createElement('button');
        updateButton.type = 'button';
        updateButton.className = 'btn btn-update';
        updateButton.setAttribute('data-bs-toggle', 'modal');
        updateButton.setAttribute('data-bs-target', '#gameModal');
        updateButton.onclick = () => openUpdateModal(index); 

        const updateSpan = document.createElement('span');
        updateSpan.className = 'text';
        updateSpan.textContent = 'Güncelle';

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.className = 'btn btn-delete'; 
        deleteButton.onclick = () => deleteGame(index);

        const deleteSpan = document.createElement('span');
        deleteSpan.className = 'text';
        deleteSpan.textContent = 'Sil';

        deleteButton.addEventListener("click", () => {
            this.removeGameCard(game.id);
        });

        updateButton.append(updateSpan);
        deleteButton.append(deleteSpan);
        cardBody.append(title, description, director,date ,type, updateButton, deleteButton);
        cardDiv.append(img, cardBody);
        colDiv.append(cardDiv);
        return cardDiv;
    }
    createGameCards(games) {
        if (!Array.isArray(games)) {
            console.error('Veri bir dizi değil:', games);
            return; 
          }
        this.gameWrap.innerHTML = '';
        games.forEach((game) => {
            const card = this.createCard(game);
            const colDiv = document.createElement("div");
            colDiv.className = "col-lg-3 col-md-4 col-sm-6 mb-5";
            colDiv.append(card); 
            this.gameWrap.append(colDiv); 
        });
    }
    removeGameCard(gameId) {
        const gameCard = document.getElementById(`game-card-${gameId}`);
        if (gameCard) {
            gameCard.remove(); 
        }
    }
    createContactSection() {
        const contactSection = document.createElement("section");
        contactSection.className = "contact d-flex flex-wrap mt-13";
    
        const leftSection = document.createElement("div");
        leftSection.className = "contact-left col-12 col-lg-6 position-relative d-flex align-items-center justify-content-center p-5";
    
        const gradientBg = document.createElement("div");
        gradientBg.className = "gradient-bg position-absolute z-1 w-100 h-100 top-0 start-0";
    
        const formWrapper = document.createElement("div");
        formWrapper.className = "form-wrapper d-flex flex-column justify-content-center align-items-center p-3 bg-white rounded col-12 col-lg-6 z-2";
    
        const formTitle = document.createElement("h2");
        formTitle.className = "form-title mb-4 text-purple";
        formTitle.textContent = "Bize Ulaşın";
    
        const nameInput = this.createInput("Ad Soyad", "text");
        const emailInput = this.createInput("E-mail", "email");
        const messageInput = this.createTextarea("Mesaj");
    
        const submitButton = document.createElement("button");
        submitButton.className = "btn btn-purple w-100 mt-4 text-white";
        submitButton.textContent = "Gönder";
    
        formWrapper.append(formTitle, nameInput, emailInput, messageInput, submitButton);
    
        const rightSection = document.createElement("div");
        rightSection.className = "contact-right col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center p-4";
    
        const rightTitle = document.createElement("h2");
        rightTitle.className = "right-title text-primary mb-4";
        rightTitle.textContent = "İLETİŞİM BİLGİLERİMİZ";
    
        const list = document.createElement("ul");
        list.className = "contact-list list-unstyled text-white";
    
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
            list.appendChild(li);
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