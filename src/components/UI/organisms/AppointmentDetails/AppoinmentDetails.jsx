import React from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Typography from '../../atoms/Typography/Typography';
import Card from '../../../layout/Card/Card';
import { getDDMMAA } from '../../../../utils';

const AppoinmentDetails = () => {
  // const { idAppointment } = useParams();
  const { appointment } = useSelector((state) => state.appointmentsReducer);
  // const { data } = appointment;
  // const { vitalFunctions } = data;

  return (
    <div>
      <Card className="my-4 divide-y">
        <Typography component="h6" className="font-bold uppercase mr-2 mb-2 text-blue-main-500">
          Detalles de la Atención
        </Typography>
        <div className="flex justify-between py-5 flex-wrap">
          <div className="flex items-center mr-2">
            <Typography component="h6" className="font-bold">
              Codigo de Atención.:
            </Typography>
            <Typography component="h6" className="ml-1">
              D001
            </Typography>
          </div>
          <div className="flex items-center">
            <Typography component="h6" className="font-bold">
              Fecha.:
            </Typography>
            <Typography component="h6" className="ml-1">
              {appointment?.data?.appointmentDate && getDDMMAA(appointment?.data?.appointmentDate)}
            </Typography>
          </div>
        </div>
        <div className="py-5 grid grid-cols-2 gap-4 sm:gap-4 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                Peso:
              </Typography>
              <Typography component="h6" className="ml-1">
                { `${appointment?.data?.weight} Kg` }
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                Talla:
              </Typography>
              <Typography component="h6" className="ml-1">
                { `${appointment?.data?.size} cm` }
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                PC:
              </Typography>
              <Typography component="h6" className="ml-1">
                {appointment?.data?.brainPerimeter}
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                IMC:
              </Typography>
              <Typography component="h6" className="ml-1">
                {appointment?.data?.bodyMassIndex}
              </Typography>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                FR:
              </Typography>
              <Typography component="h6" className="ml-1">
                {`${appointment?.data?.vitalFunctions?.fr} x min`}
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                FC:
              </Typography>
              <Typography component="h6" className="ml-1">
                {`${appointment?.data?.vitalFunctions?.fc} x min`}
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                Sat:
              </Typography>
              <Typography component="h6" className="ml-1">
                {`${appointment?.data?.vitalFunctions?.saturacion} %`}
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                Temp:
              </Typography>
              <Typography component="h6" className="ml-1">
                {`${appointment?.data?.vitalFunctions?.t} °C`}
              </Typography>
            </div>
          </div>
        </div>
        <div className="py-5">
          <Typography component="h6" className="font-bold uppercase mr-2 mb-2 text-blue-main-500">
            Enfermedad Actual
          </Typography>
          <div>
            <Typography component="h6" className="font-bold mr-2 mb-1 text-gray-600">
              Relato y examen medico:
            </Typography>
            <Typography component="h6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis distinctio excepturi
              iure facere repellendus ratione soluta ad ex tenetur delectus
            </Typography>
          </div>
          <div className="mt-2">
            <Typography component="h6" className="font-bold mr-2 mb-1 text-gray-600">
              Signos y Sintomas:
            </Typography>
            <Typography component="h6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis distinctio excepturi
              iure facere repellendus ratione soluta ad ex tenetur delectus
            </Typography>
          </div>
          <div className="mt-2">
            <Typography component="h6" className="font-bold mr-2 mb-1 text-gray-600">
              Diagnóstico:
            </Typography>
            <Typography component="h6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis distinctio excepturi
              iure facere repellendus ratione soluta ad ex tenetur delectus
            </Typography>
          </div>
          {appointment?.data?.auxiliaryExams.length !== 0 && (
          <div className="mt-2">
            <Typography component="h6" className="font-bold mr-2 mb-1 text-gray-600">
              Exámenes Auxiliares:
            </Typography>
              {appointment?.data?.auxiliaryExams.map((item) => <Typography component="h6" key={item?.exams}>{item?.exams}</Typography>)}
          </div>
          )}
          {appointment?.data?.treatment.length !== 0 && (
          <div className="mt-2">
            <Typography component="h6" className="font-bold mr-2 mb-1 text-gray-600">
              Tratamiento:
            </Typography>
              {appointment?.data?.treatment.map(
                (item) => <Typography component="h6" key={item?.nameTreatment}>{item?.nameTreatment}</Typography>,
              )}
          </div>
          )}
          <div className="mt-2">
            <Typography component="h6" className="font-bold mr-2 mb-1 text-gray-600">
              Reevaluación:
            </Typography>
            <Typography component="h6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis distinctio excepturi
              iure facere repellendus ratione soluta ad ex tenetur delectus
            </Typography>
          </div>
        </div>
        <div className="py-5">
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              Tratamiento a largo plazo:
            </Typography>
            <Typography component="h6" className="ml-1">
              No
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography component="h6" className="font-bold">
              TE:
            </Typography>
            <Typography component="h6" className="ml-1">
              Lorem
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AppoinmentDetails;
