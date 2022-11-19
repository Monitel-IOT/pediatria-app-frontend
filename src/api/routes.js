import { getServiceEndpointService } from './services';

const Routes = {
  fetchUserByFirebaseId: (firebaseIdUser) => `${getServiceEndpointService('user')}/firebase/${firebaseIdUser}`,
  fetchUser: () => `${getServiceEndpointService('user')}`,
  fetchAppointmentById: (idAppointment) => `${getServiceEndpointService('appointment')}/${idAppointment}`,
  fetchAppointmentsByPatientId: (idPatient) => `${getServiceEndpointService('patient')}/${idPatient}/appointments`,
  fetchPatient: () => `${getServiceEndpointService('patient')}`,
  postAppointment: (patientId) => `${getServiceEndpointService('appointment')}/${patientId}`,
  fetchpatientEdit: (idPatient) => `${getServiceEndpointService('patient')}/${idPatient}`,
};

export default Routes;
