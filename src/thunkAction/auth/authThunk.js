import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, signIn, logout } from '../../api/auth/authRequest';

export const signUpWithEmailAndPassword = createAsyncThunk('auth/signUpWithEmailAndPassword', async (user) => {
  const userCredentials = await signUp(user.email, user.password);
  return userCredentials.user.toJSON();
});

export const signInWithEmailAndPassword = createAsyncThunk('auth/signInWithEmailAndPassword', async (user) => {
  const response = await signIn(user.email, user.password);
  return response.user.toJSON();
});

export const signOut = createAsyncThunk('auth/signOutStatus', async () => logout());
