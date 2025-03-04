import { createSlice } from "@reduxjs/toolkit";
const User = {
    isAdmin: false,
};

const UserIsAdmin = true;

export const userSlice = createSlice({
  name: "library",
  User,
  reducers: {
    userType: (state) => {
      state.isAdmin = !state.userType;
    },
  },
});

export const { addBook, deleteBook, updateBook } = userSlice.actions;

export default userSlice.reducer;
