import { combineReducers } from 'redux';
import menuReducer from '../slices/menuSlice';
import modalReducer from '../slices/modalSlice';
import authReducer from '../slices/authSlice';

const rootReducer = combineReducers({
  menu: menuReducer,
  modal: modalReducer,
  auth: authReducer,
});

export default rootReducer;
