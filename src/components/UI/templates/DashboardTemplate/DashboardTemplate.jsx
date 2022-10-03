import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../../layout/Wrapper/Wrapper';
import { fetchPatientsById } from '../../../../thunkAction/patients/patientsThunk';
import Button from '../../atoms/Button/Button';

const DashboardTemplate = () => {
  const dispatch = useDispatch();
  const {
    patient,
  } = useSelector((state) => state.patientsReducer);

  return (
    <Wrapper>
      <div className="h-[calc(100vh-5rem)]">
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

      </div>
    </Wrapper>
  );
};

export default DashboardTemplate;
