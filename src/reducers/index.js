import { combineReducers } from 'redux';
import menuReducer from '../slices/menuSlice';
import modalReducer from '../slices/modalSlice';

const rootReducer = combineReducers({
  menu: menuReducer,
  modal: modalReducer,
});

export default rootReducer;
