
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
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex((book) => book.id === Number(action.payload));
      if (index !== -1) {
        state.books.splice(index, 1, action.payload);
        saveBooksToLocalStorage(state.books); 
      }
    },
  },
});

export const { addBook, deleteBook, updateBook, getLibrary, getBookById} = librarySlice.actions;

export default librarySlice.reducer;



