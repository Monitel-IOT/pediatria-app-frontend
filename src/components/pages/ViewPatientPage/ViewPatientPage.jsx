import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAppointmentsAPI } from '../../../thunkAction/appointments/appointmentsThunk';
import { fetchPatientsById } from '../../../thunkAction/patients/patientsThunk';
import PatientTemplate from '../../UI/templates/PatientTemplate/PatientTemplate';

const ViewPatientPage = () => {
  const dispatch = useDispatch();

  const { idPatient } = useParams();
  const { user } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(fetchPatientsById({ idPatient, token: user?.token }));
  }, []);

  useEffect(() => {
    dispatch(getAppointmentsAPI({ idPatient, token: user?.token }));
  }, []);

  return (
    <div>
      <PatientTemplate />
    </div>
  );
};
export default ViewPatientPage;
