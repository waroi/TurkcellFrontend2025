class UI {
    static renderGames(games) {
        const gameList = document.getElementById('gameList');
        gameList.innerHTML = '';
        games.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'col-md-4 game-card mb-4';
            gameCard.innerHTML = `
                <div class="card">
                    <img src="${game.image}" class="card-img-top" alt="${game.name}">
                    <div class="card-body">
                        <h5 class="card-title">${game.name}</h5>
                        <p class="card-text">${game.description}</p>
                        <button class="btn btn-info btn-sm" onclick="App.showGameDetail(${game.id})">Detay</button>
                        <button class="btn btn-warning btn-sm" onclick="App.editGame(${game.id})">Düzenle</button>
                        <button class="btn btn-danger btn-sm" onclick="App.deleteGame(${game.id})">Sil</button>
                    </div>
                </div>
            `;
            gameList.appendChild(gameCard);
        });
    }

    // Filtreleme dropdown'unu doldur
    static populateFilterCategories(categories) {
        const filterCategory = document.getElementById('filterCategory');
        filterCategory.innerHTML = '<option value="">Tüm Kategoriler</option>';
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            filterCategory.appendChild(option);
        });
    }

    // Oyun detaylarını göster
    static showGameDetail(game) {
        const gameDetailContent = document.getElementById('gameDetailContent');
        gameDetailContent.innerHTML = `
            <img src="${game.image}" class="img-fluid mb-3" alt="${game.name}">
            <h5>${game.name}</h5>
            <p>${game.description}</p>
            <p><strong>Kategori:</strong> ${game.category}</p>
            <p><strong>Çıkış Tarihi:</strong> ${game.releaseDate}</p>
            <p><strong>Yapımcı:</strong> ${game.developer}</p>
            <a href="${game.steamUrl}" target="_blank" class="btn btn-primary">Steam'de Gör</a>
        `;
        $('#gameDetailModal').modal('show');
    }

    // Hata mesajı göster
    static showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger';
        errorDiv.textContent = message;
        document.querySelector('.container').prepend(errorDiv);
        setTimeout(() => errorDiv.remove(), 3000);
    }
}

export default UI;