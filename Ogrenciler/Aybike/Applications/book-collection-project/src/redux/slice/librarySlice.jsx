
import { createSlice } from "@reduxjs/toolkit";
import { loadBooksFromLocalStorage, saveBooksToLocalStorage } from "../../utils/storage";
import { defaultInitialState } from "../../models/InitialState"; 


const stateFromLocalStorage = loadBooksFromLocalStorage();

const updatedState = {
  ...defaultInitialState, 
  books: stateFromLocalStorage.length > 0 ? stateFromLocalStorage : defaultInitialState.books, 
};

export const librarySlice = createSlice({
  name: "library",
  initialState: updatedState, 
  reducers: {

   
    addBook: (state, action) => {
      state.books.push(action.payload);
      saveBooksToLocalStorage(state.books); 
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
      saveBooksToLocalStorage(state.books); 
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state.books.splice(index, 1, action.payload);
        saveBooksToLocalStorage(state.books); 
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = librarySlice.actions;

export default librarySlice.reducer;



