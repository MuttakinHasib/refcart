import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorAlert, handleErrorMessage } from '@utils/index';
import axios from 'axios';

export const attemptGetCountryData = createAsyncThunk(
  'user/attemptGetCountryData',
  async () => {
    try {
      const { data: divisions } = await axios.get(
        'https://raw.githubusercontent.com/MuttakinHasib/bangladesh-geocode/master/divisions/divisions.json'
      );
      const { data: districts } = await axios.get(
        'https://raw.githubusercontent.com/MuttakinHasib/bangladesh-geocode/master/districts/districts.json'
      );
      const { data: upazilas } = await axios.get(
        'https://raw.githubusercontent.com/MuttakinHasib/bangladesh-geocode/master/upazilas/upazilas.json'
      );
      const { data: unions } = await axios.get(
        'https://raw.githubusercontent.com/MuttakinHasib/bangladesh-geocode/master/unions/unions.json'
      );

      return {
        divisions: divisions[2].data,
        districts: districts[2].data,
        upazilas: upazilas[2].data,
        unions: unions[2].data,
      };
    } catch (err) {
      errorAlert(handleErrorMessage(err));
      return handleErrorMessage(err);
    }
  }
);
