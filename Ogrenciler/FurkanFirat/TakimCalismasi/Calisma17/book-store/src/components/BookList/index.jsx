import React from 'react';
import BookCard from '../BookCard';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../redux/slices/booksSlice';
import { Form } from 'react-bootstrap';

export default function BookList() {
  const dispatch = useDispatch();

  const { books, category, searchTerm } = useSelector((state) => state.books);

  const filteredBooks = books
    .filter((book) =>
      category !== 'All Books' ? book.category === category : true
    )
    .filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          name='title'
          value={searchTerm}
          placeholder='Search by title...'
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          required
        />
      </Form.Group>
      <div className='row'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p className='text-muted'>No matches.</p>
        )}
      </div>
    </>
  );
}
