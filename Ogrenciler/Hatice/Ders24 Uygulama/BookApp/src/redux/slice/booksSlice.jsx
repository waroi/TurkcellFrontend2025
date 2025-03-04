import { createSlice } from "@reduxjs/toolkit";
import booksData from "../../db/books"; // db'deki books arrayini kullan

const initialState = {
  books: booksData, // Başlangıç kitapları
  filter: "",
  sort: "asc",
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    filterBooks: (state, action) => {
      state.filter = action.payload;
    },
    sortBooks: (state, action) => {
      state.sort = action.payload;
      state.books.sort((a, b) =>
        state.sort === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      );
    },
  },
});

export const { addBook, deleteBook, filterBooks, sortBooks } = booksSlice.actions;
export default booksSlice.reducer;
