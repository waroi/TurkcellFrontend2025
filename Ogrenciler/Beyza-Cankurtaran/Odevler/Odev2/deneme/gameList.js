class GameList {
    constructor(request) {
        this.request = request;
        this.games = [];
        this.filteredGames = [];
        this.editGameId = null;
        this.API_URL = '/games';

        this.gameContainer = document.getElementById('game-list');
        this.searchInput = document.getElementById('searchInput');
        this.searchButton = document.getElementById('searchButton');
        this.gameForm = document.getElementById('gameForm');
        this.saveGameBtn = document.getElementById('saveGameBtn');

        this.sortNameAscBtn = document.getElementById('sortByNameAsc');
        this.sortNameDescBtn = document.getElementById('sortByNameDesc');
        this.sortDateBtn = document.getElementById('sortByDate');

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.searchInput.addEventListener('input', () => this.searchGames());
        this.searchButton.addEventListener('click', () => this.searchGames());

        this.sortNameAscBtn.addEventListener('click', () => this.sortGames('OyunAdı', 'asc'));
        this.sortNameDescBtn.addEventListener('click', () => this.sortGames('OyunAdı', 'desc'));
        this.sortDateBtn.addEventListener('click', () => this.sortGames('ÇıkışTarihi', 'asc'));

        this.gameForm.addEventListener('submit', (event) => this.handleFormSubmit(event));

        /*gameContainer.addEventListener('click', (event) => {
            const target = event.target;
        
            // Sadece belirli butonlara tepki veriyoruz.
            if (target.matches('.btn-warning, .btn-info, .btn-danger')) {
                const action = target.dataset.action;
                const gameId = target.dataset.id;
        
                if (action && gameId) {
                    switch (action) {
                        case 'edit':
                            this.editGame(gameId);
                            break;
                        case 'view':
                            this.viewGame(gameId);
                            break;
                        case 'delete':
                            this.deleteGame(gameId);
                            break;
                        default:
                            break;
                    }
                }
            }
        });*/

        // buranın kolay verisyonu var mı hocaya sor
        this.gameContainer.addEventListener('click', (event) => {
            const target = event.target;
            const { onclick } = target;
            let gameId = null;

            switch (true) {
                case target.matches('.btn-warning'):
                    gameId = onclick?.match(/editGame\((\d+)\)/)?.[1];
                    if (gameId) this.editGame(gameId);
                    break;
                case target.matches('.btn-info'):
                    gameId = onclick?.match(/viewGame\((\d+)\)/)?.[1];
                    if (gameId) this.viewGame(gameId);
                    break;
                case target.matches('.btn-danger'):
                    gameId = onclick?.match(/deleteGame\((\d+)\)/)?.[1];
                    if (gameId) this.deleteGame(gameId);
                    break;
                default:
                    break;
            }
        });

        const gameModal = document.getElementById('gameModal');
        if (gameModal) {
            gameModal.addEventListener('hidden.bs.modal', () => {
                this.editGameId = null;
                this.gameForm.reset();
                this.saveGameBtn.textContent = "Ekle";
            });
        }

        const viewGameModal = document.getElementById('viewGameModal');
        if (viewGameModal) {
            viewGameModal.addEventListener('hidden.bs.modal', () => {
                document.body.classList.remove('modal-open');
                document.querySelector('.modal-backdrop')?.remove();
            });
        }

        document.querySelectorAll("#kategori-filtresi input, #yil-filtresi input").forEach(input => {
            input.addEventListener("change", () => this.filterAndRenderGames(this.games));
        });
    }

    async fetchGames() {
        try {
            const games = await this.request.get(this.API_URL);
            this.games = games;
            this.renderGames(games);
            this.setupFilters(games);
            return games;
        } catch (err) {
            console.error("Oyunları Çekerken Hata:", err);
        }
    }

    async handleFormSubmit(event) {
        event.preventDefault();

        const newGame = {
            OyunAdı: document.getElementById('gameName').value,
            Açıklama: document.getElementById('gameDescription').value,
            Kategori: document.getElementById('gameCategory').value,
            ÇıkışTarihi: document.getElementById('gameReleaseDate').value,
            OyunGörseli: document.getElementById('gameImageUrl').value,
            YapımcıFirma: document.getElementById('gameDeveloper').value,
            SteamURL: document.getElementById('gameSteamUrl').value
        };

        try {
            if (this.editGameId === null) {
                await this.request.post(this.API_URL, newGame);
            } else {
                await this.request.put(`${this.API_URL}/${this.editGameId}`, newGame);
                this.editGameId = null;
                this.saveGameBtn.textContent = "Ekle";
            }

            await this.fetchGames();
            this.gameForm.reset();
            bootstrap.Modal.getInstance(document.getElementById('gameModal')).hide();

        } catch (err) {
            console.error("Oyun Eklenirken/Güncellenirken Hata:", err);
        }
    }

    renderGames(games) {
        this.gameContainer.innerHTML = '';

        if (games.length === 0) {
            const noGamesMessage = document.createElement('p');
            noGamesMessage.textContent = 'Aradığınız kriterlere uygun oyun bulunamadı.';
            this.gameContainer.appendChild(noGamesMessage);
            return;
        }

        games.forEach(game => {
            const gameName = game.OyunAdı;
            const gameImage = game.OyunGörseli;
            const gameDescription = game.Açıklama;
            const gameCategory = game.Kategori;
            const gameReleaseDate = game.ÇıkışTarihi;
            const gameDeveloper = game.YapımcıFirma;
            const gameSteamURL = game.SteamURL;
            const gameId = game.id;

            const gameCard = document.createElement('div');
            gameCard.classList.add('card');
            gameCard.style.width = '18rem';
            gameCard.style.margin = '10px';

            const img = document.createElement('img');
            img.src = gameImage;
            img.classList.add('card-img-top');
            img.alt = gameName;
            gameCard.appendChild(img);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            gameCard.appendChild(cardBody);

            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = gameName;
            cardBody.appendChild(title);

            const description = document.createElement('p');
            description.classList.add('card-text', 'fw-bold');
            description.textContent = gameDescription;
            cardBody.appendChild(description);

            const category = document.createElement('p');
            category.classList.add('card-text', 'fw-bolder');
            category.textContent = gameCategory;
            cardBody.appendChild(category);

            const releaseDate = document.createElement('p');
            releaseDate.classList.add('card-text', 'fw-bold');
            releaseDate.textContent = gameReleaseDate;
            cardBody.appendChild(releaseDate);

            const developer = document.createElement('p');
            developer.classList.add('card-text', 'fw-bold');
            developer.textContent = gameDeveloper;
            cardBody.appendChild(developer);

            const steamLink = document.createElement('a');
            steamLink.href = gameSteamURL;
            steamLink.target = '_blank';
            steamLink.classList.add('btn', 'btn-primary');
            steamLink.textContent = 'Steam Adresi';
            cardBody.appendChild(steamLink);

            const br1 = document.createElement('br');
            cardBody.appendChild(br1);

            const br2 = document.createElement('br');
            cardBody.appendChild(br2);

            const updateBtn = document.createElement('button');
            updateBtn.classList.add('btn', 'btn-warning');
            updateBtn.textContent = 'Güncelle';
            //updateBtn.setAttribute('data-action', 'edit');
            //updateBtn.setAttribute('data-id', gameId);
            updateBtn.setAttribute('data-bs-toggle', 'modal');
            updateBtn.setAttribute('data-bs-target', '#gameModal');
            updateBtn.addEventListener('click', () => this.editGame(gameId));
            cardBody.appendChild(updateBtn);

            const viewBtn = document.createElement('button');
            viewBtn.classList.add('btn', 'btn-info');
            viewBtn.textContent = 'İncele';
            //viewButton.setAttribute('data-action', 'view');
            //viewButton.setAttribute('data-id', gameId);
            viewBtn.setAttribute('data-bs-toggle', 'modal');
            viewBtn.setAttribute('data-bs-target', '#viewGameModal');
            viewBtn.addEventListener('click', () => this.viewGame(gameId));
            cardBody.appendChild(viewBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'btn-danger');
            deleteBtn.textContent = 'Sil';
            //deleteButton.setAttribute('data-action', 'delete');
           // deleteButton.setAttribute('data-id', gameId);
            deleteBtn.addEventListener('click', () => this.deleteGame(gameId));
            cardBody.appendChild(deleteBtn);

            this.gameContainer.appendChild(gameCard);
        });
    }


    setupFilters(games) {
        const kategoriSet = new Set();
        const yilSet = new Set();

        games.forEach(game => {
            if (game.Kategori) {
                game.Kategori.split(",").forEach(k => kategoriSet.add(k.trim()));
            }

            const year = new Date(game.ÇıkışTarihi).getFullYear();
            if (!isNaN(year) && game.ÇıkışTarihi) yilSet.add(year);
        });

        const kategoriFiltresi = document.getElementById("kategori-filtresi");
        kategoriFiltresi.innerHTML = "";
        kategoriSet.forEach(kategori => {
            const kategoriFiltresi = document.getElementById("kategori-filtresi");
            const kategoriDiv = document.createElement('div');
            kategoriDiv.classList.add('form-check');

            const kategoriInput = document.createElement('input');
            kategoriInput.classList.add('form-check-input', 'kategori-checkbox');
            kategoriInput.type = 'checkbox';
            kategoriInput.value = kategori;
            kategoriInput.id = `kat-${kategori}`;

            const kategoriLabel = document.createElement('label');
            kategoriLabel.classList.add('form-check-label');
            kategoriLabel.setAttribute('for', `kat-${kategori}`);
            kategoriLabel.textContent = kategori;

            kategoriDiv.appendChild(kategoriInput);
            kategoriDiv.appendChild(kategoriLabel);
            kategoriFiltresi.appendChild(kategoriDiv);

        });

        const yilFiltresi = document.getElementById("yil-filtresi");
        yilFiltresi.innerHTML = "";
        [...yilSet].sort().forEach(yil => {
            const yilFiltresi = document.getElementById("yil-filtresi");
            const yilDiv = document.createElement('div');
            yilDiv.classList.add('form-check');

            const yilInput = document.createElement('input');
            yilInput.classList.add('form-check-input', 'yil-checkbox');
            yilInput.type = 'checkbox';
            yilInput.value = yil;
            yilInput.id = `yil-${yil}`;

            const yilLabel = document.createElement('label');
            yilLabel.classList.add('form-check-label');
            yilLabel.setAttribute('for', `yil-${yil}`);
            yilLabel.textContent = yil;

            yilDiv.appendChild(yilInput);
            yilDiv.appendChild(yilLabel);
            yilFiltresi.appendChild(yilDiv);

        });
        document.querySelectorAll(".kategori-checkbox, .yil-checkbox").forEach(checkbox => {
            checkbox.addEventListener("change", () => this.filterAndRenderGames(games));
        });
    }

    filterAndRenderGames(games) {
        const selectedCategories = [...document.querySelectorAll("#kategori-filtresi input:checked")].map(k => k.value);
        const selectedYears = [...document.querySelectorAll("#yil-filtresi input:checked")].map(y => parseInt(y.value));

        const filteredGames = games.filter(game => {
            const gameYear = new Date(game.ÇıkışTarihi).getFullYear();
            const gameCategories = game.Kategori ? game.Kategori.split(",").map(k => k.trim()) : [];

            return (selectedCategories.length === 0 || gameCategories.some(k => selectedCategories.includes(k))) &&
                (selectedYears.length === 0 || (gameYear && selectedYears.includes(gameYear)));
        });

        this.renderGames(filteredGames);
    }


    async searchGames(event) {
        if (event) event.preventDefault();

        const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();

        if (searchTerm === '') {
            this.renderGames(this.games);
            return;
        }
        const filteredGames = this.games.filter(game =>
            game.OyunAdı.toLowerCase().includes(searchTerm)
        );

        this.renderGames(filteredGames);
    }


    async sortGames(property, order) {
        try {
            let sortedGames = [...this.games];

            if (property === 'ÇıkışTarihi') {
                sortedGames.sort((a, b) => {
                    let dateA = new Date(a[property]);
                    let dateB = new Date(b[property]);
                    return order === 'asc' ? dateA - dateB : dateB - dateA;
                });
            } else {
                sortedGames.sort((a, b) => {
                    let valA = a[property].toLowerCase();
                    let valB = b[property].toLowerCase();
                    return order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
                });
            }

            this.renderGames(sortedGames);
        } catch (error) {
            console.error('Sıralama yapılırken hata oluştu:', error);
        }
    }

    async editGame(id) {
        try {
            const game = await this.request.get(`${this.API_URL}/${id}`);
            document.getElementById('gameName').value = game.OyunAdı;
            document.getElementById('gameDescription').value = game.Açıklama;
            document.getElementById('gameCategory').value = game.Kategori;
            document.getElementById('gameReleaseDate').value = game.ÇıkışTarihi;
            document.getElementById('gameImageUrl').value = game.OyunGörseli;
            document.getElementById('gameDeveloper').value = game.YapımcıFirma;
            document.getElementById('gameSteamUrl').value = game.SteamURL;

            this.editGameId = id;
            this.saveGameBtn.textContent = "Güncelle";

            new bootstrap.Modal(document.getElementById('gameModal')).show();

        } catch (err) {
            console.error("Oyun Düzenlenirken Hata:", err);
        }
    }

    async viewGame(id) {
        try {
            const game = await this.request.get(`${this.API_URL}/${id}`);

            document.getElementById('viewGameName').textContent = game.OyunAdı;
            document.getElementById('viewGameDescription').textContent = game.Açıklama;
            document.getElementById('viewGameCategory').textContent = game.Kategori;
            document.getElementById('viewGameReleaseDate').textContent = game.ÇıkışTarihi;
            document.getElementById('viewGameDeveloper').textContent = game.YapımcıFirma;
            document.getElementById('viewGameSteamUrl').href = game.SteamURL;
            document.getElementById('viewGameImage').src = game.OyunGörseli;

            const viewModal = new bootstrap.Modal(document.getElementById('viewGameModal'));
            viewModal.show();

            document.getElementById('viewGameBtn').addEventListener('click', function () {
                viewModal.hide();
            });

        } catch (err) {
            console.error("Oyun İncelenirken Hata:", err);
        }
    }

    async deleteGame(id) {
        try {
            if (confirm("Bu oyunu silmek istediğinize emin misiniz?")) {
                await this.request.delete(`${this.API_URL}/${id}`);
                await this.fetchGames();
            }
        } catch (err) {
            console.error("Oyun Silinirken Hata:", err);
        }
    }
}