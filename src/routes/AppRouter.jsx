import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import routes from './routes';
import HomePage from '../components/pages/HomePage/HomePage';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import RegisterPage from '../components/pages/RegisterPage/RegisterPage';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
