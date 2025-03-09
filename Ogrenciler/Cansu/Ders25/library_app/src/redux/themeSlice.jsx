import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light',
  reducers: {
    toggleTheme: (state) => (state === 'light' ? 'dark' : 'light')
  }
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
