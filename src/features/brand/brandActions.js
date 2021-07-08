import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorAlert, handleErrorMessage, successAlert } from '@utils/index';
import { client } from 'pages/_app';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const attemptCreateBrand = createAsyncThunk(
  'user/attemptCreateBrand',
  async (brandData, { getState }) => {
    try {
      const { user } = getState().auth;

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(`/api/brand/create`, brandData, config);

      errorAlert(data.error);
      successAlert(data.message);

      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);
