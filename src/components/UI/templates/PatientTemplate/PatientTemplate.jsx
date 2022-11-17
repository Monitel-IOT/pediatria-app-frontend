import React from 'react';
import Container from '../../../layout/Container/Container';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import AppointmentList from '../../organisms/AppointmentList/AppointmentList';
import PageHeader from '../../organisms/PageHeader/PageHeader';
import PatientDetails from '../../organisms/PatientDetails/PatientDetails';

const PatientTemplate = () => {
  const dataPages = [
    {
      link: '/searchPatient',
      text: 'Lista de Pacientes',
    },
    {
      link: '#',
      text: 'Paciente',
    }];

  return (
    <Wrapper>
      <Container className="h-[calc(100vh-5rem)] pt-4">
        <PageHeader title="Paciente" dataPages={dataPages} />
        <div className="container grid gap-4 lg:grid-cols-3 mx-auto ">
          <div className="lg:col-span-1">
            <PatientDetails />
          </div>
          <div className="lg:col-span-2">
            <AppointmentList />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default PatientTemplate;
