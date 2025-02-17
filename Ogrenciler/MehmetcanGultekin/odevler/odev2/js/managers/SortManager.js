export class SortManager {
    constructor(gameService, displayCallback) {
        this.gameService = gameService;
        this.displayCallback = displayCallback;
        
        
        this.sortAZBtn = document.getElementById('sortAZ');
        this.sortZABtn = document.getElementById('sortZA');
        this.sortDateBtn = document.getElementById('sortDate');
        
        
        this.sortAZBtn.addEventListener('click', () => this.handleSort('AZ'));
        this.sortZABtn.addEventListener('click', () => this.handleSort('ZA'));
        this.sortDateBtn.addEventListener('click', () => this.handleSort('DATE'));
    }

    handleSort(sortType) {
        const sortedGames = this.gameService.sortGames(sortType);
        this.displayCallback(sortedGames);
    }
}