import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../slices/librarySlice";
import modalReducer from "../slices/modalSlice";

// const customizedMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
// });

const store = configureStore({
  reducer: {
    library: libraryReducer,
    modal: modalReducer,
  },

  //! For adding non-serialisable value into states.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
