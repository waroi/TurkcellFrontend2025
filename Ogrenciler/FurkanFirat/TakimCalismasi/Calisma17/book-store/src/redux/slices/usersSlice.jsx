import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchUsersFromFirestore,
  updateUserInFirestore,
  deleteUserFromFirestore,
} from "../../firebase/firebaseUserService";

export const loadUsers = createAsyncThunk("users/loadUsers", async () => {
  return await fetchUsersFromFirestore();
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ userId, updatedData }) => {
    const result = await updateUserInFirestore(userId, updatedData);
    if (result) {
      return { userId, updatedData };
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    const result = await deleteUserFromFirestore(userId);
    if (result) {
      return userId;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const { userId, updatedData } = action.payload;
        const index = state.users.findIndex((user) => user.id === userId);
        if (index !== -1) {
          state.users[index] = { ...state.users[index], ...updatedData };
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const userId = action.payload;
        state.users = state.users.filter((u) => u.id !== userId);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
