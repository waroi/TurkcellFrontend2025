import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  user: {
    id: "",
    email: "",
    password: "",
    publisher: "",
  },
  book: {
    id: "",
    title: "",
    author: "",
    year: "",
    description: "",
    available: true,
    imgUrl: "",
    paperType: "",
    size: "",
    printCount: "",
    publisher: "",
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addOneUser: (state, action) => {
      state.user = action.payload;
    },
    addBook: (state) => {
      state.books = [...state.books, state.book];
      state.book = {
        ...state.book,
        id: "",
        title: "",
        author: "",
        year: "",
        description: "",
        available: true,
        imgUrl: "",
        paperType: "",
        size: "",
        printCount: "",
      };
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    addAllBook: (state, action) => {
      state.books = action.payload;
    },
    updateBook: (state) => {
      const bookIndex = state.books.findIndex(
        (book) => book.id === state.book.id
      );
      state.books[bookIndex] = { ...state.books[bookIndex], ...state.book };
      state.book = {
        ...state.book,
        id: "",
        title: "",
        author: "",
        year: "",
        description: "",
        available: true,
        imgUrl: "",
        paperType: "",
        size: "",
        printCount: "",
      };
    },
    setBook: (state, action) => {
      state.book = action.payload;
    },
    setUpdateBook: (state, action) => {
      state.book = { ...state.book, ...action.payload };
    },
    resetBook: (state) => {
      state.book = {
        ...state.book,
        id: "",
        title: "",
        author: "",
        year: "",
        description: "",
        available: true,
        imgUrl: "",
        paperType: "",
        size: "",
        printCount: "",
      };
    },
  },
});

export const {
  addBook,
  deleteBook,
  addAllBook,
  updateBook,
  setBook,
  setUpdateBook,
  resetBook,
  addOneUser,
} = bookSlice.actions;

export default bookSlice.reducer;
