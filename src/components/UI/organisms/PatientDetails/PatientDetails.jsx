import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '../../atoms/Typography/Typography';
import Card from '../../../layout/Card/Card';
import Button from '../../atoms/Button/Button';

const PatientDetails = () => {
  const { patient } = useSelector((state) => state.patientsReducer);

  return (
    <div>
      <Card className="my-4 divide-y">
        <div>
          <Typography className="text-2xl sm:text-3xl uppercase text-blue-main-500 mb-4 sm:mb-10 sm:mt-6 font-black">
            {`${patient.name} ${patient.lastname}`}
          </Typography>
        </div>
        <div className="flex justify-between py-5 flex-wrap">
          <div className="flex items-center mr-2">
            <Typography component="h6" className="font-bold">
              Historial Clinica.:
            </Typography>
            <Typography component="h6" className="ml-1">
              HC-00
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography component="h6" className="font-bold">
              Fecha de creación.:
            </Typography>
            <Typography component="h6" className="ml-1">
              {patient.createdAt}
            </Typography>
          </div>
        </div>
        <div className="py-5">
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Dni/codigo:
            </Typography>
            <Typography component="h6" className="ml-1">
              {patient.dni}
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Fecha de Nacimiento:
            </Typography>
            <Typography component="h6" className="ml-1">
              {patient.birthDate}
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Sexo:
            </Typography>
            <Typography component="h6" className="ml-1">
              {patient.gender}
            </Typography>
          </div>
        </div>
        <div className="py-5">
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Parto:
            </Typography>
            <Typography component="h6" className="ml-1">
              {patient.gestation}
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Peso de Nacimiento:
            </Typography>
            <Typography component="h6" className="ml-1">
              {patient.birthWeight}
              {' '}
              kg
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Apgar:
            </Typography>
            <Typography component="h6" className="ml-1">
              {patient.apgar}
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Tipo de Lactancia:
            </Typography>
            <Typography component="h6" className="ml-1">
              {patient.supplementaryFeeding ? 'true' : 'false'}
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Vacunas:
            </Typography>
            <Typography component="h6" className="ml-1">
              BCG, Hepatitis B, AMA, INF 1 y 2
            </Typography>
          </div>
        </div>
        <div className="py-5">
          <div className="flex justify-between">
            <Typography component="h6" className="font-bold mr-2">
              Observaciones:
            </Typography>
            <Typography component="h6" className="ml-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, at.
            </Typography>
          </div>
        </div>
        <Button
          primary
        >
          <Link to={`/nuevo-paciente/?edit=true&id=${patient.id}`}>
            Editar paciente
          </Link>
        </Button>
      </Card>
    </div>
  );
};

export default PatientDetails;
