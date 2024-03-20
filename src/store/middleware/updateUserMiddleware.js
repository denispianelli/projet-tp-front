import { success, failure, setUser } from '../slices/authSlice';
import { openModal } from '../slices/modalSlice';

const updateUserEmail = (data) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/v1/api/account/email', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    });

    const userData = await response.json();

    if (userData.error) {
      dispatch(failure(userData.error));
    } else {
      dispatch(success());
      dispatch(setUser(userData));
      dispatch(openModal('emailUpdated'));
    }
  } catch (error) {
    dispatch(failure(error.message));
  }
};

const updateUserPassword = (data) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/v1/api/account/password', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    });

    const userData = await response.json();

    if (userData.error) {
      dispatch(failure(userData.error));
    } else {
      dispatch(success());
      dispatch(setUser(userData));
      dispatch(openModal('passwordUpdated'));
    }
  } catch (error) {
    dispatch(failure(error.message));
  }
};

export { updateUserEmail, updateUserPassword };
