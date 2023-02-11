import axios from 'axios';
import Routes from '../routes';
import { getServiceHeaders } from '../services';

export const getAppointmentById = (id) => fetch(Routes.fetchAppointmentById(id));

export const getAppointmentsByPatientId = (idPatient, token) => axios.get(
  Routes.fetchAppointmentsByPatientId(idPatient),
  {
    headers: {
      ...getServiceHeaders('patient'),
      Authorization: `Bearer ${token}`,
    },
  },
);

export const deleteAppointmentById = (idAppointment, token) => {
  const endpoint = Routes.fetchAppointmentById(idAppointment);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const requestOptions = {
    method: 'DELETE',
    headers,
    body: null,
  };
  return (fetch(endpoint, requestOptions));
};

export const updateAppointmentById = (newAppointment, id) => {
  const payload = JSON.stringify(newAppointment);
  const endpoint = Routes.fetchAppointmentById(id);
  // const csrfToken = Cookies.get('csrftoken');
  const headers = {
    'Content-Type': 'application/json',
    // 'X-CSRFToken': csrfToken,
  };
  const requestOptions = {
    method: 'PUT',
    headers,
    body: payload,
  };
  return fetch(endpoint, requestOptions);
};

export const createAppointmentRequest = (object) => {
  const { newAppointment, patientId, token } = object;
  return axios.post(
    Routes.postAppointment(patientId),
    newAppointment,
    {
      headers: {
        ...getServiceHeaders('appointment'),
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
