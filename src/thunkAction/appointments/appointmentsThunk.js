import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAppointmentById, getAppointments } from '../../api/appointment/appointmentRequest';

export const getAppointmentByIdAPI = createAsyncThunk('appointments/getAppointmentById', async (idAppointment) => {
  const res = await getAppointmentById(idAppointment);
  return res.json();
});

export const getAppointmentsAPI = createAsyncThunk('appointments/getAppointments', async () => {
  const res = await getAppointments();
  return res.json();
});
