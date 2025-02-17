export class SearchManager {
    constructor(gameService, displayCallback) {
        this.gameService = gameService;
        this.displayCallback = displayCallback;
        this.searchInput = document.getElementById('searchInput');
        this.categoryFilter = document.getElementById('categoryFilter');
        
        
        this.searchInput.addEventListener('input', this.handleSearch.bind(this));
    }

    handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase().trim();
        const category = this.categoryFilter.value;
        const filteredGames = this.gameService.filterGames(searchTerm, category);
        this.displayCallback(filteredGames);
    }
} 