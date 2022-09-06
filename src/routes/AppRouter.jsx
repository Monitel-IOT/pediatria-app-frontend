import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import React from 'react';
import routes from './routes';
import HomePage from '../components/pages/HomePage/HomePage';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import RegisterPage from '../components/pages/RegisterPage/RegisterPage';
import PrivateRoutes from './PrivateRoutes';
import NewPatientPage from '../components/pages/NewPatientPage/NewPatientPage';
import SearchPatientPage from '../components/pages/SearchPatientPage/SearchPatientPage';
import DashboardPage from '../components/pages/DashboardPage/DashboardPage';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route
        path={routes.home}
        element={(
          <PrivateRoutes>
            <HomePage />
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
        path={routes.dashboard}
        element={(
          <PrivateRoutes>
            <DashboardPage />
          </PrivateRoutes>
          )}
      />
      {/* <Route element={<PrivateRoutes />}>
        <Route path={routes.viewPatient} element={<ViewPatientPage />} />
        <Route path={routes.newAppointment} element={<NewAppointmentPage />} />
        <Route path={routes.viewAppointment} element={<ViewAppointmentPage />} />
        <Route path={routes.viewProfile} element={<ViewProfilePage />} />
        <Route path={routes.editProfile} element={<EditProfilePage />} />
        </Route> */}
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
