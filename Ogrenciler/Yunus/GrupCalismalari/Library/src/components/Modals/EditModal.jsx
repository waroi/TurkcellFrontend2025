import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateBook } from '../../redux/slice/librarySlice';

const EditModal = ({ book, setRefreshTrigger, refreshTrigger }) => {
    const dispatch = useDispatch()
    const [newBook, setNewBook] = useState(book)

    useEffect(() => {
        setNewBook(book)
    }, [book])

    const handleAddBook = (event) => {
        event.preventDefault();
        dispatch(updateBook(newBook))
        setRefreshTrigger(refreshTrigger + 23)
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setNewBook({
            ...newBook,
            [name]: value,
        });
    };

    return (
        <>
            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title"> {newBook.title}, kitabını düzenle</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
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
                                        value={newBook.title || ''}
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
                                        value={newBook.author || ''}
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
                                        value={newBook.genre || ''}
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
                                        value={newBook.publishedYear || ''}
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
                                        value={newBook.posterUrl || ''}
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
                                        value={newBook.description || ''}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">İptal</button>
                                <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Kaydet</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditModal;