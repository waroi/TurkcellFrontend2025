class UI {
    renderGames(games) {
        const gameList = document.getElementById('gameList')

        // innerHTML yerine alternatif olarak içinde herhangi bir child(.game-card) olmayana yani temizlenene kadar her elemanı siliyoruz
        while (gameList.firstChild) {
            gameList.removeChild(gameList.firstChild)
        }

        if (games.length > 0) {
            // Oyun varsa ekrana bastırıyoruz
            games.map(game => {
                const colCard = document.createElement('div')
                colCard.className = 'col-xl-3 my-3 col-lg-4 col-md-6'

                const viewDetails = document.createElement('a')
                viewDetails.dataset.id = game.id
                viewDetails.target = '_blank'
                viewDetails.className = 'view-steam view-details ms-3'
                viewDetails.setAttribute('data-bs-toggle', 'modal')
                viewDetails.setAttribute('data-bs-target', '#gameDetailsModal')

                const infoIcon = document.createElement('i')
                infoIcon.className = 'bi bi-info-circle-fill'
                infoIcon.dataset.id = game.id

                const infoText = document.createElement('span')
                // infoText.textContent = " Detaylar"; // Eğer yanında yazı istiyorsan açabilirsin

                viewDetails.appendChild(infoIcon)
                viewDetails.appendChild(infoText)

                const gameCard = document.createElement('div')
                gameCard.className = 'game-card d-flex flex-column justify-content-between p-3 h-100 rounded'

                const img = document.createElement('img');
                img.src = game.image
                img.className = 'rounded w-100 img-fluid'
                img.alt = game.name

                const title = document.createElement('h3')
                title.textContent = game.name

                const description = document.createElement('p')
                description.textContent = game.description

                const category = document.createElement('p')
                category.textContent = `Kategori: ${game.category}`

                const releaseDate = document.createElement('p')
                releaseDate.textContent = `Çıkış Tarihi: ${game.releaseDate}`

                const developer = document.createElement('p')
                developer.textContent = `Geliştirici: ${game.developer}`

                const rating = document.createElement('p')
                rating.textContent = `Değerlendirme: ${game.rating}`

                const actions = document.createElement('div')
                actions.className = 'actions'

                const steamLink = document.createElement('a')
                steamLink.href = game.steamUrl
                steamLink.target = '_blank'
                steamLink.className = 'view-steam'

                const steamIcon = document.createElement('i')
                steamIcon.className = 'bi bi-steam'

                const steamText = document.createElement('span')
                // steamText.textContent = " Steam"

                steamLink.appendChild(steamIcon)
                steamLink.appendChild(steamText)

                const editButton = document.createElement('button')
                editButton.className = 'edit-game btn btn-outline-success ms-3 mx-2'
                editButton.dataset.id = game.id
                editButton.textContent = 'Düzenle'

                const deleteButton = document.createElement('button')
                deleteButton.className = 'delete-game btn btn-outline-success'
                deleteButton.dataset.id = game.id
                deleteButton.textContent = 'Sil'

                actions.appendChild(steamLink)
                actions.appendChild(editButton)
                actions.appendChild(deleteButton)
                actions.appendChild(viewDetails)

                gameCard.appendChild(img)
                gameCard.appendChild(title)
                gameCard.appendChild(description)
                gameCard.appendChild(category)
                gameCard.appendChild(releaseDate)
                gameCard.appendChild(developer)
                gameCard.appendChild(rating)
                gameCard.appendChild(actions)

                colCard.appendChild(gameCard)

                gameList.appendChild(colCard)
            });
        } else {
            // Oyun yoksa oyun ekleme butonu ve bir mesaj
            const noGameDiv = document.createElement('div')
            noGameDiv.className = 'col-12 text-center py-5'

            const noGameContent = document.createElement('div')
            noGameContent.className = 'no-games-found p-4 rounded'

            const icon = document.createElement('i')
            icon.className = 'bi bi-emoji-frown display-1 mb-3'

            const title = document.createElement('h2')
            title.className = 'mb-3 text-white'
            title.textContent = 'Oyun Bulunamadı'

            const message = document.createElement('p')
            message.className = 'mb-4 text-white'
            message.textContent = 'Arama kriterleriniz uygun oyun bulunamadı ya da oyun eklememişsiniz.'

            const addGameButton = document.createElement('button')
            addGameButton.className = 'btn btn-lg'
            addGameButton.setAttribute('data-bs-toggle', 'modal')
            addGameButton.setAttribute('data-bs-target', '#addGameModal')

            const addIcon = document.createElement('i')
            addIcon.className = 'bi bi-plus-circle me-2'

            const addText = document.createElement('span')
            addText.textContent = 'Yeni Oyun Ekle'

            addGameButton.appendChild(addIcon)
            addGameButton.appendChild(addText)

            noGameContent.appendChild(icon)
            noGameContent.appendChild(title)
            noGameContent.appendChild(message)
            noGameContent.appendChild(addGameButton)

            noGameDiv.appendChild(noGameContent)
            gameList.appendChild(noGameDiv)
        }
    }

    showFavGames(favGameList) {
        const favGames = document.querySelector('#favGames')

        while (favGames.firstChild) {
            favGames.removeChild(favGames.firstChild)
        }
        console.log(favGameList)

        if (favGameList.length > 0) {
            // Favori oyun varsa ekrana bastırıyoruz
            favGameList.map(game => {
                const colCard = document.createElement('div')
                colCard.className = 'col-lg-6 col-md-6 col-12 my-3'

                const gameCard = document.createElement('div')
                gameCard.className = 'game-card d-flex flex-column justify-content-between p-3 h-100 rounded'

                const img = document.createElement('img')
                img.src = game.image
                img.className = 'rounded img-fluid w-100'
                img.alt = game.name

                const title = document.createElement('h3')
                title.textContent = game.name

                const description = document.createElement('p')
                description.textContent = game.description

                const category = document.createElement('p')
                category.textContent = `Kategori: ${game.category}`

                const releaseDate = document.createElement('p')
                releaseDate.textContent = `Çıkış Tarihi : ${game.releaseDate}`

                const developer = document.createElement('p')
                developer.textContent = `Geliştirici: ${game.developer}`

                const rating = document.createElement('p')
                rating.textContent = `Değerlendirme: ${game.rating}`

                const actions = document.createElement('div')
                actions.className = 'actions'

                const steamLink = document.createElement('a')
                steamLink.setAttribute('href', game.steamUrl)
                steamLink.setAttribute('target', '_blank')
                steamLink.className = 'view-steam'

                const steamIcon = document.createElement('i')
                steamIcon.className = 'bi bi-steam mx-1'

                steamLink.appendChild(steamIcon)
                steamLink.appendChild(document.createTextNode("Steam'de görüntüle"))

                const editButton = document.createElement('button')
                editButton.className = 'edit-game btn btn-outline-success ms-3 mx-2'
                editButton.dataset.id = game.id
                editButton.textContent = 'Düzenle'

                const deleteButton = document.createElement('button')
                deleteButton.className = 'delete-game btn btn-outline-success'
                deleteButton.dataset.id = game.id
                deleteButton.textContent = 'Sil'

                actions.appendChild(steamLink)
                actions.appendChild(editButton)
                actions.appendChild(deleteButton)

                gameCard.appendChild(img)
                gameCard.appendChild(title)
                gameCard.appendChild(description)
                gameCard.appendChild(category)
                gameCard.appendChild(releaseDate)
                gameCard.appendChild(developer)
                gameCard.appendChild(rating)
                gameCard.appendChild(actions)

                colCard.appendChild(gameCard)

                favGames.appendChild(colCard)
            });
        } else {
            // Favori oyun yoksa bir buton koyup en yukarıya atıyoruz
            const noFavDiv = document.createElement('div')
            noFavDiv.className = 'col-12 text-center py-5'

            const noFavContent = document.createElement('div')
            noFavContent.className = 'no-favorites-found p-4 rounded'

            const heartIcon = document.createElement('i')
            heartIcon.className = 'bi bi-heart display-1 mb-3'

            const favTitle = document.createElement('h2')
            favTitle.className = 'mb-3'
            favTitle.textContent = 'Favori Oyun Bulunamadı'

            const favMessage = document.createElement('p')
            favMessage.className = 'mb-4'
            favMessage.textContent = 'Henüz favori oyun eklememişsiniz. Oyunları favorilere ekleyerek özel listenizi oluşturabilirsiniz'

            const browseCatalogButton = document.createElement('button')
            browseCatalogButton.className = 'btn btn-lg'
            browseCatalogButton.setAttribute('id', 'browseCatalog')

            const searchIcon = document.createElement('i')
            searchIcon.className = 'bi bi-search me-2'

            const browseText = document.createElement('span')
            browseText.textContent = 'Oyunları Keşfet'

            browseCatalogButton.appendChild(searchIcon)
            browseCatalogButton.appendChild(browseText)

            browseCatalogButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            });

            noFavContent.appendChild(heartIcon)
            noFavContent.appendChild(favTitle)
            noFavContent.appendChild(favMessage)
            noFavContent.appendChild(browseCatalogButton)

            noFavDiv.appendChild(noFavContent)
            favGames.appendChild(noFavDiv)
        }
    }

    // Gelen mesajı ve türüne göre sağ üstten bildirim şeklinde ekrana basıyorzu ve 3 saniye sonra siliyoruz bunu
    showNotification(message, type = 'info') {
        const notification = document.createElement('div')
        notification.className = `alert alert-${type} notification`
        notification.textContent = message
        document.body.appendChild(notification)

        setTimeout(() => {
            notification.remove()
        }, 3000);
    }
}

