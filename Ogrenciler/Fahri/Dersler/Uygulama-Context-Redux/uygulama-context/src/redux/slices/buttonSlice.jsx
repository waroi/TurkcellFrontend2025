import { createSlice } from "@reduxjs/toolkit";
const buttonSlice = createSlice({
  name: "button",
  initialState: { button: "d-none", status: "idle", error: null },
  reducers: {
    changeButton: (state, action) => {
      state.button = action.payload;
    },
  },
});

export const { changeButton } = buttonSlice.actions;

export default buttonSlice.reducer;
