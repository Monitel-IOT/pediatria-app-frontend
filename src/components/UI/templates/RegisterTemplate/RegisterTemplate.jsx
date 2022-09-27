import React from 'react';
import Container from '../../../layout/Container/Container';
import GeneralHeader from '../../organisms/GeneralHeader/GeneralHeader';
import RegisterForm from '../../organisms/RegisterForm/RegisterForm';

const RegisterTemplate = () => (
  <div className="bg-gray-100">
    <GeneralHeader />
    <main>
      <Container>
        <RegisterForm />
      </Container>
    </main>
  </div>
);

export default RegisterTemplate;
