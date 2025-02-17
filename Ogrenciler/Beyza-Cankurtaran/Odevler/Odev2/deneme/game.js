//constructor yaz bura
class Game {
    constructor(data = {}) {
        this.id = data.id;
        this.name = data.OyunAdı ;
        this.description = data.Açıklama ;
        this.category = data.Kategori ;
        this.releaseDate = data.ÇıkışTarihi ;
        this.imageUrl = data.OyunGörseli ;
        this.developer = data.YapımcıFirma ;
        this.steamUrl = data.SteamURL ;
    }

    toApiFormat() {
        return {
            OyunAdı: this.name,
            Açıklama: this.description,
            Kategori: this.category,
            ÇıkışTarihi: this.releaseDate,
            OyunGörseli: this.imageUrl,
            YapımcıFirma: this.developer,
            SteamURL: this.steamUrl
        };
    }

    static fromApiData(apiData) {
        return new Game(apiData);
    }
}