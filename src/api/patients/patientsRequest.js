import axios from 'axios';

const PATIENTS_URL = 'https://pediatria-dev.herokuapp.com/api/v1/patient';

// Aún no operativo
export const getPatientsRequest = (id) => axios.get(`${PATIENTS_URL}&doctorId?=${id}`);

export const postPatientRequest = (newPatient) => axios.post(PATIENTS_URL, newPatient);
