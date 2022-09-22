import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPatientsRequest, postPatientRequest } from '../../api/patients/patientsRequest';

// GET ALL PATIENTS BY DOCTOR
// export const fetchPatients = createAsyncThunk('patients/fetchPatients', async (id) => {
//   const response = await getPatientsRequest(id);
//   return response.data;
// });

// GET ALL PATIENTS by ID doctor
export const fetchPatients = createAsyncThunk('patients/getPatients', async (id) => {
  const res = await getPatientsRequest(id);
  return res.json();
});

// Aún no operativo
// POST PATIENT
export const addNewPatient = createAsyncThunk('patients/addNewPatient', async (newPatient) => {
  const response = await postPatientRequest(newPatient);
  return response.data;
});
