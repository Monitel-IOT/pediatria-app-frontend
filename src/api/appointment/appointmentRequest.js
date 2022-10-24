import Routes from '../routes';

export const getAppointmentById = (id) => fetch(Routes.fetchAppointmentById(id));
export const getAppointments = () => fetch(Routes.fetchAppointments());
export const deleteAppointmentById = (id) => {
  const endpoint = Routes.fetchAppointmentById(id);
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
