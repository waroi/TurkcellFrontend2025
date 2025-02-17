//db.json bağlantılarını burada yapmam lazımm!!
class Request {
    constructor(Url = 'http://localhost:3000') {
        this.Url = Url;
    }

    async get(index) {
        const response = await fetch(`${this.Url}${index}`);
        if (!response.ok) throw new Error("Veri çekme hatası: " + response.status);
        return await response.json();
    }

    async post(index, data) {
        const response = await fetch(`${this.Url}${index}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Ekleme hatası: " + response.status);
        return await response.json();
    }

    async put(index, data) {
        const response = await fetch(`${this.Url}${index}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Güncelleme hatası: " + response.status);
        return await response.json();
    }

    async delete(index) {
        const response = await fetch(`${this.Url}${index}`, { method: 'DELETE' });
        if (!response.ok) throw new Error("Silme hatası: " + response.status);
    }
}