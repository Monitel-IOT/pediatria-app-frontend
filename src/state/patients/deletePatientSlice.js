import { createSlice } from '@reduxjs/toolkit';
import { deletePatientsById } from '../../thunkAction/patients/patientsThunk';

const initialState = {
  deletePatient: null,
  deletePatientLoading: false,
  deletePatientError: null,
};

export const deletePatientSlice = createSlice({
  name: 'deletePatient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deletePatientsById.pending, (state) => {
      state.deletePatientLoading = true;
      state.deletePatientError = false;
    });
    builder.addCase(deletePatientsById.fulfilled, (state, action) => {
      state.deletePatient = action.payload;
      state.deletePatientLoading = false;
      state.deletePatientError = false;
    });
    builder.addCase(deletePatientsById.rejected, (state, action) => {
      state.deletePatientLoading = false;
      state.deletePatientError = action.error;
    });
  },
});

export default deletePatientSlice.reducer;
