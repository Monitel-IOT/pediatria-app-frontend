import { HashRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import routes from './routes';
import HomePage from '../components/pages/HomePage/HomePage';
import LoginPage from '../components/pages/LoginPage/LoginPage';

const AppRouter = () => (
  <HashRouter>
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.login} element={<LoginPage />} />
    </Routes>
  </HashRouter>
);

export default AppRouter;
