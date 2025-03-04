import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../slice/booksSlice"; // booksSlice'i içe aktar

const store = configureStore({
  reducer: {
    books: booksReducer, // booksSlice ile reducer bağlandı
  },
});

export default store;
