import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, logout } from '../../api/auth/authRequest';
import createUser from '../../api/user/userRequest';

export const signUpWithEmailAndPassword = createAsyncThunk('auth/signUpWithEmailAndPassword', async (user) => {
  const response = await createUser({
    name: user.name,
    email: user.email,
    password: user.password,
    surname: 'editar-apellido',
    dni: 'editar-dni',
    phone: '000000000',
  });
  return response.json();
});

export const signInWithEmailAndPassword = createAsyncThunk('auth/signInWithEmailAndPassword', async (user) => {
  const response = await signIn(user.email, user.password);
  return response.user.toJSON();
});

export const signOut = createAsyncThunk('auth/signOutStatus', async () => logout());
