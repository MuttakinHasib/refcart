const { createSlice } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    register: async (state, { payload }) => {
      state.loading = true;
      try {
        await axios.post(`/api/user/register`, { payload });
        state.loading = false;
      } catch (err) {
        state.error = err.message;
        state.loading = false;
      }
    },
  },
});

export const registerReducer = authSlice.reducer;
export const { register } = authSlice.actions;
