import React from 'react';
import Container from '../../../layout/Container/Container';
import GeneralHeader from '../../organisms/GeneralHeader/GeneralHeader';
import LoginForm from '../../organisms/LoginForm/LoginForm';

const LoginTemplate = () => (
  <div>
    <GeneralHeader />
    <main className="bg-gray-100">
      <Container>
        <LoginForm />
      </Container>
    </main>
  </div>
);

export default LoginTemplate;
