const routes = {
  dashboard: '/',
  login: '/login',
  register: '/registro',
  forgotPassword: '/recuperarContraseña',
  searchPatient: '/searchPatient',
  newPatient: '/nuevo-paciente',
  viewPatient: '/paciente/:idPatient',
  newAppointment: '/nueva-atencion',
  appointmentDetails: '/paciente/:idPatient/atencion/:idAppointment',
  viewProfile: '/perfil',
  editProfile: '/perfil/edit/:id',
};

export default routes;
