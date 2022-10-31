import React from 'react';
import Container from '../../../layout/Container/Container';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import NewAppointmentForm from '../../organisms/NewAppointmentForm/NewAppointmentForm';
import PageHeader from '../../organisms/PageHeader/PageHeader';

const NewAppointmentTemplate = () => (
  <Wrapper>
    <Container className="py-4">
      <PageHeader title="Nueva Atención" />
      <NewAppointmentForm />
    </Container>
  </Wrapper>
);

export default NewAppointmentTemplate;
