import { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addBook, editBook } from '../../redux/slices/booksSlice';
import {
  addSingleBookToFirestore,
  editSingleBookToFirestore,
} from '../../firebase/firebaseBooksService';

export default function BookModal({ show, handleClose, initialBook }) {
  const dispatch = useDispatch();

  const [bookData, setBookData] = useState({
    id: '',
    title: '',
    author: '',
    category: '',
    coverImage: '',
    price: '',
    releaseDate: '',
    publisher: '',
  });

  useEffect(() => {
    if (initialBook) {
      setBookData(initialBook);
    } else {
      setBookData({
        id: '',
        title: '',
        author: '',
        category: '',
        coverImage: '',
        price: '',
        releaseDate: '',
        publisher: '',
      });
    }
  }, [initialBook, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (initialBook) {
      dispatch(editBook({ id: initialBook.id, updatedBook: bookData }));
      try {
        await editSingleBookToFirestore({ ...bookData, id: initialBook.id });
      } catch (error) {
        alert('Firestoreda güncellenirken hata oluştu: ' + error);
      }
    } else {
      const newBook = { ...bookData, id: Date.now() };
      dispatch(addBook(newBook));

      try {
        await addSingleBookToFirestore(newBook);
      } catch (error) {
        alert('firestorea eklenirken hata oluştu: ' + error);
      }
    }

    console.log('locale ve Firestorea da gönderildi.');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{initialBook ? 'Edit Book' : 'Add New Book'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={bookData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Category</Form.Label>
            <Form.Control
              type='text'
              name='category'
              value={bookData.category}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Author</Form.Label>
            <Form.Control
              type='text'
              name='author'
              value={bookData.author}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Cover Image URL</Form.Label>
            <Form.Control
              type='text'
              name='coverImage'
              value={bookData.coverImage}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='number'
              name='price'
              value={bookData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Release Date</Form.Label>
            <Form.Control
              type='text'
              name='releaseDate'
              value={bookData.releaseDate}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Publisher</Form.Label>
            <Form.Control
              type='text'
              name='publisher'
              value={bookData.publisher}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            {initialBook ? 'Update Book' : 'Add Book'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
