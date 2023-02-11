import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAppointmentById,
  deleteAppointmentById,
  updateAppointmentById,
  getAppointmentsByPatientId,
  createAppointmentRequest,
} from '../../api/appointment/appointmentRequest';

export const getAppointmentByIdAPI = createAsyncThunk('appointments/getAppointmentById', async (idAppointment) => {
  const res = await getAppointmentById(idAppointment);
  return res.json();
});

export const getAppointmentsAPI = createAsyncThunk('appointments/getAppointmentsByPatientId', async (patient) => {
  const res = await getAppointmentsByPatientId(patient.idPatient, patient.token);
  return res.data;
});

export const deleteAppointmentByIdAPI = createAsyncThunk('appointments/deleteAppointmentById', async (appointment) => {
  const res = await deleteAppointmentById(appointment.idAppointment, appointment.token);
  return res.json();
});

export const updateAppointmentByIdAPI = createAsyncThunk('appointments/updateAppointmentById', async (appointmentObject) => {
  const res = await updateAppointmentById(
    appointmentObject.newAppointment,
    appointmentObject.idAppointment,
  );
  return res.json();
});

export const addNewAppointment = createAsyncThunk('patients/addNewAppointment', async (appointment) => {
  const response = await createAppointmentRequest(appointment);
  return response.data;
});
