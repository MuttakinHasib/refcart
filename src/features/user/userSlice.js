import { createSlice } from '@reduxjs/toolkit';
import {
  attemptChangePassword,
  attemptPasswordResetRequest,
} from './userActions';

const initialState = {
  loading: false,
  error: null,
  success: false,
  message: null,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(attemptPasswordResetRequest.pending, state => {
        state.loading = true;
      })
      .addCase(attemptPasswordResetRequest.fulfilled, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(attemptPasswordResetRequest.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(attemptChangePassword.pending, state => {
        state.loading = true;
      })
      .addCase(attemptChangePassword.fulfilled, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(attemptChangePassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const userReducer = userSlice.reducer;
