import axios from 'axios';

const PATIENTS_URL = 'https://pediatria-dev.herokuapp.com/api/v1/';

// export const getPatientsRequest = (id) => axios.get(`${PATIENTS_URL}${id}/patients`);
export const getPatientsRequest = (id) => fetch(`${PATIENTS_URL}user/${id}/patients`);
export const getPatientsByIdRequest = (id) => fetch(`${PATIENTS_URL}patient/${id}`);
export const deletePatientsByIdRequest = (id) => {
  const endpoint = `${PATIENTS_URL}patient/${id}`;
  // const csrfToken = Cookies.get('csrftoken');
  const headers = {
    'Content-Type': 'application/json',
    // 'X-CSRFToken': csrfToken,
  };
  const requestOptions = {
    method: 'DELETE',
    headers,
    body: null,
  };
  return (fetch(endpoint, requestOptions));
};
// Aún no operativo
export const postPatientRequest = (newPatient) => axios.post(`${PATIENTS_URL}patient`, newPatient);
