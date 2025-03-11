import { create } from "zustand";

import {
  getBooks,
  addBook as addBookToServer,
  editBook as editBookToServer,
  deleteBook as deleteBookFromServer,
} from "./firebase";

const initial = await (async (user) =>
  user
    ? {
        user,
        books: await getBooks(user),
      }
    : {
        books: [],
      })(localStorage.getItem("user"));

export default create((set) => ({
  ...initial,

  setUser: (user) =>
    set((state) => ({
      ...state,
      user,
    })),

  setBooks: (books) =>
    set((state) => ({
      ...state,
      books,
    })),

  addBook: (book) =>
    set((state) => {
      book.id = Math.random().toString(36).substring(5);

      state.books.push(book);
      addBookToServer(state.user, book);

      return state;
    }),

  editBook: (book, index) =>
    set((state) => {
      index = state.books.findIndex(
        (selectedBook) => book.id === selectedBook.id
      );

      if (index != -1) {
        state.books[index] = book;
        editBookToServer(state.user, book);
      }

      return state;
    }),

  deleteBook: (id) =>
    set((state) => {
      state.books = state.books.filter((book) => id != book.id);
      deleteBookFromServer(state.user, id);

      return state;
    }),
}));
