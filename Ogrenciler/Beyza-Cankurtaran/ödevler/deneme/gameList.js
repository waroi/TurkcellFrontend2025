class GameList {
    constructor(request) {
        this.request = request;
        this.games = [];
        this.filteredGames = [];
        this.editGameId = null;
        this.API_URL = '/games';
        
        // Initialize UI elements
        this.gameContainer = document.getElementById('game-list');
        this.searchInput = document.getElementById('searchInput');
        this.searchButton = document.getElementById('searchButton');
        this.gameForm = document.getElementById('gameForm');
        this.saveGameBtn = document.getElementById('saveGameBtn');
        
        // Sort buttons
        this.sortNameAscBtn = document.getElementById('sortByNameAsc');
        this.sortNameDescBtn = document.getElementById('sortByNameDesc');
        this.sortDateBtn = document.getElementById('sortByDate');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Search events
        this.searchInput.addEventListener('input', () => this.searchGames());
        this.searchButton.addEventListener('click', () => this.searchGames());
        
        // Sort events
        this.sortNameAscBtn.addEventListener('click', () => this.sortGames('OyunAdı', 'asc'));
        this.sortNameDescBtn.addEventListener('click', () => this.sortGames('OyunAdı', 'desc'));
        this.sortDateBtn.addEventListener('click', () => this.sortGames('ÇıkışTarihi', 'asc'));
        
        // Form submission
        this.gameForm.addEventListener('submit', (event) => this.handleFormSubmit(event));
        
        // Game list event delegation (edit, view, delete buttons)
        this.gameContainer.addEventListener('click', (event) => {
            const target = event.target;
            
            if (target.matches('.btn-warning')) {
                // Edit button
                const gameId = target.getAttribute('onclick')?.match(/editGame\((\d+)\)/)?.[1];
                if (gameId) this.editGame(gameId);
            } 
            else if (target.matches('.btn-info')) {
                // View button
                const gameId = target.getAttribute('onclick')?.match(/viewGame\((\d+)\)/)?.[1];
                if (gameId) this.viewGame(gameId);
            }
            else if (target.matches('.btn-danger')) {
                // Delete button
                const gameId = target.getAttribute('onclick')?.match(/deleteGame\((\d+)\)/)?.[1];
                if (gameId) this.deleteGame(gameId);
            }
        });
        
        // Modal events
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
        
        // Setup filter events
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
            this.gameContainer.innerHTML = '<p>Aradığınız kriterlere uygun oyun bulunamadı.</p>';
            return;
        }
        
        games.forEach(game => {
            const gameName = game.OyunAdı ;
            const gameImage = game.OyunGörseli ;
            const gameDescription = game.Açıklama ;
            const gameCategory = game.Kategori ;
            const gameReleaseDate = game.ÇıkışTarihi ;
            const gameDeveloper = game.YapımcıFirma ;
            const gameSteamURL = game.SteamURL ;
            const gameId = game.id;

            this.gameContainer.innerHTML += `
                <div class="card" style="width: 18rem; margin: 10px;">
                    <img src="${gameImage}" class="card-img-top" alt="${gameName}">
                    <div class="card-body">
                        <h5 class="card-title">${gameName}</h5>
                        <p class="card-text fw-bold">${gameDescription}</p>
                        <p class="card-text fw-bolder">${gameCategory}</p>
                        <p class="card-text fw-bold">${gameReleaseDate}</p>
                        <p class="card-text fw-bold">${gameDeveloper}</p>
                        <a href="${gameSteamURL}" target="_blank" class="btn btn-primary">Steam Adresi</a>
                        <br><br>
                        <button onclick="gameList.editGame(${gameId})" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#gameModal">Güncelle</button>
                        <button onclick="gameList.viewGame(${gameId})" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#viewGameModal">İncele</button>
                        <button onclick="gameList.deleteGame(${gameId})" class="btn btn-danger">Sil</button>
                    </div>
                </div>
            `;
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
            kategoriFiltresi.innerHTML += `
                <div class="form-check">
                    <input class="form-check-input kategori-checkbox" type="checkbox" value="${kategori}" id="kat-${kategori}">
                    <label class="form-check-label" for="kat-${kategori}">${kategori}</label>
                </div>
            `;
        });
    
        const yilFiltresi = document.getElementById("yil-filtresi");
        yilFiltresi.innerHTML = "";
        [...yilSet].sort().forEach(yil => {
            yilFiltresi.innerHTML += `
                <div class="form-check">
                    <input class="form-check-input yil-checkbox" type="checkbox" value="${yil}" id="yil-${yil}">
                    <label class="form-check-label" for="yil-${yil}">${yil}</label>
                </div>
            `;
        });
    
        // Filtreleri değiştiğinde çalıştırmak için event listener ekleyelim
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
        if (event) event.preventDefault(); // Eğer event varsa, varsayılan davranışı engelle
        
        const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
        
        if (searchTerm === '') {
            this.renderGames(this.games);
            return;
        }
    
        try {
            const response = await fetch("http://localhost:3000/games");
            const allGames = await response.json();
    
            // OyunAdı'na göre arama yap (küçük harf karşılaştırması ile)
            const filteredGames = allGames.filter(game => 
                game.OyunAdı.toLowerCase().includes(searchTerm)
            );
    
            this.renderGames(filteredGames);
        } catch (error) {
            console.error("Arama sırasında hata oluştu:", error);
            this.gameContainer.innerHTML = '<p class="text-danger">Arama sırasında bir hata oluştu. Lütfen tekrar deneyin.</p>';
        }
    }
    
    

    async sortGames(property, order) {
        try {
            let sortedGames = [...this.games]; // Create a copy to sort
            
            // Tarih sıralaması için özel kontrol
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

            // Formu doldur
            document.getElementById('gameName').value = game.OyunAdı;
            document.getElementById('gameDescription').value = game.Açıklama;
            document.getElementById('gameCategory').value = game.Kategori;
            document.getElementById('gameReleaseDate').value = game.ÇıkışTarihi;
            document.getElementById('gameImageUrl').value = game.OyunGörseli;
            document.getElementById('gameDeveloper').value = game.YapımcıFirma;
            document.getElementById('gameSteamUrl').value = game.SteamURL;

            this.editGameId = id; // Güncellenecek oyunun ID'sini kaydet
            this.saveGameBtn.textContent = "Güncelle"; // Buton adını değiştir

            // Modalı aç
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

            // Modal nesnesini oluştur ve göster
            const viewModal = new bootstrap.Modal(document.getElementById('viewGameModal'));
            viewModal.show();

            // Modalı kapatma butonuna event listener ekle
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
                await this.fetchGames(); // Silme işleminden sonra listeyi güncelle
            }
        } catch (err) {
            console.error("Oyun Silinirken Hata:", err);
        }
    }
}