import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteBookFromFirestore,
  fetchBooksFromFirestore,
} from '../../firebase/firebaseBooksService';

export const loadBooks = createAsyncThunk('books/loadBooks', async () => {
  return await fetchBooksFromFirestore();
});

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId) => {
    const isDeleted = await deleteBookFromFirestore(bookId);
    if (isDeleted) {
      return bookId;
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    category: 'All Books',
    searchTerm: '',
    loading: false,
    error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(loadBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books = state.books.filter((book) => book.id !== action.payload);
        localStorage.setItem('books', JSON.stringify(state.books));
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook, editBook, setCategory, setSearchTerm } =
  booksSlice.actions;

export default booksSlice.reducer;
