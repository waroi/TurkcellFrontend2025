import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "Sherlock Holmes 1",
      author: "Arthur Conan Doyle",
      page: 200,
      image:
        "https://m.media-amazon.com/images/I/81tNnqcHxlL._AC_UF1000,1000_QL80_.jpg",
      releaseDate: "2015-03-04",
      description: "Merhaba ben kitap açıklaması",
    },
    {
      id: 2,
      title: "Sherlock Holmes 2",
      author: "Arthur Conan Doyle",
      page: 250,
      image:
        "https://m.media-amazon.com/images/I/81tNnqcHxlL._AC_UF1000,1000_QL80_.jpg",
      releaseDate: "2017-10-25",
      description: "Merhaba ben kitap açıklaması",
    },
    {
      id: 3,
      title: "Sherlock Holmes 3",
      author: "Arthur Conan Doyle",
      page: 300,
      image:
        "https://m.media-amazon.com/images/I/81tNnqcHxlL._AC_UF1000,1000_QL80_.jpg",
      releaseDate: "2019-09-25",
      description: "Merhaba ben kitap açıklaması",
    },
  ],
};

export const bookSlice = createSlice({
  name: "book",
  initialState: localStorage.getItem("books")
    ? { books: JSON.parse(localStorage.getItem("books")) }
    : initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
      localStorage.setItem("books", JSON.stringify(state.books));
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      state.books[index] = action.payload;
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
      localStorage.setItem("books", JSON.stringify(state.books));
    },
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
