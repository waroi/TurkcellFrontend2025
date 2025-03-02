const baseUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const newsWithId= [];
export class newsService {
    
    static async getNews(query='anime') {
        const response = await fetch(baseUrl +`?q=${query}&apiKey=${apiKey}&language=jp&pageSize=12`)
        const data = await response.json()
        data.articles.map((article) => {
            article.id = Math.random().toString(36);
        })
        newsWithId.push(data.articles);
        return data
    }
    
}