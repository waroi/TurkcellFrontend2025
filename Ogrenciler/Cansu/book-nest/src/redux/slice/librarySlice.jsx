import { createSlice } from "@reduxjs/toolkit";
// import Book from "../../models/Book";


export const librarySlice = createSlice({
  name: "library",
  // Book,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.librarys, action.payload];
    },
    deleteBook: (state, action) => {
      state.books = state.librarys.filter((library) => library.id !== action.payload);
    },
    updateBook: (state, action) => {
        const index = state.books.findIndex(book => book.id === action.payload.id);
        if (index !== -1) {
            state.books.splice(index, 1, action.payload);
        }
    }
  },
});

export const { addBook, deleteBook, updateBook } = librarySlice.actions;

export default librarySlice.reducer;
