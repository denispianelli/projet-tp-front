import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      isAuthenticated: true,
      user: action.payload,
      error: null,
      loading: false,
    }),
    loginFailure: (state, action) => ({
      ...state,
      isAuthenticated: false,
      user: null,
      error: action.payload,
      loading: false,
    }),
    logout: (state) => ({
      ...state,
      isAuthenticated: false,
      user: null,
      error: null,
    }),
    signupRequest: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    signupSuccess: (state) => ({
      ...state,
      loading: false,
      error: null,
    }),
    signupFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    resetError: (state) => ({
      ...state,
      error: null,
    }),
  },

});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  resetError,
  signupRequest,
  signupSuccess,
  signupFailure,
} = authSlice.actions;
export default authSlice.reducer;
