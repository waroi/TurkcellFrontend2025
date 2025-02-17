// 1. request.js - Handles all API requests
class Request {
    constructor(baseUrl = 'http://localhost:3000') {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
        const response = await fetch(`${this.baseUrl}${endpoint}`);
        if (!response.ok) throw new Error("Veri çekme hatası: " + response.status);
        return await response.json();
    }

    async post(endpoint, data) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Ekleme hatası: " + response.status);
        return await response.json();
    }

    async put(endpoint, data) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error("Güncelleme hatası: " + response.status);
        return await response.json();
    }

    async delete(endpoint) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, { method: 'DELETE' });
        if (!response.ok) throw new Error("Silme hatası: " + response.status);
    }
}