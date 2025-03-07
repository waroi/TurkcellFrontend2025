import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './../../redux/slice/librarySlice'
import { newBookInitialState } from '../../utils/variables';
import Categories from '../Categories/Categories';


const BookLibrary = () => {
    const navigate = useNavigate();
    const books = useSelector(state => state.books.books)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState("")

    const filteredBooks = books.filter(
        (book) =>
            (selectedCategory === "" || book.genre === selectedCategory) &&
            (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.genre.toLowerCase().includes(searchTerm.toLowerCase()))
    )


    return (
        <div className="container">
            <Outlet />
            <div className="row mb-4">
                <div className="col">
                    <h1 className="text-center mb-4">Balığın Kütüphane Dünyası</h1>
                    <div className="d-flex search-bar justify-content-between align-items-center mb-4">
                        <div className="search-container w-100 me-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Kitap, yazar veya tür ara..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Categories books={books} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {filteredBooks && filteredBooks.map((book) => (
                    <div className="col-lg-3" key={book.id}>
                        <div className="card h-100 book-card" onClick={() => {
                            navigate(`/books/${book.id}`)
                        }}>
                            <div className="card-img-container h-100">
                                {
                                    <img src={book.posterUrl} className="card-img-top img-fluid" alt={book.title} />
                                }
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text text-muted">{book.author}</p>
                                <span className="badge bg-secondary">{book.genre}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {
                filteredBooks.length === 0 && (
                    <div className="alert alert-info mt-4">
                        Arama kriterlerinize uygun kitap bulunamadı.
                    </div>
                )
            }
        </div>
    );
};

export default BookLibrary;