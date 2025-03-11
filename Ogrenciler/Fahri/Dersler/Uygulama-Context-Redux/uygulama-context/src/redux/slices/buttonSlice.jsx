import { createSlice } from "@reduxjs/toolkit";
const buttonSlice = createSlice({
  name: "button",
  initialState: { button: "d-block", status: "idle", error: null },
  reducers: {
    setButton: (state, action) => {
      state.button = action.payload;
    },
  },
});
export const { setButton } = buttonSlice.actions;
export default buttonSlice.reducer;
