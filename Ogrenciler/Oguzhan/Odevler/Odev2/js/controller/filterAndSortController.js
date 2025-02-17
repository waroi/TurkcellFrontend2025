export class FilterSortAndSearchController {

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
}