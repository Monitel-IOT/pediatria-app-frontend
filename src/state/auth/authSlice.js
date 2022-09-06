import { createSlice } from '@reduxjs/toolkit';
import { signOut, signUpWithEmailAndPassword, signInWithEmailAndPassword } from '../../thunkAction/auth/authThunk';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpWithEmailAndPassword.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(signUpWithEmailAndPassword.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(signUpWithEmailAndPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(signInWithEmailAndPassword.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(signInWithEmailAndPassword.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(signInWithEmailAndPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.user = initialState.user;
    });
  },
});

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
