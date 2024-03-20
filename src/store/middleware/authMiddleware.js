import {
  request, loginSuccess, loginFailure, success, failure,
} from '../slices/authSlice';
import { openModal } from '../slices/modalSlice';

const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(request());
    // Effectuer une requête d'authentification à l'API
    const response = await fetch('http://localhost:3001/v1/api/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const userData = await response.json();

    if (userData.error) {
      dispatch(loginFailure(userData.error));
      localStorage.removeItem('token');
      localStorage.removeItem('logged');
    } else {
      dispatch(loginSuccess(userData));

      localStorage.setItem('token', userData.token);
      localStorage.setItem('logged', 'true');
    }
    // Dispatch de l'action de login réussi avec les données utilisateur
  } catch (error) {
    // Dispatch de l'action de login échoué avec l'erreur
    dispatch(loginFailure(error.message));
  }
};

const signupUser = (credentials) => async (dispatch) => {
  try {
    dispatch(request());
    // Effectuer une requête d'authentification à l'API
    const response = await fetch('http://localhost:3001/v1/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const userData = await response.json();

    if (userData.error) {
      dispatch(loginFailure(userData));
    } else {
      dispatch(openModal('signupSuccess'));
      dispatch(success());
    }
  } catch (error) {
    // Dispatch de l'action de login échoué avec l'erreur
    dispatch(failure(error.message));
  }
};

export { loginUser, signupUser };
