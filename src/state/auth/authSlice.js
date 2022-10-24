import { createSlice } from '@reduxjs/toolkit';
import {
  signOut, signUpWithEmailAndPassword, signInWithEmailAndPassword, getUserByFirebaseIdAPI,
} from '../../thunkAction/auth/authThunk';

const initialState = {
  databaseUser: [],
  user: null,
  loading: false,
  error: null,
  isUserAuthorized: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    authorizeUser: (state) => {
      state.isUserAuthorized = true;
    },
    unauthorizeUser: (state) => {
      state.isUserAuthorized = false;
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
    // GET user by FIrebase ID
    builder.addCase(getUserByFirebaseIdAPI.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getUserByFirebaseIdAPI.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getUserByFirebaseIdAPI.fulfilled, (state, action) => {
      state.databaseUser = action.payload;
      state.loading = false;
      state.error = false;
    });
  },
});

export const { addUser, authorizeUser, unauthorizeUser } = authSlice.actions;
export default authSlice.reducer;
