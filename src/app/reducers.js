import { authReducer } from '@features/auth/authSlice';
import { userReducer } from '@features/user/userSlice';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
});
