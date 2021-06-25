import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorAlert, handleErrorMessage, successAlert } from '@utils/index';
import { updateAuthUser } from '@features/auth/authSlice';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const attemptPasswordResetRequest = createAsyncThunk(
  'user/attemptPasswordResetRequest',
  async email => {
    try {
      const { data } = await axios.post(
        `/api/user/forget-password`,
        email,
        config
      );
      errorAlert(data.error);
      successAlert(data.message);
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptChangePassword = createAsyncThunk(
  'user/attemptChangePassword',
  async email => {
    try {
      const { data } = await axios.post(
        `/api/user/change-password`,
        email,
        config
      );
      errorAlert(data.error);
      successAlert(data.message);
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptGetUserProfile = createAsyncThunk(
  'user/attemptGetUserProfile',
  async (_, { dispatch, getState }) => {
    try {
      const { user } = getState().auth;

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user/profile`, config);

      errorAlert(data.error);
      successAlert(data.message);
      dispatch(updateAuthUser(data.user));
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptUpdateProfile = createAsyncThunk(
  'user/attemptUpdateProfile',
  async (updatedData, { dispatch, getState }) => {
    try {
      const { user } = getState().auth;

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/user/profile/update`,
        updatedData,
        config
      );
      errorAlert(data.error);
      successAlert(data.message);
      dispatch(updateAuthUser(data.user));
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);
