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
      dispatch(logout());
    } else {
      dispatch(loginSuccess(decoded));
    }
  }
};

export default checkAuth;
