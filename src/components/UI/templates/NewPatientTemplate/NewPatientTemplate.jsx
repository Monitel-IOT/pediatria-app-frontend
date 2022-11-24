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
      <Container className="mb-auto">
        <div className="h-full">
          <PageHeader title="Nuevo Paciente" dataPages={dataPages} />
          <NewPatientForm />
        </div>
      </Container>
    </Wrapper>
  );
};

export default NewPatientTemplate;
