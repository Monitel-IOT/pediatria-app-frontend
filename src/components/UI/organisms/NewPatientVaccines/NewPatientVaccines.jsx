import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  // eslint-disable-next-line import/named
  handleVaccines, prevStep,
} from '../../../../state/newPatientForm/newPatientFormSlice';
import { checkInArrayByName } from '../../../../utils';
import Button from '../../atoms/Button/Button';
import CheckBox from '../../atoms/CheckBox/CheckBox';
// import { postPatientRequest } from '../../../../api/patients/patientsRequest';
import { addNewPatient } from '../../../../thunkAction/patients/patientsThunk';

const NewPatientVaccines = () => {
  const { form, step } = useSelector((state) => state.newPatientFormReducer);
  // const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  return (
    <div className="my-4">
      <form action="">
        <CheckBox
          label="BCG"
          name="BCG"
          disabled={false}
          // eslint-disable-next-line max-len
          onChange={(e) => dispatch(handleVaccines({ name: e.target.name, value: e.target.checked }))}
          checked={checkInArrayByName(form.vaccines, 'BCG')}
        />
        <CheckBox
          label="Hepatitis B"
          name="HepatitisB"
          disabled={false}
          // eslint-disable-next-line max-len
          onChange={(e) => dispatch(handleVaccines({ name: e.target.name, value: e.target.checked }))}
          checked={checkInArrayByName(form.vaccines, 'Hepatitis B')}
        />
        <CheckBox
          label="AMA"
          name="AMA"
          disabled={false}
          // eslint-disable-next-line max-len
          onChange={(e) => dispatch(handleVaccines({ name: e.target.name, value: e.target.checked }))}
          checked={checkInArrayByName(form.vaccines, 'AMA')}
        />
        <CheckBox
          label="INF 1 y 2"
          name="INF1-2"
          disabled={false}
          // eslint-disable-next-line max-len
          onChange={(e) => dispatch(handleVaccines({ name: e.target.name, value: e.target.checked }))}
          checked={checkInArrayByName(form.vaccines, 'INF1-2')}
        />
        <CheckBox
          label="SPR"
          name="SPR"
          disabled={false}
          // eslint-disable-next-line max-len
          onChange={(e) => dispatch(handleVaccines({ name: e.target.name, value: e.target.checked }))}
          checked={checkInArrayByName(form.vaccines, 'SPR')}
        />
        <CheckBox
          label="1 P+PO+RO+N"
          name="1-P+PO+RO+N"
          disabled={false}
          // eslint-disable-next-line max-len
          onChange={(e) => dispatch(handleVaccines({ name: e.target.name, value: e.target.checked }))}
          checked={checkInArrayByName(form.vaccines, '1-P+PO+RO+N')}
        />
        <CheckBox
          label="2 P+PO+RO+N"
          name="2-P+PO+RO+N"
          disabled={false}
          // eslint-disable-next-line max-len
          onChange={(e) => dispatch(handleVaccines({ name: e.target.name, value: e.target.checked }))}
          checked={checkInArrayByName(form.vaccines, '2-P+PO+RO+N')}
        />
        <CheckBox
          label="3 P+PO+RO+N"
          name="3-P+PO+RO+N"
          disabled={false}
          // eslint-disable-next-line max-len
          onChange={(e) => dispatch(handleVaccines({ name: e.target.name, value: e.target.checked }))}
          checked={checkInArrayByName(form.vaccines, '3-P+PO+RO+N')}
        />
        <CheckBox
          label="Refuerzo SPR"
          name="SPR2"
          disabled={false}
          // eslint-disable-next-line max-len
          onChange={(e) => dispatch(handleVaccines({ name: e.target.name, value: e.target.checked }))}
          checked={checkInArrayByName(form.vaccines, 'SPR2')}
        />
      </form>
      <div>
        <Button
          primary={!(step === 0)}
          disabled={(step === 0)}
          onClick={() => dispatch(prevStep())}
        >
          Atrás
        </Button>
        <Button
          primary
          disabled={false}
          // eslint-disable-next-line no-underscore-dangle
          // onClick={() => postPatientRequest(form, user.id)}
          onClick={() => dispatch(addNewPatient(form))}
          className="ml-2"
        >
          Registrar Paciente
        </Button>
      </div>
    </div>
  );
};

export default NewPatientVaccines;
