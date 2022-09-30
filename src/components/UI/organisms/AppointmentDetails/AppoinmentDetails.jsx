import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '../../atoms/Typography/Typography';
import Card from '../../../layout/Card/Card';

const AppoinmentDetails = () => {
  const { idAppointment } = useParams();
  return (
    <div>
      <Card className="my-4 divide-y">
        <Typography component="h6" className="font-bold uppercase mr-2 mb-2 text-blue-main-500">
          Detalles de la Atención
          {' '}
          {idAppointment}
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
              30/09/2022
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
                34 Kg / %
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                Talla:
              </Typography>
              <Typography component="h6" className="ml-1">
                72 cm / %
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                PC:
              </Typography>
              <Typography component="h6" className="ml-1">
                80 cm
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                IMC:
              </Typography>
              <Typography component="h6" className="ml-1">
                80 / %
              </Typography>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                FR:
              </Typography>
              <Typography component="h6" className="ml-1">
                34 x min
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                FC:
              </Typography>
              <Typography component="h6" className="ml-1">
                34 x min
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                Sat:
              </Typography>
              <Typography component="h6" className="ml-1">
                80 %
              </Typography>
            </div>
            <div className="flex items-center justify-between">
              <Typography component="h6" className="font-bold">
                Temp:
              </Typography>
              <Typography component="h6" className="ml-1">
                80 °C
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
          <div className="mt-2">
            <Typography component="h6" className="font-bold mr-2 mb-1 text-gray-600">
              Exámenes Auxiliares:
            </Typography>
            <Typography component="h6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis distinctio excepturi
              iure facere repellendus ratione soluta ad ex tenetur delectus
            </Typography>
          </div>
          <div className="mt-2">
            <Typography component="h6" className="font-bold mr-2 mb-1 text-gray-600">
              Tratamiento:
            </Typography>
            <Typography component="h6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis distinctio excepturi
              iure facere repellendus ratione soluta ad ex tenetur delectus
            </Typography>
          </div>
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
