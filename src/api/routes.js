import { getServiceEndpointService } from './services';

const Routes = {
  fetchUserByFirebaseId: (firebaseIdUser) => `${getServiceEndpointService('user')}/firebase/${firebaseIdUser}`,
  fetchUser: () => `${getServiceEndpointService('user')}`,
  fetchAppointmentById: (idAppointment) => `${getServiceEndpointService('appointment')}/${idAppointment}`,
  fetchAppointments: () => `${getServiceEndpointService('appointment')}`,
  fetchPatient: () => `${getServiceEndpointService('patient')}`,
};

export default Routes;
