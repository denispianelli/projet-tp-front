import { jwtDecode } from 'jwt-decode';
import { logout, loginSuccess } from '../slices/authSlice';

const checkAuthMiddleware = () => async (dispatch) => {
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

export default checkAuthMiddleware;
