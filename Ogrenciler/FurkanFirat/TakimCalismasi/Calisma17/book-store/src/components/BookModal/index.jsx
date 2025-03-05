import { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addBook, editBook } from '../../redux/slices/booksSlice';

export default function BookModal({ show, handleClose, initialBook }) {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState({
    id: '',
    title: '',
    author: '',
    price: '',
    coverImage: '',
    category: '',
  });

  useEffect(() => {
    if (initialBook) {
      setBookData(initialBook);
    } else {
      setBookData({
        id: '',
        title: '',
        author: '',
        price: '',
        coverImage: '',
        category: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (initialBook) {
      dispatch(
        editBook({
          id: initialBook.id,
          updatedBook: bookData,
        })
      );
    } else {
      dispatch(
        addBook({
          ...bookData,
          id: Date.now(),
        })
      );
    }
    console.log(bookData);
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

          <Button variant='primary' type='submit'>
            {initialBook ? 'Update Book' : 'Add Book'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
