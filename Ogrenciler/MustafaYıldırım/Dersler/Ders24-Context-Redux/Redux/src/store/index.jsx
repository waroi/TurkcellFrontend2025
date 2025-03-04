import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slice/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default store;
