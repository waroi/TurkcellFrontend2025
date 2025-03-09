import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../slices/bookSlice";
import buttonReducer from "../slices/buttonSlice";
import userReducer from "../slices/userSlice";
import cardButtonReducer from "../slices/cardButtonSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    button: buttonReducer,
    user: userReducer,
    cardButton: cardButtonReducer,
  },
});
