const routes = {
  home: '/',
  login: '/login',
  register: '/registro',
  forgotPassword: '/recuperarContraseña',
  dashboard: '/dashboard',
  searchPatient: '/searchPatient',
  newPatient: '/nuevo-paciente',
  viewPatient: '/paciente/:idPatient',
  newAtention: '/nueva-atencion',
  appointmentDetails: '/paciente/:idPatient/atencion/:idAppointment',
  viewProfile: '/perfil/:id',
  editProfile: '/perfil/edit/:id',
};

export default routes;
