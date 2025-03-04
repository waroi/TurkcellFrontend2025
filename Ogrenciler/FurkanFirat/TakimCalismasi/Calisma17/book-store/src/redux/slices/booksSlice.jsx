import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const storedBooks = localStorage.getItem("books");
const parsedBooks = storedBooks ? JSON.parse(storedBooks) : [];

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: parsedBooks.length > 0 ? parsedBooks : data,
    category: "All Books",
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
      localStorage.setItem("books", JSON.stringify(state.books));
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
      localStorage.setItem("books", JSON.stringify(state.books));
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { addBook, removeBook, setCategory } = booksSlice.actions;

export default booksSlice.reducer;
