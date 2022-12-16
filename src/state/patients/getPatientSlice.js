import { createSlice } from '@reduxjs/toolkit';
import { fetchPatientsById } from '../../thunkAction/patients/patientsThunk';

const initialState = {
  getPatient: null,
  getPatientLoading: false,
  getPatientError: null,
};

export const getPatientSlice = createSlice({
  name: 'getPatient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPatientsById.pending, (state) => {
      state.getPatientLoading = true;
      state.getPatientError = false;
    });
    builder.addCase(fetchPatientsById.fulfilled, (state, action) => {
      state.getPatient = action.payload;
      state.getPatientLoading = false;
      state.getPatientError = false;
    });
    builder.addCase(fetchPatientsById.rejected, (state, action) => {
      state.getPatientLoading = false;
      state.getPatientError = action.error;
    });
  },
});

export default getPatientSlice.reducer;
