// volumes
// https://www.googleapis.com/books/v1/volumes?q=search+terms
// isbn query
// https://www.googleapis.com/books/v1/volumes?q=ISBN:9786057879707

export class BookService {
    static async getBooks(query = 'Türkiye') {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        const data = await response.json()
        return data.items
    }
}