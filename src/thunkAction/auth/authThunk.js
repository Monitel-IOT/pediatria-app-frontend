import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, signIn, logout } from '../../api/auth/authRequest';
import createUser from '../../api/user/userRequest';

export const signUpWithEmailAndPassword = createAsyncThunk('auth/signUpWithEmailAndPassword', async (user) => {
  const userCredentials = await signUp(user.email, user.password);
  const response = await createUser({
    name: 'John',
    email: user.email,
    token: userCredentials.user.toJSON().stsTokenManager.accessToken,
  });
  return response.json();
});

export const signInWithEmailAndPassword = createAsyncThunk('auth/signInWithEmailAndPassword', async (user) => {
  const response = await signIn(user.email, user.password);
  return response.user.toJSON();
});

export const signOut = createAsyncThunk('auth/signOutStatus', async () => logout());
