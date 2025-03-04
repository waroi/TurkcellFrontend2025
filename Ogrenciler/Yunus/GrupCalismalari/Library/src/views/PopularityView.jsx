import { useEffect, useState } from "react"
import { BookService } from "../api/bookService"
import { useNavigate } from "react-router"

const PopularityView = () => {
    const [popularBooks, setPopularBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const getBooks = async (query = 'Türkiye') => setPopularBooks(await BookService.getBooks(query))
    useEffect(() => {
        getBooks()
    }, [])

    const getPopularBooks = () => getBooks(searchTerm)


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="d-flex gap-3">
                        <input type="text" className="form-control" defaultValue={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                        <button onClick={getPopularBooks} className="btn btn-success">Ara</button>
                    </div>
                    {popularBooks.map((book) => (
                        <div className="col-lg-3 my-3" key={book.id}>
                            <div className="card h-100 book-card" onClick={() => window.open(book.accessInfo.webReaderLink, '_blank')}>
                                <div className="card-img-container h-100">
                                    {<img src={book.volumeInfo.imageLinks.thumbnail} className="card-img-top object-fit-cover img-fluid" alt={book.volumeInfo.title} />}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{book.volumeInfo.title}</h5>
                                    <p className="card-title">{book.volumeInfo.subtitle}</p>
                                    <p className="card-text text-muted">Yazar: {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? book.volumeInfo.authors[0] : book.volumeInfo.authors}</p>
                                    <span className="badge bg-secondary">{book.genre}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default PopularityView