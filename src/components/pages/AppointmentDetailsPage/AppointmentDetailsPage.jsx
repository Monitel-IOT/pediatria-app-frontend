import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAppointmentByIdAPI } from '../../../thunkAction/appointments/appointmentsThunk';
import Wrapper from '../../layout/Wrapper/Wrapper';
import AppointmentsDetailsTemplate from '../../UI/templates/AppointmentDetailsTemplate/AppointmentsDetailsTemplate';

const AppointmentDetailsPage = () => {
  const dispatch = useDispatch();
  const { idAppointment } = useParams();

  useEffect(() => {
    dispatch(getAppointmentByIdAPI(idAppointment));
  }, []);

  return <Wrapper><AppointmentsDetailsTemplate /></Wrapper>;
};

export default AppointmentDetailsPage;
