import { createSlice } from '@reduxjs/toolkit';
import { attemptCreateBrand } from './brandActions';

const initialState = {
  loading: false,
};

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(attemptCreateBrand.pending, state => {
        state.loading = true;
      })
      .addCase(attemptCreateBrand.fulfilled, state => {
        state.loading = false;
      })
      .addCase(attemptCreateBrand.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const brandReducer = brandSlice.reducer;
