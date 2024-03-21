import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: null,
  message: null,
  loading: false,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    request: (state) => ({
      ...state,
      loading: true,
      message: null,
      error: null,
    }),
    success: (state, action) => ({
      ...state,
      loading: false,
      message: action.payload,
      error: null,
    }),
    failure: (state, action) => ({
      ...state,
      loading: false,
      message: null,
      error: action.payload,
    }),
    resetError: (state) => ({
      ...state,
      error: null,
    }),
  },
});

export const {
  request, success, failure, resetError,
} = accountSlice.actions;
export default accountSlice.reducer;
