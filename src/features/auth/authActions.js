import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorAlert, handleErrorMessage, successAlert } from '@utils/index';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const attemptSignup = createAsyncThunk(
  'auth/attemptSignup',
  async signupData => {
    try {
      const { data } = await axios.post(
        `/api/auth/register`,
        signupData,
        config
      );
      errorAlert(data.message);
      successAlert(data.error);
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptActivation = createAsyncThunk(
  'auth/attemptActivation',
  async token => {
    try {
      const { data } = await axios.post(`/api/auth/active`, { token }, config);
      successAlert(data.message);
      errorAlert(data.error);
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptLogin = createAsyncThunk(
  'auth/attemptLogin',
  async loginData => {
    try {
      const { data } = await axios.post(`/api/auth/login`, loginData, config);
      successAlert(data.message);
      errorAlert(data.error);
      console.log(data);
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptGoogleSignIn = createAsyncThunk(
  'auth/attemptGoogleSignIn',
  async token => {
    try {
      const { data } = await axios.post(`/api/auth/google`, token, config);
      successAlert(data.message);
      errorAlert(data.error);
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);

export const attemptFacebookSignIn = createAsyncThunk(
  'auth/attemptFacebookSignIn',
  async token => {
    try {
      const { data } = await axios.post(`/api/auth/facebook`, token, config);
      successAlert(data.message);
      errorAlert(data.error);
      return data;
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);
