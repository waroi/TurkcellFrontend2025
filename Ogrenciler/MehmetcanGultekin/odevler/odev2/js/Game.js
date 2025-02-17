export class Game {
    constructor(id, name, description, image, category, releaseDate, company, steamUrl, 
                rating, platforms, minSystemReq, tags) {
        this.id = String(id);
        this.name = name;
        this.description = description;
        this.image = image;
        this.category = category;
        this.releaseDate = releaseDate;
        this.company = company;
        this.steamUrl = steamUrl;
        this.rating = rating || "Değerlendirilmedi";
        this.platforms = platforms || ["PC"];
        this.minSystemReq = minSystemReq || {
            os: "Windows 10",
            processor: "Belirtilmedi",
            memory: "Belirtilmedi",
            graphics: "Belirtilmedi",
            storage: "Belirtilmedi"
        };
        this.tags = tags || [category];
    }

    static fromJSON(json) {
        if (!json) return null;
        
        return new Game(
            json.id,
            json.name,
            json.description,
            json.image,
            json.category,
            json.releaseDate,
            json.company,
            json.steamUrl,
            json.rating,
            json.platforms,
            json.minSystemReq,
            json.tags
        );
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            image: this.image,
            category: this.category,
            releaseDate: this.releaseDate,
            company: this.company,
            steamUrl: this.steamUrl,
            rating: this.rating,
            platforms: this.platforms,
            minSystemReq: this.minSystemReq,
            tags: this.tags
        };
    }
}
