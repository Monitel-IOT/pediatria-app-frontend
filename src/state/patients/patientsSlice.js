import { createSlice } from '@reduxjs/toolkit';
import { fetchPatients, addNewPatient } from '../../thunkAction/patients/patientsThunk';

const initialState = {
  patients: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      // GET ALL PATIENTS OF A DOCTOR
      .addCase(fetchPatients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPatients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // POST PATIENT
      .addCase(addNewPatient.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewPatient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.patients.push(action.payload);
      })
      .addCase(addNewPatient.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getAllPatientsOfADoctor = (state) => state.patients.patients;
export const getPatientsStatus = (state) => state.patients.status;
export const getPatientsError = (state) => state.patients.error;

export const getPatientByDni = (state, dni) => {
  state.patients.patients.find((patient) => patient.DNI === dni);
};

export default patientsSlice.reducer;
