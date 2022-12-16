import { createSlice } from '@reduxjs/toolkit';
import { addNewAppointment } from '../../thunkAction/appointments/appointmentsThunk';

const initialState = {
  response: null,
  createAppointmentloading: false,
  createAppointmentError: null,
};

export const createAppointmentSlice = createSlice({
  name: 'createAppointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewAppointment.pending, (state) => {
      state.createAppointmentloading = true;
      state.createAppointmentError = false;
    });
    builder.addCase(addNewAppointment.fulfilled, (state, action) => {
      state.response = action.payload;
      state.createAppointmentloading = false;
      state.createAppointmentError = false;
    });
    builder.addCase(addNewAppointment.rejected, (state, action) => {
      state.createAppointmentloading = false;
      state.createAppointmentError = action.error;
    });
  },
});

export default createAppointmentSlice.reducer;
