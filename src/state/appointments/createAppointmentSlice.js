import { createSlice } from '@reduxjs/toolkit';
import { addNewAppointment } from '../../thunkAction/appointments/appointmentsThunk';

const initialState = {
  response: null,
  createAppointmentLoading: false,
  createAppointmentError: null,
};

export const createAppointmentSlice = createSlice({
  name: 'createAppointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewAppointment.pending, (state) => {
      state.createAppointmentLoading = true;
      state.createAppointmentError = false;
    });
    builder.addCase(addNewAppointment.fulfilled, (state, action) => {
      state.response = action.payload;
      state.createAppointmentLoading = false;
      state.createAppointmentError = false;
    });
    builder.addCase(addNewAppointment.rejected, (state, action) => {
      state.createAppointmentLoading = false;
      state.createAppointmentError = action.error;
    });
  },
});

export default createAppointmentSlice.reducer;
