import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '../../atoms/Typography/Typography';
import Card from '../Card/Card';

const AppoinmentDetails = () => {
  const { idAppointment } = useParams();
  return (
    <div>
      <Typography component="h4">
        Detalles de la Atención
      </Typography>
      <Card className="mt-4">
        Aqui los detalles de la atención
        {' '}
        {idAppointment}
      </Card>
    </div>
  );
};

export default AppoinmentDetails;
