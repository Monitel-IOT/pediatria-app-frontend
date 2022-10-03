import axios from 'axios';

const PATIENTS_URL = 'https://pediatria-dev.herokuapp.com/api/v1/';

// export const getPatientsRequest = (id) => axios.get(`${PATIENTS_URL}${id}/patients`);
export const getPatientsRequest = (id) => fetch(`${PATIENTS_URL}user/${id}/patients`);
export const getPatientsByIdRequest = (id) => fetch(`${PATIENTS_URL}patient/${id}`);
// Aún no operativo
export const postPatientRequest = (newPatient) => axios.post(PATIENTS_URL, newPatient);
