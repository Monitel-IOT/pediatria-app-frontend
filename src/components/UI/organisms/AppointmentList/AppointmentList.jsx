import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../../layout/Card/Card';
import Typography from '../../atoms/Typography/Typography';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

const AppointmentList = () => {
  const { appointments } = useSelector((state) => state.appointmentsReducer);
  return (
    <Card className="my-4 ">
      <Typography component="h6" className="font-bold uppercase mr-2 mb-2 text-blue-main-500">
        Lista de Atenciones
        {' '}
      </Typography>
      <div className="h-[calc(100vh-20rem)] overflow-auto">
        {
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
        }
      </div>
    </Card>
  );
};

export default AppointmentList;
