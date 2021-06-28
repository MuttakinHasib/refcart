import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '@features/auth/authSlice';
import { countryReducer } from '@features/country/countrySlice';
import { productReducer } from '@features/product/productSlice';
import { userReducer } from '@features/user/userSlice';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
  countryData: countryReducer,
});
