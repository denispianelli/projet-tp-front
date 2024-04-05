import { combineReducers } from 'redux';
import menuReducer from '../slices/menuSlice';
import modalReducer from '../slices/modalSlice';
import authReducer from '../slices/authSlice';
import themeReducer from '../slices/themeSlice';
import accountReducer from '../slices/accountSlice';
import contactReducer from '../slices/contactSlice';

const rootReducer = combineReducers({
  menu: menuReducer,
  modal: modalReducer,
  auth: authReducer,
  theme: themeReducer,
  account: accountReducer,
  contact: contactReducer,
});

export default rootReducer;
