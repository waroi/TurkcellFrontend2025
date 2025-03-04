import { books } from "../data/books"

export class Storage {
    static addBooks(data) {
        localStorage.setItem('books', JSON.stringify(data))
    }

    static getBook(data) {
        const books = JSON.parse(localStorage.getItem('books'))
        return books.filter(book => book.id === data)[0]
    }

    static getBooks() {
        const storageBooks = JSON.parse(localStorage.getItem('books'))
        return storageBooks.length > 0 ? { books: storageBooks } : books
    }
}