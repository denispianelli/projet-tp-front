import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  success: null,
  contact: null,
  loading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    request: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    success: (state, action) => ({
      ...state,
      success: action.payload,
      loading: false,
      error: null,
    }),
    failure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
});

export const { request, success, failure } = contactSlice.actions;
export default contactSlice.reducer;
