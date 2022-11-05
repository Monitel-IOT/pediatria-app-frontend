import { getServiceEndpointService } from './services';

const Routes = {
  fetchUserByFirebaseId: (firebaseIdUser) => `${getServiceEndpointService('user')}/firebase/${firebaseIdUser}`,
  fetchUser: () => `${getServiceEndpointService('user')}`,
  fetchAppointmentById: (idAppointment) => `${getServiceEndpointService('appointment')}/${idAppointment}`,
  fetchAppointmentsByPatientId: (idPatient) => `${getServiceEndpointService('patient')}/${idPatient}/appointments`,
  fetchPatient: () => `${getServiceEndpointService('patient')}`,
};

export default Routes;
