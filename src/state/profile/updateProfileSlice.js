import { createSlice } from '@reduxjs/toolkit';
import { fetchEditUsersById } from '../../thunkAction/profile/profileThunk';

const initialState = {
  updateProfile: [],
  updateProfileLoading: false,
  updateProfileError: null,
};

export const updateProfileSlice = createSlice({
  name: 'updateProfile',
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state.updateProfile = { ...state.updateProfile, [name]: value };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEditUsersById.pending, (state) => {
      state.updateProfileLoading = true;
      state.updateProfileError = false;
    });
    builder.addCase(fetchEditUsersById.fulfilled, (state, action) => {
      state.updateProfile = action.payload;
      state.updateProfileLoading = false;
      state.updateProfileError = false;
    });
    builder.addCase(fetchEditUsersById.rejected, (state, action) => {
      state.updateProfileLoading = false;
      state.updateProfileError = action.error;
    });
  },
});

export const { handleChange } = updateProfileSlice.actions;
export default updateProfileSlice.reducer;
