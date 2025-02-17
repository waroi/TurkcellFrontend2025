class GameView {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
    }

    renderGames(games) {
        if (!Array.isArray(games)) {
            console.error('Geçersiz oyun verisi:', games);
            return;
        }

        this.container.innerHTML = games.map(game => this.createGameCard(game)).join('');
    }

    createGameCard(game) {
        const gameId = game.id || '';

        const actionButtons = gameId ? `
            <button class="btn btn-primary btn-sm edit-game" data-id="${gameId}">Düzenle</button>
            <button class="btn btn-danger btn-sm delete-game" data-id="${gameId}">Sil</button>
        ` : '';

        return `
            <div class="col-md-4 game-card-container">
                <div class="game-card" data-game-id="${gameId}">
                    <img src="${game.image || ''}" alt="${game.name || 'Oyun'}" class="game-image">
                    <div class="game-info">
                        <h5>${game.name || 'İsimsiz Oyun'}</h5>
                        <p>${(game.description || '').substring(0, 100)}...</p>
                        <p class="text-muted">
                            <small>Kategori: ${game.category || 'Belirtilmemiş'}</small><br>
                            <small>Yapımcı: ${game.developer || 'Belirtilmemiş'}</small>
                        </p>
                    </div>
                    <div class="game-actions">
                        ${actionButtons}
                        ${game.steamUrl ? `<a href="GameDetail.html?id=${game.id}" class="btn btn-info btn-sm">İncele</a>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
}