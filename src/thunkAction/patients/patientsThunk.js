import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getPatientsRequest,
  postPatientRequest,
  getPatientsByIdRequest,
  deletePatientsByIdRequest,
  editPatientsByIdRequest,
} from '../../api/patients/patientsRequest';
// import { auth } from '../../config/firebase/firebase.config';

// GET ALL PATIENTS BY DOCTOR
// export const fetchPatients = createAsyncThunk('patients/fetchPatients', async (id) => {
//   const response = await getPatientsRequest(id);
//   return response.data;
// });

// GET ALL PATIENTS by ID doctor
export const fetchPatients = createAsyncThunk('patients/getPatients', async (token) => {
  const res = await getPatientsRequest(token);
  return res.data;
});

// GET A PATIENT BY ID
export const fetchPatientsById = createAsyncThunk('patients/getPatientById', async (patient) => {
  const res = await getPatientsByIdRequest(patient.idPatient, patient.token);
  return res.data;
});

// Put A PATIENT BY ID
export const fetchEditPatientsById = createAsyncThunk('patients/fetchEditPatientsById', async (patient) => {
  const res = await editPatientsByIdRequest(patient.idPatient, patient.form, patient.token);
  return res.data;
});

// deleTe A PATIENT BY ID
export const deletePatientsById = createAsyncThunk('patients/deletePatientById', async (patient) => {
  const res = await deletePatientsByIdRequest(patient.id, patient.token);
  return res.json();
});

// OPERATIVO
// POST PATIENT
export const addNewPatient = createAsyncThunk('patients/addNewPatient', async (patient) => {
  // const token = await auth.currentUser.getIdToken(true);
  const response = await postPatientRequest(patient.form, patient.token);
  return response.data;
});
