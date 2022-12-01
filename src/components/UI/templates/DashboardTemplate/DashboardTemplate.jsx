import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import Measurement from '../../molecules/Measurement/Measurement';
import Container from '../../../layout/Container/Container';
import PageHeader from '../../organisms/PageHeader/PageHeader';

const DashboardTemplate = () => {
  // const {
  //   user,
  // } = useSelector((state) => state.authReducer);

  const dataPages = [
    {
      link: '/dashboard',
      text: 'Dashboard',
    }];
  // console.log(user);

  return (
    <Wrapper>
      <Container className="py-4">
        <PageHeader title="Dashboard" dataPages={dataPages} />
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-5 md:grid-cols-4">
          <Measurement icon={<FontAwesomeIcon icon={faUsers} />} text="Pacientes" value="20" />
          <Measurement icon={<FontAwesomeIcon icon={faCalendarCheck} />} text="Atenciones" value="14" />
        </div>
      </Container>
    </Wrapper>
  );
};

export default DashboardTemplate;
