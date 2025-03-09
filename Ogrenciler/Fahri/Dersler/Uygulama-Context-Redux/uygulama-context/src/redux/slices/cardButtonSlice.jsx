import { createSlice } from "@reduxjs/toolkit";
const cardButtonSlice = createSlice({
  name: "cardButton",
  initialState: { cardButton: "d-none", status: "idle", error: null },
  reducers: {
    setCardButton: (state, action) => {
      state.cardButton = action.payload;
    },
  },
});
export const { setCardButton } = cardButtonSlice.actions;
export default cardButtonSlice.reducer;
