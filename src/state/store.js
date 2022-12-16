import { configureStore } from '@reduxjs/toolkit';
import charactersRickAndMortyReducer from './rickAndMorty/charactersSlice';
import patientsReducer from './patients/patientsSlice';
import authReducer from './auth/authSlice';
import newPatientFormReducer from './newPatientForm/newPatientFormSlice';
import newAppointmentFormReducer from './newAppointmentForm/newAppointmentFormSlice';
import registerFormReducer from './registerForm/registerFormSlice';
import loginFormReducer from './loginForm/loginFormSlice';
import appointmentsReducer from './appointments/appointmentsSlice';
import createPatientReducer from './patients/createPatientSlice';
import updatePatientReducer from './patients/updatePatientSlice';
import deletePatientReducer from './patients/deletePatientSlice';
import getPatientReducer from './patients/getPatientSlice';
import getAllAppointmentsReducer from './appointments/getAllAppointmentsSlice';

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
    newAppointmentFormReducer,
    updatePatientReducer,
    deletePatientReducer,
    getPatientReducer,
    getAllAppointmentsReducer,
  },
});
