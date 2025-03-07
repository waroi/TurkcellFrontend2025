import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: { books: [], status: "idle", error: null },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      state.books = state.books.map((book) => {
        if (book.id === action.book.id) {
          return action.book;
        } else {
          return book;
        }
      });
    },
  },
});

export const { setBooks, addBook, removeBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
