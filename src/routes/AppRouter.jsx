import {
  Routes, Route, Navigate, HashRouter,
} from 'react-router-dom';

import React from 'react';
import routes from './routes';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import RegisterPage from '../components/pages/RegisterPage/RegisterPage';
import PrivateRoutes from './PrivateRoutes';
import NewPatientPage from '../components/pages/NewPatientPage/NewPatientPage';
import SearchPatientPage from '../components/pages/SearchPatientPage/SearchPatientPage';
import DashboardPage from '../components/pages/DashboardPage/DashboardPage';
import AppointmentDetailsPage from '../components/pages/AppointmentDetailsPage/AppointmentDetailsPage';
import ViewPatientPage from '../components/pages/ViewPatientPage/ViewPatientPage';
import NewAppointmentPage from '../components/pages/NewAppointmentPage/NewAppointmentPage';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => (
  <HashRouter>
    <Routes>
      <Route
        path={routes.login}
        element={(
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        )}
      />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route
        path={routes.dashboard}
        element={(
          <PrivateRoutes>
            <DashboardPage />
          </PrivateRoutes>
          )}
      />
      <Route
        path={routes.searchPatient}
        element={(
          <PrivateRoutes>
            <SearchPatientPage />
          </PrivateRoutes>
        )}
      />
      <Route
        path={routes.newPatient}
        element={(
          <PrivateRoutes>
            <NewPatientPage />
          </PrivateRoutes>
        )}
      />
      <Route
        path={routes.appointmentDetails}
        element={(
          <PrivateRoutes>
            <AppointmentDetailsPage />
          </PrivateRoutes>
          )}
      />
      <Route
        path={routes.viewPatient}
        element={(
          <PrivateRoutes>
            <ViewPatientPage />
          </PrivateRoutes>
          )}
      />
      <Route
        path={routes.newAppointment}
        element={(
          <PrivateRoutes>
            <NewAppointmentPage />
          </PrivateRoutes>
          )}
      />

      {/* <Route element={<PrivateRoutes />}>
        <Route path={routes.newAppointment} element={<NewAppointmentPage />} />
        <Route path={routes.viewAppointment} element={<ViewAppointmentPage />} />
        <Route path={routes.viewProfile} element={<ViewProfilePage />} />
        <Route path={routes.editProfile} element={<EditProfilePage />} />
        </Route> */}
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  </HashRouter>
);

export default AppRouter;
