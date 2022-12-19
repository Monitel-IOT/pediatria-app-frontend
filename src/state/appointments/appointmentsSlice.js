import { createSlice } from '@reduxjs/toolkit';
import {
  deleteAppointmentByIdAPI, getAppointmentByIdAPI, updateAppointmentByIdAPI,
} from '../../thunkAction/appointments/appointmentsThunk';

const initialState = {
  appointments: [],
  appointment: null,
  showAppointmentForm: false,
  loading: false,
  error: null,
};

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    // form create appointment states
    openAppointnmentForm: (state) => {
      state.showAppointmentForm = true;
    },
    closeAppointmentForm: (state) => {
      state.showAppointmentForm = false;
    },
    // api states
    getAllAppointmentsState: (state, action) => {
      state.appointments = action.payload;
    },
    addNewAppointmentState: (state, action) => {
      const newArray = [...state.patients, action.payload];
      state.appointments = newArray;
    },
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

export const {
  appointmentsInitialState,
  getAllAppointmentsState,
  openAppointnmentForm,
  closeAppointmentForm,
  addNewAppointmentState,
} = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
