import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorAlert, handleErrorMessage, successAlert } from '@utils/index';

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
