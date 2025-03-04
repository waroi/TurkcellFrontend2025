import { createSlice } from "@reduxjs/toolkit";
import { getBooks } from "../../database";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    books: await getBooks(),
  },
  reducers: {
    addBook: (state, action) => {
      action.payload.id = 12345;
      state.books = [...state.books, action.payload];
    },
    editBook: (state, action) => {
      console.log(state.books);
      console.log(action.payload);
      const { id } = action.payload;
      const index = state.books.findIndex((book) => book.id === id);

      if (index !== -1) {
        state.books[index] = action.payload;
      }

      //   console.log(state.books);
      //   console.log(action.payload);
      //   const { id, updatedBook } = action.payload;
      //   const index = state.books.findIndex((book) => book.id === id);

      //   if (index !== -1) {
      //     // Update the book at the specified index
      //     state.books[index] = { ...state.books[index], ...updatedBook };
      //   }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id != action.payload);
    },
  },
});

export const { addBook, editBook, deleteBook } = librarySlice.actions;

export default librarySlice.reducer;
