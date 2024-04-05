import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => ({
      ...state,
      mode: state.mode === 'light' ? 'dark' : 'light',
    }),
    setDarkTheme: (state) => ({
      ...state,
      mode: 'dark',
    }),
    setLightTheme: (state) => ({
      ...state,
      mode: 'light',
    }),
  },
});

export const { toggleTheme, setDarkTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
