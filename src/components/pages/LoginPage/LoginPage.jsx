import React from 'react';
import Header from '../../UI/molecules/Header';
import FormInput from '../../UI/molecules/FormInput';
import Stack from '../../UI/organisms/Stack/Stack';
import Button from '../../UI/atoms/Button/Button';
import RouteLink from '../../UI/atoms/RouteLink/RouteLink';
import FormContainer from '../../UI/organisms/FormContainer/FormContainer';

const LoginPage = () => {
  const headerMoleculeObj = {
    title: {
      text: 'Its great to see you!',
      size: '2xl',
      color: 'grey-main',
    },
    subtitle: {
      text: 'Login here',
      size: 'base',
      color: 'blue-main',
    },
  };
  return (
    <div className="w-screen flex items-center justify-center mt-8 py-10">
      <div className="w-full pt-6 md:w-1/2 xl:w-1/3">
        <Header {...headerMoleculeObj} />
        <FormContainer action="#">
          <FormInput label="Email" type="email" placeholder="example@example.com" />
          <FormInput label="Contraseña" type="password" placeholder="Contraseña" />
          <RouteLink to="/forgotPassword">¿Olvidaste tu contraseña?</RouteLink>
          <Stack horizontal="right">
            <Button primary>
              Iniciar Sesión
            </Button>
          </Stack>
        </FormContainer>
      </div>
    </div>
  );
};

export default LoginPage;
