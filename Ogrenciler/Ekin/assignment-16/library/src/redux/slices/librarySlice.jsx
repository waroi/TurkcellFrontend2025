import { createSlice } from "@reduxjs/toolkit";

// import {
//   getBooks,
//   addBook as addBookToServer,
//   editBook as editBookToServer,
//   deleteBook as deleteBookFromServer,
// } from "../../database";

// import {
//   getBooks,
//   addBook as addBookToServer,
//   editBook as editBookToServer,
//   deleteBook as deleteBookFromServer,
// } from "../../firebase/firestore";

import {
  getBooks,
  addBook as addBookToServer,
  editBook as editBookToServer,
  deleteBook as deleteBookFromServer,
} from "../../firebase/firebase";

async function initialise() {
  let user = localStorage.getItem("user");

  if (user)
    return {
      user,
      books: await getBooks(user),
    };
  else
    return {
      books: [],
    };
}

export const librarySlice = createSlice({
  name: "library",
  initialState: await initialise(),
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setBooks: (state, action) => {
      state.books = action.payload;
    },

    addBook: (state, action) => {
      action.payload.id = Math.random().toString(36).substring(5);

      addBookToServer(state.user, action.payload);

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
      editBookToServer(state.user, action.payload);
    },

    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id != action.payload);
      deleteBookFromServer(state.user, action.payload);
    },
  },
});

export const { setUser, setBooks, addBook, editBook, deleteBook } =
  librarySlice.actions;

export default librarySlice.reducer;
