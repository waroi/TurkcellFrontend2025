
import { createSlice } from "@reduxjs/toolkit";
import { saveBooksToLocalStorage} from "../../utils/storage";
import initialState from "../../models/InitialState"

export const librarySlice = createSlice({
  name: "library",
  initialState, 
  reducers: {
    getLibrary: (state) => {
     saveBooksToLocalStorage(state.books);
    },
    getBookById: (state, action) => {
      state.book = state.books.find((book) => book.id === Number(action.payload));
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== Number(action.payload));
      saveBooksToLocalStorage(state.books); 
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
      saveBooksToLocalStorage(state.books); 
    },updateBook: (state, action) => {
      const updatedBook = action.payload; 
      const index = state.books.findIndex((book) => book.id === updatedBook.id);
      if (index !== -1) {
          state.books[index] = { ...state.books[index], ...updatedBook };
          saveBooksToLocalStorage(state.books);
      }
  },
    orderBooks: (state, action) => {
      const { order } = action.payload;
      state.books.sort((a, b) => {
        if (order === 'asc') {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      });
      saveBooksToLocalStorage(state.books);
    }
  },
});

export const { addBook, deleteBook, updateBook, getLibrary, getBookById, orderBooks} = librarySlice.actions;

export default librarySlice.reducer;



