import React from 'react';
import Container from '../../../layout/Container/Container';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import NewPatientForm from '../../organisms/NewPatientForm/NewPatientForm';
import PageHeader from '../../organisms/PageHeader/PageHeader';

const NewPatientTemplate = () => {
  const dataPages = [
    {
      link: '/nuevo-paciente',
      text: 'Nuevo Paciente',
    }];
  return (
    <Wrapper>
      <Container className="py-4">
        <PageHeader title="Nuevo Paciente" dataPages={dataPages} />
        <NewPatientForm />
      </Container>
    </Wrapper>
  );
};

export default NewPatientTemplate;
