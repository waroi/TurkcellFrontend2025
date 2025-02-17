import { fetchGames } from "./fetch.js";
import "./add.js";
import { Game } from "./game.js";


document.addEventListener("DOMContentLoaded", () => {
    fetchGames();

    const releaseInput = document.getElementById("release");
    const filterButton = document.getElementById("filters");
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("search-button");
    

    function renderGames(games) {
        const gameList = document.getElementById("game-list");
        gameList.textContent = ""; 
    
        games.forEach(gameData => {
            const game = new Game(
                gameData.id,
                gameData.name,
                gameData.description,
                gameData.category,
                gameData.releaseDate,
                gameData.image,
                gameData.videoURL,
                gameData.developer,
                gameData.steamURL
            );
            gameList.appendChild(game.createCard());
        });
    }
    

    document.querySelectorAll(".category-filter").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); 

            const selectedCategory = this.getAttribute("data-category"); 

            fetch("http://localhost:3000/games")
                .then(res => res.json())
                .then(data => {
                    let filteredGames = selectedCategory
                        ? data.filter(game => game.category === selectedCategory)
                        : data; 

                    renderGames(filteredGames);
                })
                .catch(error => console.error("Kategori filtreleme hatası:", error));
        });
    });

    
        filterButton.addEventListener("click", function () {
            const selectedDate = releaseInput.value; 
    
            if (!selectedDate) {
                alert("Lütfen bir tarih seçin!");
                return;
            }
    
            fetch("http://localhost:3000/games")
                .then(res => res.json())
                .then(data => {
                    let filteredGames = data.filter(game => game.releaseDate === selectedDate);
    
                    if (filteredGames.length === 0) {
                        alert("Bu tarihte oyun bulunamadı!");
                    }
    
                    renderGames(filteredGames); 
                })
                .catch(error => console.error("Tarihe göre filtreleme hatası:", error));
        });

        filterButton.addEventListener("keypress", function (event) {
            const selectedDate = releaseInput.value; 
    
            if (!selectedDate) {
                alert("Lütfen bir tarih seçin!");
                return;
            }
    
            fetch("http://localhost:3000/games")
                .then(res => res.json())
                .then(data => {
                    let filteredGames = data.filter(game => game.releaseDate === selectedDate);
    
                    if (filteredGames.length === 0) {
                        alert("Bu tarihte oyun bulunamadı!");
                    }
    
                    renderGames(filteredGames); 
                })
                .catch(error => console.error("Tarihe göre filtreleme hatası:", error));
            });
    document.getElementById("sorting").addEventListener("click", function () {
        const sortOption = document.getElementById("sort-select").value;
    
        fetch("http://localhost:3000/games")
            .then(res => res.json())
            .then(data => {
                let sortedGames = [...data];
    
                if (sortOption === "a-z") {
                    sortedGames.sort((a, b) => a.name.localeCompare(b.name)); 
                } else if (sortOption === "z-a") {
                    sortedGames.sort((a, b) => b.name.localeCompare(a.name)); 
                } else if (sortOption === "eski") {
                    sortedGames.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)); 
                } else if (sortOption === "yeni") {
                    sortedGames.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)); 
                }
    
                renderGames(sortedGames);
            })
            .catch(error => console.error("Sıralama sırasında hata oluştu:", error));
    });
    

 
    
        searchButton.addEventListener("click", function () {
            Search();
        });
    
        searchInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                Search();
            }
        });
    
        function Search() {
            const searchText = searchInput.value.toLowerCase().trim();
    
            fetch("http://localhost:3000/games")
                .then(res => res.json())
                .then(data => {
                    let filteredGames = data.filter(game => {
                        let gameName = game.name ? game.name.toLowerCase() : "";
                        let gameCategory = game.category ? game.category.toLowerCase() : "";
                        let gameDeveloper = game.developer ? game.developer.toLowerCase() : "";
    
                        return (
                            gameName.includes(searchText) ||
                            gameCategory.includes(searchText) ||
                            gameDeveloper.includes(searchText)
                        );
                    });
    
                    renderGames(filteredGames);
                })
                .catch(error => console.error("Arama sırasında hata oluştu:", error));
        }

});



