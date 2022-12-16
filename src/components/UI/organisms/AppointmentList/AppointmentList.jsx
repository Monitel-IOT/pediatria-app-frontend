import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openAppointnmentForm } from '../../../../state/appointments/appointmentsSlice';
import Card from '../../../layout/Card/Card';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import EmptyAppointments from '../EmptyAppointments/EmptyAppointments';

const AppointmentList = () => {
  const { appointments } = useSelector((state) => state.appointmentsReducer);
  const dispatch = useDispatch();
  return (
    <Card className="my-4 divide-y">
      <div className="flex items-center justify-between mb-4">
        <Typography component="h5" className="font-bold uppercase text-blue-main-500">
          Lista de Atenciones
        </Typography>
        {appointments.length > 0 && (
        <Button
          primary
          uppercase
          className="ml-2"
          onClick={() => dispatch(openAppointnmentForm())}
        >
          Nueva Atención
        </Button>
        )}

      </div>
      <div>
        {appointments.length > 0 ? (

          appointments?.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              data={{
                createdAt: appointment.createdAt,
                diagnosis: appointment.diagnosis,
                treatment: appointment.treatment,
              }}
            />
          ))
        ) : (
          <div className="mt-4">
            <EmptyAppointments />
          </div>
        )}
      </div>
    </Card>
  );
};

export default AppointmentList;
