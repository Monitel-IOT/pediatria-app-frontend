import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '../../atoms/Typography/Typography';
import Card from '../../../layout/Card/Card';

const PatientDetails = () => {
  const { idPatient } = useParams();
  return (
    <div>
      <Card className="my-4 divide-y">
        <div>
          <Typography className="text-2xl sm:text-3xl uppercase text-blue-main-500 mb-4 sm:mb-10 sm:mt-6 font-black">
            Nombre del paciente
          </Typography>
        </div>
        <div className="flex justify-between py-5 flex-wrap">
          <div className="flex items-center mr-2">
            <Typography component="h6" className="font-bold">
              Historial Clinica.:
            </Typography>
            <Typography component="h6" className="ml-1">
              HC-00
              {idPatient}
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography component="h6" className="font-bold">
              Fecha de creación.:
            </Typography>
            <Typography component="h6" className="ml-1">
              30/09/2022
            </Typography>
          </div>
        </div>
        <div className="py-5">
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Dni/codigo:
            </Typography>
            <Typography component="h6" className="ml-1">
              12345678
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Fecha de Nacimiento:
            </Typography>
            <Typography component="h6" className="ml-1">
              30/09/2022
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Sexo:
            </Typography>
            <Typography component="h6" className="ml-1">
              Masculino
            </Typography>
          </div>
        </div>
        <div className="py-5">
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Parto:
            </Typography>
            <Typography component="h6" className="ml-1">
              {idPatient}
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Peso de Nacimiento:
            </Typography>
            <Typography component="h6" className="ml-1">
              30 Kg
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Apgar:
            </Typography>
            <Typography component="h6" className="ml-1">
              Lorem ipsum
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Tipo de Lactancia:
            </Typography>
            <Typography component="h6" className="ml-1">
              Lorem ipsum
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
      </Card>
    </div>
  );
};

export default PatientDetails;
