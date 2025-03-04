import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { books } from '../data/books';


const BookLibrary = () => {
    const [selectedBook, setSelectedBook] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [newBook, setNewBook] = useState({
        id: "",
        title: "",
        author: "",
        posterUrl: "",
        description: "",
        publishedYear: "",
        genre: ""
    });
    const [bookList, setBookList] = useState(books);
    const [showAddModal, setShowAddModal] = useState(false);

    // const openBookDetails = (book) => {
    //     setSelectedBook(book);
    //     setShowModal(true);
    // };

    const closeModal = () => {
        setShowModal(false);
        setShowAddModal(false);
    };

    const filteredBooks = bookList.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({
            ...newBook,
            [name]: name === "publishedYear" ? parseInt(value) : value
        });
    };

    const handleAddBook = (e) => {
        e.preventDefault();
        const bookToAdd = {
            ...newBook,
            id: (bookList.length + 1).toString()
        };
        setBookList([...bookList, bookToAdd]);
        setNewBook({
            id: "",
            title: "",
            author: "",
            posterUrl: "",
            description: "",
            publishedYear: "",
            genre: ""
        });
        setShowAddModal(false);
    };

    const handleDeleteBook = (id) => {
        setBookList(bookList.filtesr(book => book.id !== id));
        setShowModal(false);
    };

    return (
        <div className="container py-5">
            <div className="row mb-4">
                <div className="col">
                    <h1 className="text-center mb-4">Balığın Kütüphanesi</h1>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="search-container">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Kitap, yazar veya tür ara..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowAddModal(true)}
                        >
                            Yeni Kitap Ekle
                        </button>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {filteredBooks.map((book) => (
                    <div className="col" key={book.id}>
                        <div className="card h-100 book-card" onClick={() => openBookDetails(book)}>
                            <div className="card-img-container">
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

            {filteredBooks.length === 0 && (
                <div className="alert alert-info mt-4">
                    Arama kriterlerinize uygun kitap bulunamadı.
                </div>
            )}

            {selectedBook && (
                <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h5 className="modal-title">{selectedBook.title}</h5>
                                <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        {
                                            <img src={selectedBook.posterUrl} className="img-fluid rounded" alt={selectedBook.title} />
                                        }
                                    </div>
                                    <div className="col-md-8">
                                        <div className="mb-3">
                                            <span className="fw-bold">Yazar: </span>
                                            <span>{selectedBook.author}</span>
                                        </div>
                                        <div className="mb-3">
                                            <span className="fw-bold">Yayın Yılı: </span>
                                            <span>{selectedBook.publishedYear}</span>
                                        </div>
                                        <div className="mb-3">
                                            <span className="fw-bold">Tür: </span>
                                            <span className="badge bg-secondary">{selectedBook.genre}</span>
                                        </div>
                                        <div className="mb-3">
                                            <span className="fw-bold">Açıklama: </span>
                                            <p>{selectedBook.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteBook(selectedBook.id)}
                                >
                                    Kitabı Sil
                                </button>
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Kapat</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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

            {(showModal || showAddModal) && (
                <div className="modal-backdrop fade show"></div>
            )}
        </div>
    );
};

export default BookLibrary;