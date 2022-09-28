import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '../../atoms/Typography/Typography';
import Card from '../Card/Card';

const PatientDetails = () => {
  const { idPatient } = useParams();
  return (
    <div>
      <Typography component="h4">
        Detalles del paciente
      </Typography>
      <Card className="mt-4">
        Aqui los detalles del paciente
        {' '}
        {idPatient}
      </Card>
    </div>
  );
};

export default PatientDetails;
