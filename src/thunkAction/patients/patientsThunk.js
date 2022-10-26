import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getPatientsRequest, postPatientRequest, getPatientsByIdRequest, deletePatientsByIdRequest,
} from '../../api/patients/patientsRequest';
// import { auth } from '../../config/firebase/firebase.config';

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

// GET A PATIENT BY ID
export const fetchPatientsById = createAsyncThunk('patients/getPatientById', async (id) => {
  const res = await getPatientsByIdRequest(id);
  return res.json();
});

// deleTe A PATIENT BY ID
export const deletePatientsById = createAsyncThunk('patients/deletePatientById', async (id) => {
  const res = await deletePatientsByIdRequest(id);
  return res.json();
});

// OPERATIVO
// POST PATIENT
export const addNewPatient = createAsyncThunk('patients/addNewPatient', async (patient) => {
  // const token = await auth.currentUser.getIdToken(true);
  const response = await postPatientRequest(patient.form, patient.token);
  return response.data;
});
