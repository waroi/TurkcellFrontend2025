import React from 'react'
import { useSelector, useDispatch  } from 'react-redux';
import { updateBook } from '../redux/slices/bookSlice';



const UpdateModal = ({ isOpen, onClose,book }) => {
    const booksFromStore = useSelector((state) => state.book.books);
    const dispatch = useDispatch();
    if (!isOpen) return null;
    

    const handleUpdateBook = (event) => {
        event.preventDefault();
        const form = document.getElementById('updateBookForm');
        const formData = new FormData(form);
        const title = formData.get("title").trim();
        const author = formData.get("Yazar").trim();
        const category = formData.get("Kategori").trim();
        const created_at = formData.get("created-at").trim();
        const description_short = formData.get("Kısa-Tanım").trim();
        const description_long = formData.get("Uzun-Tanım").trim();
        const img_url = formData.get("Img-Url").trim();


        if (!title || !author) return alert("Tüm alanları doldurun!");

        dispatch(updateBook({ id: book.id, title, author, category, created_at, description_short, description_long, img_url }));
        onClose();
    };

    return (
        <>
            <div className={`modal ${isOpen ? 'show' : ''}`}
                style={{ display: isOpen ? 'block' : 'none' }} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Kitap Ekle</h5>
                            <button type="button" className="btn-close" onClick={onClose}
                                aria-label="Close">

                            </button>
                        </div>
                        <div className="modal-body">
                            <form id='updateBookForm' onSubmit={handleUpdateBook}>
                                <input name='title' defaultValue={book.title} type="text" placeholder='Kitap adı:' />
                                <input name='Kategori' defaultValue={book.category} type="text" placeholder='Kitap Kategori:' />
                                <input name='created-at' defaultValue={book.created_at.split("T")[0]} type="date" placeholder='Kitap Tarih:' />
                                <input name='Kısa-Tanım' defaultValue={book.description_short} type="text" placeholder='Kitap Kısa Tanım:' />
                                <input name='Uzun-Tanım' defaultValue={book.description_long} type="text" placeholder='Kitap Uzun Tanım:' />
                                <input name='Img-Url' defaultValue={book.img_url} type="text" placeholder='Kitap Url:' />
                                <input name='Yazar' defaultValue={book.author} type="text" placeholder='Kitap Yazar:' />
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                            <button onClick={(e) => handleUpdateBook(e)} type="submit" form='updateBookForm' className="btn btn-primary">Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default UpdateModal