import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../../redux/slice/booksSlice"; 

const store = configureStore({
  reducer: {
    books: booksReducer, 
  },
});

export default store;
