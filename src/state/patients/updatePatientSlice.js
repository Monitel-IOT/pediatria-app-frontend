import { createSlice } from '@reduxjs/toolkit';
import { fetchEditPatientsById } from '../../thunkAction/patients/patientsThunk';

const initialState = {
  updatePatient: null,
  updatePatientLoading: false,
  updatePatientError: null,
};

export const updatePatientSlice = createSlice({
  name: 'updatePatient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEditPatientsById.pending, (state) => {
      state.updatePatientLoading = true;
      state.updatePatientError = false;
    });
    builder.addCase(fetchEditPatientsById.fulfilled, (state, action) => {
      state.updatePatient = action.payload;
      state.updatePatientLoading = false;
      state.updatePatientError = false;
    });
    builder.addCase(fetchEditPatientsById.rejected, (state, action) => {
      state.updatePatientLoading = false;
      state.updatePatientError = action.error;
    });
  },
});

export default updatePatientSlice.reducer;
