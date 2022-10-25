import { createSlice } from '@reduxjs/toolkit';
import { addNewPatient } from '../../thunkAction/patients/patientsThunk';

const initialState = {
  response: null,
  loading: false,
  error: null,
};

export const createPatientSlice = createSlice({
  name: 'createPatient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewPatient.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(addNewPatient.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(addNewPatient.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default createPatientSlice.reducer;
