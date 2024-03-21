import { request, success, failure } from '../slices/accountSlice';
import { openModal } from '../slices/modalSlice';

const resetPassword = (data) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await fetch('http://localhost:3001/v1/api/account/reset/password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const { message, error } = await response.json();

    if (error) {
      dispatch(failure(error));
    } else {
      dispatch(success(message));
      dispatch(openModal('passwordReset'));
    }
  } catch (error) {
    dispatch(failure(error));
  }
};

export { resetPassword };
