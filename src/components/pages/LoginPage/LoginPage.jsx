import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../../../utils/auth';
import LoginTemplate from '../../UI/templates/LoginTemplate/LoginTemplate';

const LoginPage = () => {
  if (Auth.isLogin()) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <LoginTemplate />
    </div>
  );
};

export default LoginPage;
