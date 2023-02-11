import { createSlice } from '@reduxjs/toolkit';
import { deleteAppointmentByIdAPI } from '../../thunkAction/appointments/appointmentsThunk';

const initialState = {
  deleteAppointment: null,
  deleteAppointmentLoading: false,
  deleteAppointmentError: null,
};

export const deleteAppointmentSlice = createSlice({
  name: 'deleteAppointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteAppointmentByIdAPI.pending, (state) => {
      state.deleteAppointmentLoading = true;
      state.deleteAppointmentError = false;
    });
    builder.addCase(deleteAppointmentByIdAPI.fulfilled, (state, action) => {
      state.deleteAppointment = action.payload;
      state.deleteAppointmentLoading = false;
      state.deleteAppointmentError = false;
    });
    builder.addCase(deleteAppointmentByIdAPI.rejected, (state, action) => {
      state.deleteAppointmentLoading = false;
      state.deleteAppointmentError = action.error;
    });
  },
});

export default deleteAppointmentSlice.reducer;
