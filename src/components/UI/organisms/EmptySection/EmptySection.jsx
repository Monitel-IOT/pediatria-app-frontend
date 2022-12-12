import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';

const EmptySection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col">
      <FontAwesomeIcon icon={faList} className="text-[3rem] text-gray-600" />
      <Typography component="h4" className="uppercase text-gray-600 my-4">
        No se ha agregado aun ningún paciente
      </Typography>
      <Button
        primary
        uppercase
        className="ml-2"
        onClick={() => navigate('/nuevo-paciente')}
      >
        Nuevo Paciente
      </Button>
    </div>
  );
};

export default EmptySection;
