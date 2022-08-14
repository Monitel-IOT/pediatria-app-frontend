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
import NewAtentionPage from '../components/pages/NewAtentionPage/NewAtentionPage';
import ViewAtentionPage from '../components/pages/ViewAtentionPage/ViewAtentionPage';
import ViewProfilePage from '../components/pages/ViewProfilePage/ViewProfilePage';
import EditProfilePage from '../components/pages/EditProfilePage/EditProfilePage';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path={routes.dashboard} element={<DashboardPage />} />
        <Route path={routes.newPatient} element={<NewPatientPage />} />
        <Route path={routes.viewPatient} element={<ViewPatientPage />} />
        <Route path={routes.newAtention} element={<NewAtentionPage />} />
        <Route path={routes.viewAtention} element={<ViewAtentionPage />} />
        <Route path={routes.viewProfile} element={<ViewProfilePage />} />
        <Route path={routes.editProfile} element={<EditProfilePage />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
