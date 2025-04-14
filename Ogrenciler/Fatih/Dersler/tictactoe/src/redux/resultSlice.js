import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.value = action.payload;
    },
    resetResult: (state) => {
      state.value = null;
    },
  },
});

export const { setResult, resetResult } = resultSlice.actions;
export const selectResult = (state) => state.result.value;
export default resultSlice.reducer;
