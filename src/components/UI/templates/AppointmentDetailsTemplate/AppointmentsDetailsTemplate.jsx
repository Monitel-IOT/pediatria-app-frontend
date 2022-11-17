import React from 'react';
import Container from '../../../layout/Container/Container';
import AppoinmentDetails from '../../organisms/AppointmentDetails/AppoinmentDetails';
import PageHeader from '../../organisms/PageHeader/PageHeader';
import PatientDetails from '../../organisms/PatientDetails/PatientDetails';

const AppointmentsDetailsTemplate = () => {
  const dataPages = [
    {
      link: '/nueva-atencion',
      text: 'Atención',
    }];
  return (
    <div className="">
      <Container>
        <PageHeader title="Atención" dataPages={dataPages} />
        <div className="grid gap-4 lg:grid-cols-2">
          <PatientDetails />
          <AppoinmentDetails />
        </div>
      </Container>
    </div>
  );
};

export default AppointmentsDetailsTemplate;
