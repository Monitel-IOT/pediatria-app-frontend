import React from 'react';
import Container from '../../../layout/Container/Container';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import RegisterPatientForm from '../../organisms/RegisterPatientForm/RegisterPatientForm';

const NewPatientTemplate = () => (
  <Wrapper>
    <Container>
      <RegisterPatientForm />
    </Container>
  </Wrapper>
);

export default NewPatientTemplate;
