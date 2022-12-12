import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenNib } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../atoms/IconButton/IconButton';
import Typography from '../../atoms/Typography/Typography';

import Card from '../../../layout/Card/Card';

const PatientCard = ({ patient }) => {
  const navigate = useNavigate();
  return (
    <Card className="mt-4 hover:bg-blue-50" onClick={() => navigate(`/paciente/${patient.id}`)}>
      <div className="divide-y divide-solid sm:divide-x sm:divide-y-0 sm:flex">
        <div className="pb-4 sm:pb-0 sm:mr-auto">
          <Typography component="h5" className="font-bold mb-2 text-gray-600">
            {`${patient.nombre} ${patient.apellidos}`}
          </Typography>
          <Typography component="h6" className="uppercase mt-2 font-bold text-gray-600">
            Fecha de Nacimiento:
          </Typography>
          <Typography component="p">
            {patient.fechaNacimiento}
          </Typography>
          <Typography component="h6" className="uppercase font-bold text-gray-600">
            DNI:
          </Typography>
          <Typography component="p">
            {patient.dni}
          </Typography>
        </div>
        <div className="py-4 sm:px-4 sm:py-0 sm:flex sm:items-end">
          <div>
            <Typography component="h6" className="uppercase font-bold text-gray-600">
              Fecha de creación
            </Typography>
            <Typography component="p">
              {patient.fechaCreacion}
            </Typography>
          </div>
        </div>
        <div className="pt-4 sm:pt-0 sm:px-4 flex justify-end sm:flex-col sm:items-center">
          <IconButton outline="gray" className="!px-3 !py-2 mr-2 sm:mr-0 sm:mb-2" icon={<FontAwesomeIcon icon={faPenNib} />} />
          <IconButton outline="danger" className="!px-3 !py-2" icon={<FontAwesomeIcon icon={faTrashCan} />} />
        </div>
      </div>
    </Card>
  );
};

PatientCard.propTypes = {
  patient: PropTypes.shape({
    id: PropTypes.string,
    nombre: PropTypes.string,
    apellidos: PropTypes.string,
    dni: PropTypes.string,
    fechaNacimiento: PropTypes.string,
    fechaCreacion: PropTypes.string,
  }),
};

export default PatientCard;
