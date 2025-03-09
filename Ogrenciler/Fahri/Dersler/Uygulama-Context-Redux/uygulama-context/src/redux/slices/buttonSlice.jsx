import { createSlice } from "@reduxjs/toolkit";
const buttonSlice = createSlice({
name: "button",
initialState: { button: "d-none", status: "idle", error: null },
reducers: {
toggleButton: (state) => {
state.button = state.button === "d-none" ? "d-flex" : "d-none";
},
},
});
export const { changeButton, toggleButton } = buttonSlice.actions;
export default buttonSlice.reducer;