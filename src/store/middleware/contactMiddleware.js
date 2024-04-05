import { request, success, failure } from '../slices/contactSlice';

const sendMailContact = (data) => async (dispatch) => {
  try {
    dispatch(request());
    const response = await fetch('http://localhost:3001/v1/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const contactData = await response.json();

    if (contactData.error) {
      dispatch(failure(contactData.error));
    } else {
      dispatch(success());
    }
  } catch (error) {
    dispatch(failure(error.message));
  }
};

export default sendMailContact;
