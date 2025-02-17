class Game {
    constructor(data) {
        this.id = data.id || this.generateId();
        this.name = data.name || '';
        this.description = data.description || '';
        this.category = data.category || '';
        this.releaseDate = data.releaseDate || '';
        this.image = data.image || '';
        this.developer = data.developer || '';
        this.steamUrl = data.steamUrl || '';
    }
//burda zamanı stringe dönüştürerek benzersiz id atamasını sağlamak
    generateId() {
        return Date.now().toString();
    }
//nesneleri json'a çevirme işlemi
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            category: this.category,
            releaseDate: this.releaseDate,
            image: this.image,
            developer: this.developer,
            steamUrl: this.steamUrl
        };
    }
}