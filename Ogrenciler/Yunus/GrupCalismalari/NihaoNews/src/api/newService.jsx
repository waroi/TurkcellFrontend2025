const baseUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export class newsService {
    static async getNews(page) {
        const response = await fetch(baseUrl + `?q=sport&page=${page}&apiKey=${apiKey}&language=jp&pageSize=10`)
        const data = await response.json()
        return data
    }
}