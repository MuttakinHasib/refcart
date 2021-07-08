import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '@features/auth/authSlice';
import { countryReducer } from '@features/country/countrySlice';
import { productReducer } from '@features/product/productSlice';
import { userReducer } from '@features/user/userSlice';
import { brandReducer } from '@features/brand/brandSlice';
import { categoryReducer } from '@features/category/categorySlice';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  product: productReducer,
  brand: brandReducer,
  category: categoryReducer,
  countryData: countryReducer,
});
