export class FormManager {
    constructor() {
        this.gameForm = document.getElementById('gameForm');
        
        this.gameId = document.getElementById('gameId');
        this.gameName = document.getElementById('gameName');
        this.gameDescription = document.getElementById('gameDescription');
        this.gameImage = document.getElementById('gameImage');
        this.gameCategory = document.getElementById('gameCategory');
        this.gameReleaseDate = document.getElementById('gameReleaseDate');
        this.gameCompany = document.getElementById('gameCompany');
        this.gameSteamUrl = document.getElementById('gameSteamUrl');
        this.gameRating = document.getElementById('gameRating');
        this.gamePlatforms = document.getElementById('gamePlatforms');
        this.gameMinOs = document.getElementById('gameMinOs');
        this.gameMinProcessor = document.getElementById('gameMinProcessor');
        this.gameMinMemory = document.getElementById('gameMinMemory');
        this.gameMinGraphics = document.getElementById('gameMinGraphics');
        this.gameMinStorage = document.getElementById('gameMinStorage');
        this.gameTags = document.getElementById('gameTags');
    }

    clearForm() {
        this.gameForm.reset();
        this.gameId.value = '';
    }

    getFormData() {
        const platforms = this.gamePlatforms.value
            ? this.gamePlatforms.value.split(',').map(p => p.trim())
            : ['PC'];
        
        const tags = this.gameTags.value
            ? this.gameTags.value.split(',').map(t => t.trim())
            : [this.gameCategory.value];

        const formData = {
            id: this.gameId.value || null,
            name: this.gameName.value,
            description: this.gameDescription.value,
            image: this.gameImage.value,
            category: this.gameCategory.value,
            releaseDate: this.gameReleaseDate.value,
            company: this.gameCompany.value,
            steamUrl: this.gameSteamUrl.value,
            rating: this.gameRating.value || "Değerlendirilmedi",
            platforms: platforms,
            minSystemReq: {
                os: this.gameMinOs.value || "Windows 10",
                processor: this.gameMinProcessor.value || "Belirtilmedi",
                memory: this.gameMinMemory.value || "Belirtilmedi",
                graphics: this.gameMinGraphics.value || "Belirtilmedi",
                storage: this.gameMinStorage.value || "Belirtilmedi"
            },
            tags: tags
        };
        return formData;
    }

    setFormData(game) {
        if (!game) return;
        
        this.gameId.value = game.id;
        this.gameName.value = game.name;
        this.gameDescription.value = game.description;
        this.gameImage.value = game.image;
        this.gameCategory.value = game.category;
        this.gameReleaseDate.value = game.releaseDate;
        this.gameCompany.value = game.company;
        this.gameSteamUrl.value = game.steamUrl;

        this.gameRating.value = game.rating || '';
        this.gamePlatforms.value = game.platforms ? game.platforms.join(', ') : '';
        
        if (game.minSystemReq) {
            this.gameMinOs.value = game.minSystemReq.os || '';
            this.gameMinProcessor.value = game.minSystemReq.processor || '';
            this.gameMinMemory.value = game.minSystemReq.memory || '';
            this.gameMinGraphics.value = game.minSystemReq.graphics || '';
            this.gameMinStorage.value = game.minSystemReq.storage || '';
        }
        
        this.gameTags.value = game.tags ? game.tags.join(', ') : '';

        if (!Array.from(this.gameCategory.options).some(option => option.value === game.category)) {
            const option = new Option(game.category, game.category);
            this.gameCategory.add(option);
        }
    }
} 