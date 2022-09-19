import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginTemplate from '../../UI/templates/LoginTemplate/LoginTemplate';

const LoginPage = () => {
  const isUserAuthorized = useSelector((state) => state.authReducer.isUserAuthorized);
  if (isUserAuthorized) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <LoginTemplate />
    </div>
  );
};

export default LoginPage;
