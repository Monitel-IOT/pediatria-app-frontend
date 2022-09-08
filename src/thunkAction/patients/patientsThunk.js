import { createAsyncThunk } from '@reduxjs/toolkit';
import { postPatientRequest } from '../../api/patients/patientsRequest';

// GET ALL PATIENTS BY DOCTOR
// export const fetchPatients = createAsyncThunk('patients/fetchPatients', async (id) => {
//   const response = await getPatientsRequest(id);
//   return response.data;
// });

// GET ALL PATIENTS
// Aún no operativo
export const fetchPatients = createAsyncThunk('patients/fetchPatients', async () => {
  // const response = await getPatientsRequest();
  // return response.data;
});

// POST PATIENT
export const addNewPatient = createAsyncThunk('patients/addNewPatient', async (newPatient) => {
  const response = await postPatientRequest(newPatient);
  return response.data;
});
