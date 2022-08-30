import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import Typography from '../../UI/atoms/Typography/Typography';
import Table from '../../UI/organisms/Table/Table';
import Button from '../../UI/atoms/Button/Button';
import AppointmentContainer from '../../UI/organisms/AppointmentContainer/AppointmentContainer';
import AppointmentCardContainer from '../../UI/organisms/AppointmentsCard/AppointmentCard';

const data = {
  head: ['Tratamiento', 'Fecha de inicio', 'Tiempo', 'Estado'],
  body: [
    {
      tratamiento: 'Diabates',
      fechaDeInicio: '14/05/22',
      tiempo: '3 años',
      estado: 'Activo',
    },
    {
      tratamiento: 'Diabates',
      fechaDeInicio: '14/05/22',
      tiempo: '9 años',
      estado: 'Activo',
    },
    {
      tratamiento: 'Diabates',
      fechaDeInicio: '14/05/22',
      tiempo: '2 años',
      estado: 'Activo',
    },
  ],
};

const ViewPatientPage = () => (
  <div className="max-w-3xl min-h-screen">
    <div>
      <div className="card p-5 flex flex-col h-[65vh] 3xl:h-[90vh]">
        <div className="flex flex-row justify-between p-2">
          <Typography component="h3">Todas las Atenciones</Typography>
          <div>
            <Button primary>+ Nueva atención</Button>
          </div>
        </div>
        <AppointmentContainer>
          <AppointmentCardContainer>
            <div className="flex flex-row col-span-3">
              <Typography component="h4">Diagnóstico</Typography>
              <Typography component="p" className="pl-3">Bronquitis</Typography>
            </div>
            <div className="flex flex-row">
              <Typography component="h4">Fecha</Typography>
              <Typography component="p" className="pl-3">24/05/22</Typography>
            </div>
            <div className="flex flex-row col-span-3">
              <Typography component="h4">Tratamiento</Typography>
              <Typography component="p" className="pl-3">Descansar, tomar líquidos y tomar acetaminofén para bajar la fiebre.</Typography>
            </div>
            <div className="flex flex-row justify-end">
              <Button>
                <FontAwesomeIcon icon={faEye} />
                <span> Ver más</span>
              </Button>
            </div>
          </AppointmentCardContainer>
          <AppointmentCardContainer>
            <div className="flex flex-row col-span-3">
              <Typography component="h4">Diagnóstico</Typography>
              <Typography component="p" className="pl-3">Bronquitis</Typography>
            </div>
            <div className="flex flex-row">
              <Typography component="h4">Fecha</Typography>
              <Typography component="p" className="pl-3">24/05/22</Typography>
            </div>
            <div className="flex flex-row col-span-3">
              <Typography component="h4">Tratamiento</Typography>
              <Typography component="p" className="pl-3">Descansar, tomar líquidos y tomar acetaminofén para bajar la fiebre.</Typography>
            </div>
            <div className="flex flex-row justify-end">
              <Button>
                <FontAwesomeIcon icon={faEye} />
                <span> Ver más</span>
              </Button>
            </div>
          </AppointmentCardContainer>
          <AppointmentCardContainer>
            <div className="flex flex-row col-span-3">
              <Typography component="h4">Diagnóstico</Typography>
              <Typography component="p" className="pl-3">Bronquitis</Typography>
            </div>
            <div className="flex flex-row">
              <Typography component="h4">Fecha</Typography>
              <Typography component="p" className="pl-3">24/05/22</Typography>
            </div>
            <div className="flex flex-row col-span-3">
              <Typography component="h4">Tratamiento</Typography>
              <Typography component="p" className="pl-3">Descansar, tomar líquidos y tomar acetaminofén para bajar la fiebre.</Typography>
            </div>
            <div className="flex flex-row justify-end">
              <Button>
                <FontAwesomeIcon icon={faEye} />
                <span> Ver más</span>
              </Button>
            </div>
          </AppointmentCardContainer>
          <AppointmentCardContainer>
            <div className="flex flex-row col-span-3">
              <Typography component="h4">Diagnóstico</Typography>
              <Typography component="p" className="pl-3">Bronquitis</Typography>
            </div>
            <div className="flex flex-row">
              <Typography component="h4">Fecha</Typography>
              <Typography component="p" className="pl-3">24/05/22</Typography>
            </div>
            <div className="flex flex-row col-span-3">
              <Typography component="h4">Tratamiento</Typography>
              <Typography component="p" className="pl-3">Descansar, tomar líquidos y tomar acetaminofén para bajar la fiebre.</Typography>
            </div>
            <div className="flex flex-row justify-end">
              <Button>
                <FontAwesomeIcon icon={faEye} />
                <span> Ver más</span>
              </Button>
            </div>
          </AppointmentCardContainer>
          <AppointmentCardContainer>
            <div className="flex flex-row col-span-3">
              <Typography component="h4">Diagnóstico</Typography>
              <Typography component="p" className="pl-3">Bronquitis</Typography>
            </div>
            <div className="flex flex-row">
              <Typography component="h4">Fecha</Typography>
              <Typography component="p" className="pl-3">24/05/22</Typography>
            </div>
            <div className="flex flex-row col-span-3">
              <Typography component="h4">Tratamiento</Typography>
              <Typography component="p" className="pl-3">Descansar, tomar líquidos y tomar acetaminofén para bajar la fiebre.</Typography>
            </div>
            <div className="flex flex-row justify-end">
              <Button>
                <FontAwesomeIcon icon={faEye} />
                <span> Ver más</span>
              </Button>
            </div>
          </AppointmentCardContainer>
        </AppointmentContainer>
        <div className="card p-5 flex flex-col">
          <Typography component="h3">Tratamiento Largo</Typography>
          <Table data={data} />
        </div>
      </div>
    </div>
  </div>
);

export default ViewPatientPage;
