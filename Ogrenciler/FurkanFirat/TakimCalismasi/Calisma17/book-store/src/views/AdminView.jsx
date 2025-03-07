import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/slices/booksSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrash,
  faPlus,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
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
    <div className='container py-4'>
      <div className='category-container shadow-sm mb-4'>
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <div className='d-flex align-items-center'>
            <FontAwesomeIcon
              icon={faBook}
              className='text-orange me-2'
              size='lg'
            />
            <h2 className='m-0 text-orange'>Admin Panel</h2>
          </div>
          <button
            className='btn btn-orange d-flex align-items-center gap-2 px-3 py-2'
            onClick={handleAddBook}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add Book
          </button>
        </div>

        {books.length > 0 ? (
          <div className='bg-white rounded-3 overflow-hidden'>
            <div className='d-flex justify-content-between border-bottom p-3 bg-light'>
              <div className='d-flex gap-5 fw-bold'>
                <div className='width-50px'>ID</div>
                <div>Title</div>
              </div>
              <div className='width-80px'>Actions</div>
            </div>

            {books.map((book) => (
              <div
                key={book.id}
                className='d-flex justify-content-between border-bottom p-3 align-items-center'
              >
                <div className='d-flex gap-5'>
                  <div className='width-50px'>{book.id}</div>
                  <div className='fw-medium'>{book.title}</div>
                </div>
                <div className='d-flex gap-3'>
                  <button
                    className='btn btn-sm rounded-circle edit-button'
                    onClick={() => handleEditBook(book)}
                  >
                    <FontAwesomeIcon icon={faEdit} color='#ff8a00' />
                  </button>
                  <button
                    className='btn btn-sm rounded-circle delete-button'
                    onClick={() => dispatch(removeBook(book.id))}
                  >
                    <FontAwesomeIcon icon={faTrash} color='#d9534f' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='text-center p-5 bg-light rounded-3'>
            <FontAwesomeIcon
              icon={faBook}
              className='text-orange mb-3'
              size='2x'
            />
            <p className='mb-0'>Veri bulunamadı...</p>
          </div>
        )}
      </div>

      <BookModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        initialBook={selectedBook}
      />
    </div>
  );
}
