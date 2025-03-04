import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../slices/librarySlice";

const store = configureStore({
  reducer: {
    library: libraryReducer,
  },
});

export default store;
