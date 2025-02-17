import { SearchManager } from './managers/SearchManager.js';
import { FilterManager } from './managers/FilterManager.js';
import { SortManager } from './managers/SortManager.js';
import { CardManager } from './managers/CardManager.js';
import { ModalManager } from './managers/ModalManager.js';
import { FormManager } from './managers/FormManager.js';
import { AlertManager } from './managers/AlertManager.js';

export class GameUI {
    constructor(gameService) {
        this.gameService = gameService;
        
    
        this.modalManager = new ModalManager();
        this.formManager = new FormManager();
        this.alertManager = new AlertManager();
        this.cardManager = new CardManager(gameService, this);
        
        
        this.searchManager = new SearchManager(gameService, this.displayGames.bind(this));
        this.filterManager = new FilterManager(gameService, this.displayGames.bind(this));
        this.sortManager = new SortManager(gameService, this.displayGames.bind(this));
        
       
        this.gameList = document.getElementById('gameList');
        this.gameForm = document.getElementById('gameForm');
        this.addGameBtn = document.getElementById('addGameBtn');
        
        
        this.handleSubmit = this.handleSubmit.bind(this);
        
        // Oyun ekle butonu
        this.addGameBtn.addEventListener('click', () => {
            this.formManager.clearForm();
            this.modalManager.showGameModal();
        });
        
        // Kaydet Butonu
        this.gameForm.addEventListener('submit', this.handleSubmit);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = this.formManager.getFormData();
        
        const action = formData.id ? 
            this.gameService.updateGame(formData.id, formData) :
            this.gameService.addGame(formData);

        action.then(() => {
            //Burada modalın kapanması lazımdı ama bu işi Modal Manager da yapıyoruz
        });
    }

    displayGames(games) {
        if (!games || !Array.isArray(games)) return;
        this.cardManager.displayGames(games);
    }

    showGameDetails(game) {
        this.modalManager.showGameDetails(game);
    }

    showEditForm(game) {
        this.formManager.setFormData(game); 
        this.modalManager.showGameModal('Oyun Düzenle');  
    }
}
