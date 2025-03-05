import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';

const storedBooks = localStorage.getItem('books');
const parsedBooks = storedBooks ? JSON.parse(storedBooks) : [];

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: parsedBooks.length > 0 ? parsedBooks : data,
    category: 'All Books',
    searchTerm: '',
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
      localStorage.setItem('books', JSON.stringify(state.books));
    },
    editBook: (state, action) => {
      const { id, updatedBook } = action.payload;
      const bookIndex = state.books.findIndex((book) => book.id === id);

      if (bookIndex !== -1) {
        state.books[bookIndex] = { ...state.books[bookIndex], ...updatedBook };
        localStorage.setItem('books', JSON.stringify(state.books));
      }
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addBook, removeBook, editBook, setCategory, setSearchTerm } =
  booksSlice.actions;

export default booksSlice.reducer;
