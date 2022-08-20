import axios from 'axios';

const PATIENTS_URL = 'https://nombredeurl/v1/api/patients';

export const getPatientsRequest = (id) => axios.get(`${PATIENTS_URL}&doctorId?=${id}`);
export const postPatientRequest = (newPatient) => axios.post(PATIENTS_URL, newPatient);
