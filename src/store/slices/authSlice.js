import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    request: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      isAuthenticated: true,
      isAdmin: action.payload.role === 'admin',
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
    success: (state) => ({
      ...state,
      loading: false,
      error: null,
    }),
    failure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    resetError: (state) => ({
      ...state,
      error: null,
    }),
    setUser: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },

});

export const {
  request,
  loginSuccess,
  loginFailure,
  logout,
  resetError,
  success,
  failure,
  setUser,
} = authSlice.actions;
export default authSlice.reducer;
