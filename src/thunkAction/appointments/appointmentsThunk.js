import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAppointmentById, getAppointments, deleteAppointmentById, updateAppointmentById,
} from '../../api/appointment/appointmentRequest';

export const getAppointmentByIdAPI = createAsyncThunk('appointments/getAppointmentById', async (idAppointment) => {
  const res = await getAppointmentById(idAppointment);
  return res.json();
});

export const getAppointmentsAPI = createAsyncThunk('appointments/getAppointments', async () => {
  const res = await getAppointments();
  return res.json();
});

export const deleteAppointmentByIdAPI = createAsyncThunk('appointments/deleteAppointmentById', async (idAppointment) => {
  const res = await deleteAppointmentById(idAppointment);
  return res.json();
});

export const updateAppointmentByIdAPI = createAsyncThunk('appointments/updateAppointmentById', async (appointmentObject) => {
  const res = await updateAppointmentById(
    appointmentObject.newAppointment,
    appointmentObject.idAppointment,
  );
  return res.json();
});
