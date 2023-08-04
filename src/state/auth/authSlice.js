import { createSlice } from '@reduxjs/toolkit';
import {
  signOut, signUpWithEmailAndPassword, signInWithEmailAndPassword,
} from '../../thunkAction/auth/authThunk';
import { fetchEditUsersById, getUserByFirebaseIdAPI } from '../../thunkAction/profile/profileThunk';

const initialState = {
  databaseUser: [],
  user: null,
  loading: false,
  loginError: false,
  registerError: null,
  isUserAuthorized: false,
  nameSurnameLetters: '',
  updateProfileLoading: false,
  updateProfileError: false,
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
    initialStateAuth: () => initialState,
    // UPDATE method
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state.databaseUser.data = { ...state.databaseUser.data, [name]: value };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpWithEmailAndPassword.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.registerError = false;
    });
    builder.addCase(signUpWithEmailAndPassword.pending, (state) => {
      state.loading = true;
      state.registerError = false;
    });
    builder.addCase(signUpWithEmailAndPassword.rejected, (state, action) => {
      state.loading = false;
      state.registerError = action.error;
    });
    builder.addCase(signInWithEmailAndPassword.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.loginError = false;
    });
    builder.addCase(signInWithEmailAndPassword.pending, (state) => {
      state.loading = true;
      state.loginError = false;
    });
    builder.addCase(signInWithEmailAndPassword.rejected, (state, action) => {
      state.loading = false;
      state.loginError = action.error;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.user = initialState.user;
    });
    // GET user by FIrebase ID
    builder.addCase(getUserByFirebaseIdAPI.fulfilled, (state, action) => {
      state.databaseUser = action.payload;
      // obtener las primeras letras del nombre y apelllido del user
      if (action.payload.data.surname) {
        state.nameSurnameLetters = action.payload.data.name[0] + action.payload.data.surname[0];
      } else if (action.payload.data.name) {
        // eslint-disable-next-line prefer-destructuring
        state.nameSurnameLetters = action.payload.data.name[0];
        state.databaseUser.data.surname = '';
      }
      if (action.payload.data.msg === 'Not found') {
        // eslint-disable-next-line prefer-destructuring
        state.nameSurnameLetters = '...';
        state.databaseUser.data.name = 'user not found';
        state.databaseUser.data.surname = '...';
      }
    });

    // UPDATE user
    builder.addCase(fetchEditUsersById.pending, (state) => {
      state.updateProfileLoading = true;
      state.updateProfileError = false;
    });
    builder.addCase(fetchEditUsersById.fulfilled, (state, action) => {
      state.databaseUser = action.payload;
      state.updateProfileLoading = false;
      state.updateProfileError = false;
    });
    builder.addCase(fetchEditUsersById.rejected, (state, action) => {
      state.updateProfileLoading = false;
      state.updateProfileError = action.error;
    });
  },
});

export const {
  addUser, authorizeUser, unauthorizeUser, handleChange,
} = authSlice.actions;
export default authSlice.reducer;
