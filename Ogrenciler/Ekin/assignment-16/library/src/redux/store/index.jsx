import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../slices/librarySlice";
import modalReducer from "../slices/modalSlice";

const store = configureStore({
  reducer: {
    library: libraryReducer,
    modal: modalReducer,
  },

  //! For adding non-serialisable value into states.
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
