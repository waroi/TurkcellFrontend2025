import { createSlice } from "@reduxjs/toolkit";

import {
  getBooks,
  addBook as addBookToServer,
  editBook as editBookToServer,
  deleteBook as deleteBookFromServer,
} from "../../database";

export const librarySlice = createSlice({
  name: "library",
  initialState: {
    books: await getBooks(),
  },
  reducers: {
    addBook: (state, action) => {
      action.payload.id = Math.random().toString(36).substring(5);

      addBookToServer(action.payload);

      state.books.push(action.payload);

      //! Cannot perform "GET" on a proxy.
      /*
        addBookToServer(action.payload).then((response) =>
          state.books.push({ ...action.payload, id: response.id })
        );
      */
    },

    editBook: (state, action, index) => {
      index = state.books.findIndex((book) => book.id === action.payload.id);

      if (index == -1) return;

      state.books[index] = action.payload;
      editBookToServer(action.payload);
    },

    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id != action.payload);
      deleteBookFromServer(action.payload);
    },
  },
});

export const { addBook, editBook, deleteBook } = librarySlice.actions;

export default librarySlice.reducer;
