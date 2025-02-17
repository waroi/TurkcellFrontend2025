class GameApp {
    constructor() {
        this.modalElement = document.getElementById('gameModal');
        this.gameModal = new bootstrap.Modal(this.modalElement);
        this.gameForm = document.getElementById('gameForm');
        this.gameList = document.getElementById('gameList');
        this.imageInput = document.getElementById('gameImage');
        this.imagePreview = document.getElementById('imagePreview');
        this.saveButton = document.getElementById('saveGame');
        this.searchInput = document.getElementById('searchInput');
        this.categoryFilter = document.getElementById('categoryFilter');
        this.sortType = document.getElementById('sortType');
        this.startDate = document.getElementById('startDate');
        this.endDate = document.getElementById('endDate');
        this.modalTitle = document.querySelector('.modal-title');
        this.games = [];
        this.addEventListeners();
        this.loadGames();
    }
    addEventListeners() {
        this.saveButton.addEventListener('click', () => this.handleSubmit());
        this.gameForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
        this.imageInput.addEventListener('input', () => this.updateImagePreview());
        this.modalElement.addEventListener('hidden.bs.modal', () => {// modal kapanınca formu temizledim yoksa kalıyordu sadece save işleminde temizleniyordu iptal edip çıkınca kullanıcı temizlenmiyordu
            this.clearForm();
        });
        this.searchInput.addEventListener('input', () => this.filterGames());
        this.categoryFilter.addEventListener('change', () => this.filterGames());
        this.sortType.addEventListener('change', () => this.filterGames());
        this.startDate?.addEventListener('change', () => this.filterGames());
        this.endDate?.addEventListener('change', () => this.filterGames());
    }
    async handleSubmit() {
        if (!this.validateForm()) {
            return;
        }
        const formData = {
            //datayı boşluklar hataya sebep olmasın diye trimledim
            name: document.getElementById('gameName').value.trim(),
            description: document.getElementById('gameDescription').value.trim(),
            category: document.getElementById('gameCategory').value.trim(),
            releaseDate: document.getElementById('gameReleaseDate').value,
            image: document.getElementById('gameImage').value.trim(),
            publisher: document.getElementById('gamePublisher').value.trim(),
            steamUrl: document.getElementById('gameSteamUrl').value.trim()
        };
        const gameId = document.getElementById('gameId').value;
        try {// bu id ile bir oyun varsa güncelleyecek yoksa ekleyecek
            if (gameId) {
                await this.updateGame(gameId, formData);
                this.showNotification('Başarıyla güncellendi', 'success');
            } else {
                await this.saveGame(formData);
                this.showNotification('Başarıyla eklendi', 'success');
            }
            this.gameModal.hide();
            await this.loadGames();
            this.clearForm();
        } catch (error) {
            this.showNotification(error.message, 'danger');
        }
    }
    validateForm() {
        const form = this.gameForm;
        const requiredFields = ['gameName', 'gameDescription', 'gameCategory',
            'gameReleaseDate', 'gameImage', 'gamePublisher', 'gameSteamUrl'];
        let isValid = true;
        form.classList.remove('was-validated');
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field || !field.value.trim()) {
                field?.classList.add('is-invalid');
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
                // URL valid mi kontrolü
                if ((fieldId === 'gameImage' || fieldId === 'gameSteamUrl') && field.value.trim()) {
                    try {
                        new URL(field.value);
                    } catch (e) {
                        field.classList.add('is-invalid');
                        field.classList.remove('is-valid');
                        isValid = false;
                    }
                }
            }
        });
        if (!isValid) {
            form.classList.add('was-validated');
        }
        return isValid;
    }
    async saveGame(gameData) {
        try {// PORT:3000  de ayağa kalkacak gibi düşünerek yaptım
            const response = await fetch('http://localhost:3000/games');
            const existingGames = await response.json();
            const highestId = existingGames.reduce((maxId, game) => {
                const gameId = parseInt(game.id);
                return gameId > maxId ? gameId : maxId;
            }, 0);
            const newId = (highestId + 1).toString();
            const newGameData = gameData;
            newGameData.id = newId;
            const saveResponse = await fetch('http://localhost:3000/games', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newGameData)
            });
            if (!saveResponse.ok) {
                const error = await saveResponse.json().catch(() => null);
                throw new Error(error?.message || "HTTP error!");
            }
            return saveResponse.json();
        } catch (error) {
            throw new Error('Oyun kaydedilemedi: ' + error.message);
        }
    }
    async updateGame(id, gameData) {// PORT:3000  de ayağa kalkacak gibi düşünerek yaptım
        const response = await fetch(`http://localhost:3000/games/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gameData)
        });
        if (!response.ok) {
            throw new Error('Güncelleme başarısız oldu');
        }
        return response.json();
    }
    createGameCard(game) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'col-lg-4 col-md-6 mb-4';
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.name;
        img.onerror = () => { img.src = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'; };
        const gameInfo = document.createElement('div');
        gameInfo.className = 'game-info';
        const title = document.createElement('h4');
        title.textContent = game.name;
        const description = document.createElement('p');
        description.textContent = game.description;
        const categoryTag = document.createElement('div');
        categoryTag.className = 'genre-tag';
        categoryTag.textContent = game.category;
        const dateTag = document.createElement('div');
        dateTag.className = 'genre-tag';
        dateTag.textContent = new Date(game.releaseDate).toLocaleDateString();
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'mt-3';
        const btnGroup = document.createElement('div');
        btnGroup.className = 'btn-group w-100';
        const steamLink = document.createElement('a');
        steamLink.href = game.steamUrl;
        steamLink.target = '_blank';
        steamLink.className = 'btn btn-cyber';
        steamLink.textContent = 'STEAM';
        const editButton = document.createElement('button');
        editButton.className = 'btn btn-cyber';
        editButton.textContent = 'DÜZENLE';
        editButton.addEventListener('click', () => this.editGame(game.id));
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-cyber';
        deleteButton.textContent = 'SİL';
        deleteButton.addEventListener('click', () => this.deleteGame(game.id));
        btnGroup.append(steamLink, editButton, deleteButton);
        buttonContainer.appendChild(btnGroup);
        gameInfo.append(title, description, categoryTag, dateTag, buttonContainer);
        gameCard.append(img, gameInfo);
        cardDiv.appendChild(gameCard);
        // Hover efektlerim bu metodlarda
        gameCard.addEventListener('mouseover', this.addHoverEffect);
        gameCard.addEventListener('mouseout', this.removeHoverEffect);
        return cardDiv;
    }
    async loadGames() {
        try {
            const response = await fetch('http://localhost:3000/games');
            this.games = await response.json();
            this.updateCategoryFilter();
            this.displayGames(this.games, false);
        } catch (error) {
            this.showNotification('Oyunlar yüklenirken hata oluştu', 'danger');
        }
    }
    displayGames(games, preserveScroll = true) {
        // Mevcut scroll pozisyonunu sabitledim çünkü yeni oyun ekleyince kendisi yukarı fırlıyordu sayfada
        const scrollPosition = preserveScroll ? window.scrollY : 0;
        while (this.gameList.firstChild) {
            this.gameList.removeChild(this.gameList.firstChild);
        }
        if (games.length === 0) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'col-12 text-center';
            const emptyMessage = document.createElement('h2');
            emptyMessage.textContent = 'Oyun bulunamadı';
            emptyDiv.appendChild(emptyMessage);
            this.gameList.appendChild(emptyDiv);
            return;
        }
        games.forEach(game => {
            this.gameList.appendChild(this.createGameCard(game));
        });
        // Yukarda sabitlemek için tuttuğum scroll pozisyonunu geri yükledim
        if (preserveScroll) {
            window.scrollTo({
                top: scrollPosition,
                behavior: 'instant'
            });
        }
    }
    editGame(id) {
        const game = this.games.find(g => g.id === id);
        if (game) {
            document.getElementById('gameId').value = game.id || '';
            document.getElementById('gameName').value = game.name || '';
            document.getElementById('gameDescription').value = game.description || '';
            document.getElementById('gameCategory').value = game.category || '';
            document.getElementById('gameReleaseDate').value = game.releaseDate || '';
            document.getElementById('gameImage').value = game.image || '';
            document.getElementById('gamePublisher').value = game.publisher || '';
            document.getElementById('gameSteamUrl').value = game.steamUrl || '';
            this.updateImagePreview();
            this.modalTitle.textContent = 'OYUN DÜZENLE';
            this.gameModal.show();
        }
    }
    async deleteGame(id) {
        if (confirm('Bu oyunu silmek istediğinizden emin misiniz?')) {
            try {
                const response = await fetch(`http://localhost:3000/games/${id}`, {
                    method: 'DELETE'
                });
                if (!response.ok) {
                    throw new Error('Silme başarısız');
                }
                this.showNotification('Silme başarılı', 'success');
                await this.loadGames();
            } catch (error) {
                this.showNotification('Silme başarısız', 'danger');
            }
        }
    }
    filterGames() {
        let filteredGames = [...this.games];
        const category = this.categoryFilter.value;
        if (category) {
            filteredGames = filteredGames.filter(game => game.category === category);
        }
        if (this.startDate?.value && this.endDate?.value) {
            const start = new Date(this.startDate.value);
            const end = new Date(this.endDate.value);
            filteredGames = filteredGames.filter(game => {
                const date = new Date(game.releaseDate);
                return date >= start && date <= end;
            });
        }
        const searchTerm = this.searchInput.value.toLowerCase();
        if (searchTerm) {
            filteredGames = filteredGames.filter(game =>
                game.name.toLowerCase().includes(searchTerm) ||
                game.category.toLowerCase().includes(searchTerm) ||
                game.publisher.toLowerCase().includes(searchTerm)
            );
        }
        const sortBy = this.sortType.value;
        switch (sortBy) {
            // JavaScript ASCII karakterleri dışındaki karakterleri sıralamıyormuş.
            // Türkçe sıralama yapmak için localeCompare fonksiyonu kullandım o yüzden.
            case 'az':
                filteredGames.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'za':
                filteredGames.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'date':
                filteredGames.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
                break;
        }
        this.displayGames(filteredGames, true);
    }
    updateCategoryFilter() {
        this.categoryFilter.innerHTML = '<option value="">TÜM KATEGORİLER</option>';
        const categories = [...new Set(this.games.map(game => game.category))];
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category.toUpperCase();
            this.categoryFilter.appendChild(option);
        });
    }
    addHoverEffect(event) {
        const card = event.currentTarget;
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 0 20px var(--neon-blue), 0 0 40px var(--neon-pink)';
    }
    removeHoverEffect(event) {
        const card = event.currentTarget;
        card.style.transform = '';
        card.style.boxShadow = '';
    }
    clearForm() {
        this.gameForm.reset();
        this.gameForm.classList.remove('was-validated');
        document.getElementById('gameId').value = '';
        this.modalTitle.textContent = 'YENİ OYUN EKLE';
        const formElements = this.gameForm.querySelectorAll('.form-control');
        formElements.forEach(element => { // Tüm formdan geçersiz/geçerli sınıflarını kaldırdım en son
            element.classList.remove('is-invalid', 'is-valid');
        });
        this.imagePreview.src = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
    }
    showNotification(message, type) {
        let container = document.getElementById('notificationContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notificationContainer';
            container.style.position = 'fixed';
            container.style.top = '20px';
            container.style.right = '20px';
            container.style.zIndex = '10';
            document.body.appendChild(container);
        }
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} show`;
        const messageText = document.createTextNode(message);
        alert.appendChild(messageText);
        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'btn-close';
        closeButton.setAttribute('data-bs-dismiss', 'alert');
        alert.appendChild(closeButton);
        container.appendChild(alert);
        setTimeout(() => alert.remove(), 3000);
    }
    updateImagePreview() {
        const url = this.imageInput.value.trim();
        if (url) {
            this.imagePreview.src = url;
        } else {
            this.imagePreview.src = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
        }
        this.imagePreview.onerror = () => {
            this.imagePreview.src = 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png';
        };
    }
}

const gameApp = new GameApp();