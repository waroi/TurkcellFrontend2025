import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {}, //* show, mode, book, action
  reducers: {
    setModal: (state, action) => {
      Object.entries(action.payload).forEach(
        ([key, value]) => (state[key] = value)
      );
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
