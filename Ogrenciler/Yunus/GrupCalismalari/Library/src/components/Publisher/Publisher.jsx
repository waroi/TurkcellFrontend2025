import { useEffect, useState } from 'react'
import { newBookInitialState } from '../../utils/variables'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/slice/librarySlice'
import { Auth } from '../../api/auth'
import { FireStore } from '../../api/fireStore'
import { useNavigate } from 'react-router'

const Publisher = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [showAddModal, setShowAddModal] = useState(false)
    const [newBook, setNewBook] = useState(newBookInitialState)
    const [bookList, setBookList] = useState([])
    const [publisherName, setPublisherName] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const user = await Auth.getCurrentUser()
                if (user) {
                    const userData = await Auth.fetchUserByUid(user.uid)
                    const publisherNameValue = userData.publisherName

                    setPublisherName(publisherNameValue)
                    const books = await FireStore.getPublisherBooks(publisherNameValue)
                    setBookList(books)
                } else {
                    console.log("Böyle bir id'ye sahip kullanıcı yok")
                }
            } catch (error) {
                console.error("Kullanıcı verisi alınırken bir hata oluştu", error)
            } finally {
                setIsLoading(false)
            }
        };

        getUserData()
    }, [navigate]);

    const closeModal = () => {
        setShowModal(false)
        setShowAddModal(false)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewBook({
            ...newBook,
            [name]: name === "publishedYear" ? parseInt(value) : value
        });
    };

    const handleAddBook = async (event) => {
        event.preventDefault()

        const bookToAdd = {
            ...newBook,
            id: self.crypto.randomUUID(),
            publisherName: publisherName
        };
        await FireStore.addBook(bookToAdd)
        setShowAddModal(false)
        dispatch(addBook(bookToAdd))
        setBookList([...bookList, bookToAdd])
        setNewBook(newBookInitialState)
    };

    const filteredBooks = bookList.filter(
        (book) =>
        (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.genre.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <>
            {isLoading ? <div className='container'>Kitaplar yükleniyor...</div> :

                <div className="container">
                    <div className="row mb-4">
                        <div className="col">
                            <h1 className="text-center mb-4">{publisherName}'un' Yayınevinin Yayınları</h1>
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
                </div>
            }
        </>
    )
}

export default Publisher