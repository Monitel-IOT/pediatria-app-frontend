import React from 'react';
import Card from '../../../layout/Card/Card';
import Typography from '../../atoms/Typography/Typography';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

const AppointmentList = () => (
  <Card className="my-4 ">
    <Typography component="h6" className="font-bold uppercase mr-2 mb-2 text-blue-main-500">
      Lista de Atenciones
      {' '}
    </Typography>
    <div className="h-[calc(100vh-20rem)] overflow-auto">
      <AppointmentCard />
      <AppointmentCard />
      <AppointmentCard />
      <AppointmentCard />
      <AppointmentCard />
      <AppointmentCard />
    </div>
  </Card>
);

export default AppointmentList;
