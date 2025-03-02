const baseUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

let newsWithId = [];
export class newsService {
    static async getNews(query = 'anime') {
        newsWithId = []
        const response = await fetch(baseUrl + `everything?q=${query}&apiKey=${apiKey}&language=jp&pageSize=12`)
        const data = await response.json()
        data.articles.map((article) => {
            article.id = Math.random().toString(36);
        })
        newsWithId.push(data.articles);
        return data
    }

    static async getTopHeadlines() {
        newsWithId = []
        const response = await fetch(baseUrl + `top-headlines?country=us&apiKey=${apiKey}`)
        const data = await response.json()
        data.articles.map((article) => {
            article.id = Math.random().toString(36);
        })
        newsWithId.push(data.articles);
        return data
    }

    static async getNewsById(id) {
        console.log(newsWithId)
        console.log(newsWithId.find(news => news.id === id))
        // return newsWithId.filter(news => news.id === id)
    }
}