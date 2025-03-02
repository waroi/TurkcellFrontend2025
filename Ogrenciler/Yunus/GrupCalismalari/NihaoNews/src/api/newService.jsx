import { Storage } from "../utils/Storage";

const baseUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export class newsService {
    static async getNews(query = 'anime') {
        const response = await fetch(baseUrl + `everything?q=${query}&apiKey=${apiKey}&language=jp&pageSize=12`)
        const data = await response.json()
        data.articles.map((article) => {
            article.id = Math.random().toString(36).substring(2, 10);
        })
        Storage.setStorage(data.articles)
        return data
    }

    static async getTopHeadlines() {
        const response = await fetch(baseUrl + `top-headlines?country=us&apiKey=${apiKey}`)
        const data = await response.json()
        data.articles.map((article) => {
            article.id = Math.random().toString(36).substring(2, 10);
        })
        Storage.setStorage(data.articles)
        return data
    }

    static getNewsById(id) {
        const getAllNews = JSON.parse(localStorage.getItem('cachedNews')) || []
        const findNews = getAllNews.find(news => news.id === id)
        console.log(findNews)
        return findNews
    }
}