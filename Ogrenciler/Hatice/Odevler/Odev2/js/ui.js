function UI() {
    this.gameList = document.getElementById("gameList");

    this.displayGames = function () {
        gameService.fetchGames()
            .then(games => {

                const searchValue = document.getElementById("searchInput").value.toLowerCase();
                const categoryFilter = document.getElementById("categoryFilter").value;
                const sortOrder = document.getElementById("sortOrder").value;

                if (searchValue) {
                    games = games.filter(game => game.name.toLowerCase().includes(searchValue) || game.developer.toLowerCase().includes(searchValue));
                }

                if (categoryFilter && categoryFilter !== 'all') {
                    games = games.filter(game => game.category === categoryFilter);
                }

                const dateFilter = document.getElementById("dateFilter").value;

                if (dateFilter) {
                    games = games.filter(game => {
                        const gamerelease_date = new Date(game.release_date);
                        const selectedDate = new Date(dateFilter);
                        return gamerelease_date >= selectedDate; 
                    });
                }

                if (sortOrder === "az") {
                    games.sort((a, b) => a.name.localeCompare(b.name));
                } else if (sortOrder === "za") {
                    games.sort((a, b) => b.name.localeCompare(a.name));
                } else if (sortOrder === "newest") {
                    games.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                } else if (sortOrder === "oldest") {
                    games.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
                }

                this.gameList.innerHTML = "";
                games.forEach(game => {
                    const colDiv = document.createElement("div");
                    colDiv.className = "col-md-4 d-flex justify-content-center";

                    const cardDiv = document.createElement("div");
                    cardDiv.className = "card mb-3 d-flex flex-column";

                    const img = document.createElement("img");
                    img.src = game.image;
                    img.className = "card-img-top";
                    img.alt = game.name;

                    const cardBody = document.createElement("div");
                    cardBody.className = "card-body d-flex flex-column flex-grow-1";

                    const title = document.createElement("h5");
                    title.className = "card-title";
                    title.textContent = game.name;

                    const description = document.createElement("p");
                    description.className = "card-text mt-auto";
                    description.textContent = game.description;

                    const release_date = document.createElement("p");
                    release_date.className = "text-muted mt-auto";
                    release_date.textContent = `Çıkış Tarihi: ${game.release_date}`;

                    const developer = document.createElement("p");
                    developer.className = "card-text mt-auto";
                    developer.textContent = `Geliştirici: ${game.developer}`;

                    const steamLink = document.createElement("a");
                    steamLink.href = game.steam_url;
                    steamLink.textContent = "Steam";
                    steamLink.classList.add("btn", "btn-dark", "mb-4", "mt-auto");
                    steamLink.target = "_blank";

                    const updateBtn = document.createElement("button");
                    updateBtn.className = "btn btn-primary btn-sm update-btn";
                    updateBtn.textContent = "Güncelle";
                    updateBtn.dataset.id = game.id;

                    const deleteBtn = document.createElement("button");
                    deleteBtn.className = "btn btn-danger btn-sm delete-btn";
                    deleteBtn.textContent = "Sil";
                    deleteBtn.dataset.id = game.id;

                    const buttonContainer = document.createElement("div");
                    buttonContainer.className = "d-flex gap-2 mt-auto"; 

                    buttonContainer.appendChild(updateBtn);
                    buttonContainer.appendChild(deleteBtn);

                    cardBody.appendChild(title);
                    cardBody.appendChild(description);
                    cardBody.appendChild(release_date);
                    cardBody.appendChild(developer);
                    cardBody.appendChild(steamLink);
                    cardBody.appendChild(buttonContainer);

                    cardDiv.appendChild(img);
                    cardDiv.appendChild(cardBody);
                    colDiv.appendChild(cardDiv);

                    this.gameList.appendChild(colDiv);
                });



                document.querySelectorAll(".delete-btn").forEach(button => {
                    button.addEventListener("click", function () {
                        var gameId = this.getAttribute("data-id");
                        gameService.deleteGame(gameId)
                            .then(() => {
                                alert("Oyun başarıyla silindi.");
                                ui.displayGames();
                            })
                            .catch(error => alert(error));
                    });
                });

                document.querySelectorAll(".update-btn").forEach(button => {
                    button.addEventListener("click", function () {
                        var gameId = this.getAttribute("data-id");
                        var newName = prompt("Yeni oyun adı:");
                        var newCategory = prompt("Yeni kategori adı:");
                        var newDescription = prompt("Yeni açıklama:");
                        var newRelease_date = prompt("Yeni çıkış tarihi:");
                        var newImage = prompt("Yeni resim URL:");
                        var newDeveloper = prompt("Yeni geliştirici:");
                        var newSteam_url = prompt("Yeni Steam URL:");

                        var updatedGame = {
                            name: newName,
                            category: newCategory,
                            description: newDescription,
                            release_date: newRelease_date,
                            image: newImage,
                            developer: newDeveloper,
                            steam_url: newSteam_url,
                        };

                        gameService.updateGame(gameId, updatedGame)
                            .then(() => {
                                alert("Oyun başarıyla güncellendi.");
                                ui.displayGames();
                            })
                            .catch(error => alert(error));
                    });
                });

            })
            .catch(error => alert(error));
    };
}

var ui = new UI();

