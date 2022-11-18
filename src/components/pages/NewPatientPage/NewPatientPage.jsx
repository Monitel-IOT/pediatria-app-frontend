import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchPatientsById } from '../../../thunkAction/patients/patientsThunk';
import NewPatientTemplate from '../../UI/templates/NewPatientTemplate/NewPatientTemplate';

const NewPatientPage = () => {
  const [searchParams] = useSearchParams();
  const edit = searchParams.get('edit');
  const idPatient = searchParams.get('id');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (edit === 'true') {
      dispatch(fetchPatientsById({ idPatient, token: user?.token }));
    }
  }, []);

  return (
    <div>
      <NewPatientTemplate />
    </div>
  );
};

export default NewPatientPage;
