import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
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
      contacts: action.payload,
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
