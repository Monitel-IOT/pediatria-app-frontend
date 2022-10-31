import React from 'react';
import Container from '../../../layout/Container/Container';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import NewPatientForm from '../../organisms/NewPatientForm/NewPatientForm';
import PageHeader from '../../organisms/PageHeader/PageHeader';

const NewPatientTemplate = () => (
  <Wrapper>
    <Container className="py-4">
      <PageHeader title="Nuevo Paciente" />
      <NewPatientForm />
    </Container>
  </Wrapper>
);

export default NewPatientTemplate;
