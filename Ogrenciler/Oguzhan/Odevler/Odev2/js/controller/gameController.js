import { ApiService } from "../services/apiService.js";
import { FilterSortAndSearch } from "../services/filterAndSortService.js";
import { GameService } from "../services/gameService.js";
import { UI } from "../view/ui.js";


export class GameController {
    static currentEditingId = null;

    static async initFetchs() {
        const games = await ApiService.fetchGames();
        const categories = await ApiService.fetchCategories();


        UI.createGameCard(games, categories);
        UI.showCategories(categories);


        const clearRow = () => {
            const row = document.getElementById("row");
            row.innerHTML = '';
        };

        const filters = {
            category: null,
            releaseDate: null,
            searchTerm: '',
            sortBy: null
        };

        // Kategori filtresi
        document.getElementById("categoryFilter").addEventListener("change", (e) => {
            clearRow();
            filters.category = e.target.value;
            const filteredGames = FilterSortAndSearch.applyAllFilters(games, categories, filters);
            UI.createGameCard(filteredGames, categories);
        });

        // Çıkış tarihi filtresi
        document.getElementById("releaseDateFilter").addEventListener("change", (e) => {
            clearRow();
            filters.releaseDate = e.target.value;
            const filteredGames = FilterSortAndSearch.applyAllFilters(games, categories, filters);
            UI.createGameCard(filteredGames, categories);
        });

        // Arama
        const searchForm = document.querySelector('form[role="search"]');
        const searchInput = document.getElementById("searchInput");

        searchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            clearRow();
            filters.searchTerm = searchInput.value;
            const filteredGames = FilterSortAndSearch.applyAllFilters(games, categories, filters);
            UI.createGameCard(filteredGames, categories);
        });

        // Sıralama
        document.getElementById("sortSelect").addEventListener("change", (e) => {
            clearRow();
            filters.sortBy = e.target.value;
            const filteredGames = FilterSortAndSearch.applyAllFilters(games, categories, filters);
            UI.createGameCard(filteredGames, categories);
        });
    }


    static async initEventListeners() {
        const categoryBtn = document.getElementById("categoryBtn");
        if (categoryBtn) {
            categoryBtn.addEventListener("click", () => UI.listAddedCategories());
        }

        document.addEventListener("click", async (e) => {
            const editButton = e.target.closest(".editBtn");
            if (editButton) {
                const gameId = editButton.dataset.gameId;
                console.log("Edit tıklandı, gameid:", gameId);
                this.currentEditingId = gameId;
                const game = await GameService.getGameById(gameId);
                console.log("APIden gelen oyun:", game);
                UI.fillEditForm(game);
            }
        });

    }

    static async handleFormSubmit() {
        const form = document.getElementById("addGameForm");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            console.log("Form submit edildi, current ID:", this.currentEditingId);
            try {
                if (GameController.currentEditingId) {
                    await GameService.updateGame(GameController.currentEditingId);
                    GameController.currentEditingId = null;
                } else {
                    await GameService.createGame();
                }
                form.reset();
                await this.initFetchs();
            } catch (error) {
                console.error("Hata:", error);
                alert("Hata: " + error.message);
            }
        });
    }

    static async deleteGameEventListener() {
        document.addEventListener("click", async (e) => {

            //e.target.classList.contains("deleteBtn")
            if (e.target.closest(".deleteBtn")) {
                const gameId = e.target.dataset.gameId;
                try {
                    await GameService.deleteGame(gameId);
                    await this.initFetchs();
                } catch (error) {
                    console.error("Oyun silinemedi:", error);
                    alert("Oyun silinemedi: " + error.message);
                }
            }
        });
    }
}