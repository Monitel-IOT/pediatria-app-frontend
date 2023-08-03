import React from 'react';
import Container from '../../../layout/Container/Container';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import PageHeader from '../../organisms/PageHeader/PageHeader';
import EditProfileForm from '../../organisms/EditProfileForm/EditProfileForm';

const ProfileTemplate = () => (
  <Wrapper>
    <Container className="h-[calc(100vh-5rem)] pt-4">
      <PageHeader title="Paciente" />
      <EditProfileForm />
    </Container>
  </Wrapper>
);

export default ProfileTemplate;
