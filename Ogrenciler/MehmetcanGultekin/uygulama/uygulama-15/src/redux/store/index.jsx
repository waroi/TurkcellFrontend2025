import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../slices/bookSlice";
import filteredBookReducer from "../slices/FilteredBookSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
    filteredBook: filteredBookReducer,
  },
});
export default store;
