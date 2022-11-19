import { createSlice } from '@reduxjs/toolkit';
import { addNewAppointment } from '../../thunkAction/appointments/appointmentsThunk';

const initialState = {
  response: null,
  loading: false,
  error: null,
};

export const createAppointmentSlice = createSlice({
  name: 'createAppointment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewAppointment.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(addNewAppointment.fulfilled, (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(addNewAppointment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default createAppointmentSlice.reducer;
