import { createSlice } from '@reduxjs/toolkit';
import { attemptCreateCategory } from './categoryActions';

const initialState = {
  loading: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(attemptCreateCategory.pending, state => {
        state.loading = true;
      })
      .addCase(attemptCreateCategory.fulfilled, state => {
        state.loading = false;
      })
      .addCase(attemptCreateCategory.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const categoryReducer = categorySlice.reducer;
