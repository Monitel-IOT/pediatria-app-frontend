import { getServiceEndpointService } from './services';

const Routes = {
  fetchUser: () => `${getServiceEndpointService('user')}`,
  fetchAppointmentById: (idAppointment) => `${getServiceEndpointService('appointment')}/${idAppointment}`,
  fetchAppointments: () => `${getServiceEndpointService('appointment')}`,
};

export default Routes;
