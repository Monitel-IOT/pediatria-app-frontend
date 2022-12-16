import { createSlice } from '@reduxjs/toolkit';
import { getAppointmentsAPI } from '../../thunkAction/appointments/appointmentsThunk';

const initialState = {
  getAllAppointmentsLoading: false,
  getAllAppointmentsError: null,
};

export const getPatientSlice = createSlice({
  name: 'getAllAppointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAppointmentsAPI.pending, (state) => {
      state.getAllAppointmentsLoading = true;
      state.getPatientError = false;
    });
    builder.addCase(getAppointmentsAPI.fulfilled, (state) => {
      state.getAllAppointmentsLoading = false;
      state.getPatientError = false;
    });
    builder.addCase(getAppointmentsAPI.rejected, (state, action) => {
      state.getAllAppointmentsLoading = false;
      state.getPatientError = action.error;
    });
  },
});

export default getPatientSlice.reducer;
