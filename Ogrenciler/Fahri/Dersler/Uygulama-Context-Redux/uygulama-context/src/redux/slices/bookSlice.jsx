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
    changeBook: (state, action) => {
      state.books = state.books.map((book) => {
        if (book.id === action.payload) {
          return action.book;
        } else {
          return book;
        }
      });
    },
    clearBooks: (state) => {
      state.books = [];
    },
  },
});

export const { setBooks, addBook, removeBook, changeBook, clearBooks } =
  bookSlice.actions;

export default bookSlice.reducer;
