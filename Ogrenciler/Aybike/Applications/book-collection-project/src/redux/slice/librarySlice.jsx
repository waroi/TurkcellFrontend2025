import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../models/InitialState";

export const librarySlice = createSlice({
  name: "library",
  initialState,
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
