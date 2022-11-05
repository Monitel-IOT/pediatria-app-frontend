import { createSlice } from '@reduxjs/toolkit';
import {
  deleteAppointmentByIdAPI, getAppointmentByIdAPI, getAppointmentsAPI, updateAppointmentByIdAPI,
} from '../../thunkAction/appointments/appointmentsThunk';

const initialState = {
  appointments: [],
  appointment: null,
  loading: false,
  error: null,
};

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    appointmentsInitialState: () => initialState,
  },
  extraReducers: (builder) => {
    // get by id
    builder.addCase(getAppointmentByIdAPI.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getAppointmentByIdAPI.fulfilled, (state, action) => {
      state.appointment = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getAppointmentByIdAPI.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    // get
    builder.addCase(getAppointmentsAPI.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getAppointmentsAPI.fulfilled, (state, action) => {
      state.appointments = action.payload.data;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(getAppointmentsAPI.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    // delete
    builder.addCase(deleteAppointmentByIdAPI.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(deleteAppointmentByIdAPI.fulfilled, (state) => {
      state.loading = false;
      state.error = false;
    });
    builder.addCase(deleteAppointmentByIdAPI.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    // update
    builder.addCase(updateAppointmentByIdAPI.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(updateAppointmentByIdAPI.fulfilled, (state) => {
      state.loading = false;
      state.error = false;
    });
    builder.addCase(updateAppointmentByIdAPI.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { appointmentsInitialState } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
