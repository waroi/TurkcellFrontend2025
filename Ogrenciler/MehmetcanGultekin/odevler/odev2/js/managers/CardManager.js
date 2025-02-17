export class CardManager {
    constructor(gameService, gameUI) {
        this.gameService = gameService;  
        this.gameUI = gameUI;           
        this.gameList = document.getElementById('gameList');
    }

    displayGames(games) {
        if (!games || !Array.isArray(games)) return;
        this.gameList.textContent = '';  

        if (games.length === 0) {
            const noGamesMessage = document.createElement('div');
            noGamesMessage.className = 'col-12 text-center mt-4';
            
            const heading = document.createElement('h3');
            heading.textContent = 'Henüz oyun eklenmemiş';
            noGamesMessage.appendChild(heading);
            
            this.gameList.appendChild(noGamesMessage);
            return;
        }

        games.forEach(game => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';

            const card = document.createElement('div');
            card.className = 'card h-100';

            const img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = game.image;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = game.name;

            const category = document.createElement('p');
            category.className = 'card-text';
            
            const categoryLabel = document.createElement('strong');
            categoryLabel.textContent = 'Kategori:';
            category.appendChild(categoryLabel);
            category.appendChild(document.createTextNode(` ${game.category}`));

            const company = document.createElement('p');
            company.className = 'card-text';
            
            const companyLabel = document.createElement('strong');
            companyLabel.textContent = 'Şirket:';
            company.appendChild(companyLabel);
            company.appendChild(document.createTextNode(` ${game.company}`));

            const releaseDate = document.createElement('p');
            releaseDate.className = 'card-text';
            
            const releaseDateLabel = document.createElement('strong');
            releaseDateLabel.textContent = 'Çıkış Tarihi:';
            releaseDate.appendChild(releaseDateLabel);
            releaseDate.appendChild(document.createTextNode(` ${game.releaseDate}`));

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'd-flex gap-2';

            const detailsButton = document.createElement('button');
            detailsButton.className = 'btn btn-primary';
            detailsButton.textContent = 'Detaylar';
            detailsButton.onclick = () => this.showGameDetails(game);

            const editButton = document.createElement('button');
            editButton.className = 'btn btn-warning';
            editButton.textContent = 'Düzenle';
            editButton.onclick = () => this.editGame(game);

            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger';
            deleteButton.textContent = 'Sil';
            deleteButton.onclick = () => this.deleteGame(game);

            const steamButton = document.createElement('a');
            steamButton.href = game.steamUrl;
            steamButton.className = 'btn btn-info text-white';
            steamButton.textContent = 'Steam';

            buttonContainer.appendChild(detailsButton);
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(deleteButton);
            buttonContainer.appendChild(steamButton);

            cardBody.appendChild(title);
            cardBody.appendChild(category);
            cardBody.appendChild(company);
            cardBody.appendChild(releaseDate);
            cardBody.appendChild(buttonContainer);

            card.appendChild(img);
            card.appendChild(cardBody);

            col.appendChild(card);
            this.gameList.appendChild(col);
        });
    }

    showGameDetails(game) {
        this.gameUI.showGameDetails(game);
    }

    editGame(game) {
        this.gameUI.showEditForm(game);
    }

    deleteGame(game) {
        if (confirm(`"${game.name}" oyununu silmek istediğinize emin misiniz?`)) {
            this.gameService.deleteGame(game.id)
                .then(() => this.gameService.fetchGames())
                .then(games => this.displayGames(games))
                .catch(() => alert('Oyun silinirken bir hata oluştu'));
        }
    }
}