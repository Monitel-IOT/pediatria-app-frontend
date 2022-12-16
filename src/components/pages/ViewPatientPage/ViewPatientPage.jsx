import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllAppointmentsState } from '../../../state/appointments/appointmentsSlice';
import { getPatientState } from '../../../state/patients/patientsSlice';
import { getAppointmentsAPI } from '../../../thunkAction/appointments/appointmentsThunk';
import { fetchPatientsById } from '../../../thunkAction/patients/patientsThunk';
import PatientTemplate from '../../UI/templates/PatientTemplate/PatientTemplate';

const ViewPatientPage = () => {
  const dispatch = useDispatch();

  const { idPatient } = useParams();
  const { user } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(fetchPatientsById({ idPatient, token: user?.token }))
      .then((res) => {
        dispatch(getPatientState(res.payload.data));
      });
    dispatch(getAppointmentsAPI({ idPatient, token: user?.token }))
      .then((res) => {
        dispatch(getAllAppointmentsState(res.payload.data));
      });
  }, []);

  return (
    <div>
      <PatientTemplate />
    </div>
  );
};
export default ViewPatientPage;
