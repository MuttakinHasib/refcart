import { createSlice } from '@reduxjs/toolkit';
import { attemptGetCountryData } from './countryActions';

const initialState = {
  loading: false,
  // error: null,
  divisions: [],
  districts: [],
  upazilas: [],
  unions: [],
};

const countrySlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(attemptGetCountryData.pending, state => {
        state.loading = true;
      })
      .addCase(attemptGetCountryData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.divisions = payload.divisions;
        state.districts = payload.districts;
        state.upazilas = payload.upazilas;
        state.unions = payload.unions;
        state.error = null;
      })
      .addCase(attemptGetCountryData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const countryReducer = countrySlice.reducer;
