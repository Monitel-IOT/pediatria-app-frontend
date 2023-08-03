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
import updateProfileReducer from './profile/updateProfileSlice';
import getAllAppointmentsReducer from './appointments/getAllAppointmentsSlice';
import createAppointmentReducer from './appointments/createAppointmentSlice';
import { treatmentApi } from '../api/appointment/treatmentRequest';
import { prolongedDiagnosisRequestApi } from '../api/appointment/prolongedDiagnosisRequest';
import uiReducer from './ui/uiSlice';

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
    createAppointmentReducer,
    uiReducer,
    updateProfileReducer,
    [treatmentApi.reducerPath]: treatmentApi.reducer,
    [prolongedDiagnosisRequestApi.reducerPath]: prolongedDiagnosisRequestApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(
      treatmentApi.middleware,
      prolongedDiagnosisRequestApi.middleware,
    ),
});
