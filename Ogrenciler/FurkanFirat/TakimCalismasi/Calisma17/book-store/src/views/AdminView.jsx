import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/slices/booksSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import BookModal from '../components/BookModal';
import { useState } from 'react';

export default function AdminView() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleEditBook = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };
  const handleAddBook = () => {
    setSelectedBook(null);
    setShowModal(true);
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-between p-2'>
        <h2>Admin Panel</h2>
        <button className='btn btn-primary' onClick={handleAddBook}>
          Add Book
        </button>
      </div>
      {books.length > 0 ? (
        books.map((book) => (
          <div
            key={book.id}
            className='d-flex justify-content-between border p-2'
          >
            <div className='d-flex gap-3'>
              <div>{book.id}</div>
              <div>{book.title}</div>
            </div>
            <div className='d-flex gap-2'>
              <button onClick={() => handleEditBook(book)}>
                <FontAwesomeIcon icon={faEdit} color='orange' />
              </button>
              <button onClick={() => dispatch(removeBook(book.id))}>
                <FontAwesomeIcon icon={faTrash} color='red' />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Veri bulunamadı...</p>
      )}
      <BookModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        initialBook={selectedBook}
      />
    </div>
  );
}
