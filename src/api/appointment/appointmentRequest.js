import Routes from '../routes';

export const getAppointmentById = (id) => fetch(Routes.fetchAppointmentById(id));
export const getAppointments = () => fetch(Routes.fetchAppointments());
