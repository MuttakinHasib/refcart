import { combineReducers } from 'redux';
import { registerReducer } from './slices/user/authSlice';

export default combineReducers({
  register: registerReducer,
});
