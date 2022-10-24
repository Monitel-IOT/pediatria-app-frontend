import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import { fetchPatientsById } from '../../../../thunkAction/patients/patientsThunk';
import Button from '../../atoms/Button/Button';
import Measurement from '../../molecules/Measurement/Measurement';
import Container from '../../../layout/Container/Container';

const DashboardTemplate = () => {
  const dispatch = useDispatch();
  const {
    patient,
  } = useSelector((state) => state.patientsReducer);
  // const {
  //   user,
  // } = useSelector((state) => state.authReducer);

  // console.log(user);

  return (
    <Wrapper>
      <Container className="h-[calc(100vh-5rem)]">
        <h1>Dashboard Template</h1>
        <Button primary onClick={() => dispatch(fetchPatientsById('630eef31b204ef57c21ed3d3'))}>
          CLICK para cargar un paciente
        </Button>
        <ul>
          <li>
            dni paciente:
            {patient.DNI}
          </li>
          <li>
            nombre paciente:
            {patient.Name}
          </li>
          <li>
            apellido paciente:
            {patient.LastName}
          </li>
        </ul>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-5 md:gird-cols-4">
          <Measurement icon={<FontAwesomeIcon icon={faUsers} />} text="Pacientes" value="20" />
          <Measurement icon={<FontAwesomeIcon icon={faCalendarCheck} />} text="Atenciones" value="14" />
        </div>
      </Container>
    </Wrapper>
  );
};

export default DashboardTemplate;
