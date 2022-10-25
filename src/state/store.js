import { configureStore } from '@reduxjs/toolkit';
import charactersRickAndMortyReducer from './rickAndMorty/charactersSlice';
import patientsReducer from './patients/patientsSlice';
import authReducer from './auth/authSlice';
import newPatientFormReducer from './newPatientForm/newPatientFormSlice';
import registerFormReducer from './registerForm/registerFormSlice';
import loginFormReducer from './loginForm/loginFormSlice';
import appointmentsReducer from './appointments/appointmentsSlice';
import createPatientReducer from './patients/createPatientSlice';

export default configureStore({
  reducer: {
    charactersRickAndMortyReducer,
    patientsReducer,
    authReducer,
    newPatientFormReducer,
    registerFormReducer,
    loginFormReducer,
    appointmentsReducer,
    createPatientReducer,
  },
});
