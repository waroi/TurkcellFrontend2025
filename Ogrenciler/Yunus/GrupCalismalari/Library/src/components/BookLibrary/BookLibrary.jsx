import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './../../redux/slice/librarySlice'
import { newBookInitialState } from '../../utils/variables';
import Categories from '../Categories/Categories';


const BookLibrary = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const books = useSelector(state => state.books.books)

    const [showModal, setShowModal] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [newBook, setNewBook] = useState(newBookInitialState)
    const [bookList, setBookList] = useState(books)
    const [showAddModal, setShowAddModal] = useState(false)

    const [selectedCategory, setSelectedCategory] = useState("")

    const closeModal = () => {
        setShowModal(false)
        setShowAddModal(false)
    };

    const filteredBooks = books.filter(
        (book) =>
            (selectedCategory === "" || book.genre === selectedCategory) &&
            (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.genre.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewBook({
            ...newBook,
            [name]: name === "publishedYear" ? parseInt(value) : value
        });
    };

    const handleAddBook = (e) => {
        e.preventDefault()
        const bookToAdd = {
            ...newBook,
            id: self.crypto.randomUUID()
        };
        dispatch(addBook(bookToAdd))
        setBookList([...books, bookToAdd])
        setNewBook(newBookInitialState)
        setShowAddModal(false)
    };

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
                        <button
                            className="btn btn-primary w-25"
                            onClick={() => setShowAddModal(true)}
                        >
                            Yeni Kitap Ekle
                        </button>
                    </div>
                </div>
            </div>
            <Categories books={books} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {filteredBooks.map((book) => (
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

            <div className={`modal fade ${showAddModal ? 'show' : ''}`} style={{ display: showAddModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Yeni Kitap Ekle</h5>
                            <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
                        </div>
                        <form onSubmit={handleAddBook}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Kitap Adı</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        required
                                        value={newBook.title}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="author" className="form-label">Yazar</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="author"
                                        name="author"
                                        required
                                        value={newBook.author}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="genre" className="form-label">Tür</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="genre"
                                        name="genre"
                                        required
                                        value={newBook.genre}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="publishedYear" className="form-label">Yayın Yılı</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="publishedYear"
                                        name="publishedYear"
                                        required
                                        value={newBook.publishedYear}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="posterUrl" className="form-label">Kapak Görseli URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="posterUrl"
                                        name="posterUrl"
                                        value={newBook.posterUrl}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Açıklama</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        rows="3"
                                        value={newBook.description}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>İptal</button>
                                <button type="submit" className="btn btn-primary">Kaydet</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {
                (showModal || showAddModal) && (
                    <div className="modal-backdrop fade show"></div>
                )
            }
        </div >
    );
};

export default BookLibrary;