import { createAsyncThunk } from '@reduxjs/toolkit';
import { editUserByIdRequest, getUserByFirebaseId } from '../../api/user/userRequest';

// Put A PATIENT BY ID
export const fetchEditUsersById = createAsyncThunk('profile/fetchEditUsersById', async (patient) => {
  const res = await editUserByIdRequest(patient.idPatient, patient.form, patient.token);
  return res.data;
});
export const getUserByFirebaseIdAPI = createAsyncThunk('auth/getUserByFirebaseID', async (user) => {
  const res = await getUserByFirebaseId(user.firebaseId, user.token);
  return res.data;
});
