import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "Sherlock Holmes 1",
      author: "Arthur Conan Doyle",
      page: 200,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Q7W9zrJjL._SX331_BO1,204,203,200_.jpg",
      releaseDate: 2015,
      description: "Merhaba ben kitap açıklaması",
    },
    {
      id: 2,
      title: "Sherlock Holmes 2",
      author: "Arthur Conan Doyle",
      page: 250,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Q7W9zrJjL._SX331_BO1,204,203,200_.jpg",
      releaseDate: 2017,
      description: "Merhaba ben kitap açıklaması",
    },
    {
      id: 3,
      title: "Sherlock Holmes 3",
      author: "Arthur Conan Doyle",
      page: 300,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Q7W9zrJjL._SX331_BO1,204,203,200_.jpg",
      releaseDate: 2019,
      description: "Merhaba ben kitap açıklaması",
    },
  ],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    updateBook: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      state.books[index] = action.payload;
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;

export default bookSlice.reducer;
