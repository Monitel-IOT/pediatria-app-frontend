import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import React from 'react';
import routes from './routes';
import HomePage from '../components/pages/HomePage/HomePage';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import RegisterPage from '../components/pages/RegisterPage/RegisterPage';
import PrivateRoutes from './PrivateRoutes';
import DashboardPage from '../components/pages/DashboardPage/DashboardPage';
import NewPatientPage from '../components/pages/NewPatientPage/NewPatientPage';
import ViewPatientPage from '../components/pages/ViewPatientPage/ViewPatientPage';
import NewAppointmentPage from '../components/pages/NewAppointmentPage/NewAppointmentPage';
import ViewAppointmentPage from '../components/pages/ViewAppointmentPage/ViewAppointmentPage';
import ViewProfilePage from '../components/pages/ViewProfilePage/ViewProfilePage';
import EditProfilePage from '../components/pages/EditProfilePage/EditProfilePage';
import SearchPatientPage from '../components/pages/SearchPatientPage/SearchPatientPage';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route path={routes.searchPatient} element={<SearchPatientPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path={routes.dashboard} element={<DashboardPage />} />
        <Route path={routes.newPatient} element={<NewPatientPage />} />
        <Route path={routes.viewPatient} element={<ViewPatientPage />} />
        <Route path={routes.newAppointment} element={<NewAppointmentPage />} />
        <Route path={routes.viewAppointment} element={<ViewAppointmentPage />} />
        <Route path={routes.viewProfile} element={<ViewProfilePage />} />
        <Route path={routes.editProfile} element={<EditProfilePage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
