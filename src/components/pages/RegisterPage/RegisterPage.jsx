import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import RegisterTemplate from '../../UI/templates/RegisterTemplate/RegisterTemplate';

const RegisterPage = () => {
  const { isUserAuthorized } = useSelector((state) => state.authReducer);

  if (isUserAuthorized) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <RegisterTemplate />
    </div>
  );
};

export default RegisterPage;
