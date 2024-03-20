import { jwtDecode } from 'jwt-decode';

import {
  logout, loginSuccess,
} from '../store/slices/authSlice';

const checkAuth = (dispatch) => {
  const token = localStorage.getItem('token');

  if (token) {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      localStorage.removeItem('token');
      dispatch(logout());
    } else {
      dispatch(loginSuccess(decoded));
    }
  }
};

const logoutUser = (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('logged');
  dispatch(logout());
};

export { checkAuth, logoutUser };
