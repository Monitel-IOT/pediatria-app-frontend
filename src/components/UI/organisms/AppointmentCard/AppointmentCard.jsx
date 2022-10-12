import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from '../../../layout/Card/Card';
import IconButton from '../../atoms/IconButton/IconButton';
import Typography from '../../atoms/Typography/Typography';

const AppointmentCard = () => (
  <Card className="mt-4 hover:bg-blue-50">
    <div className="divide-y divide-solid sm:divide-x sm:divide-y-0 sm:flex">
      <div className="flex justify-between py-5 flex-wrap">
        <div className="flex items-center mr-2">
          <Typography component="h6" className="font-bold">
            Diagnostico:
          </Typography>
          <Typography component="h6" className="ml-1">
            Lorem ipsum dolor sit amet, consectetur
          </Typography>
        </div>
        <div className="flex items-center mr-2">
          <Typography component="h6" className="font-bold">
            Tratamiento:
          </Typography>
          <Typography component="h6" className="ml-1">
            Lorem ipsum dolor sit amet, consectetur
          </Typography>
        </div>
      </div>
      <div className="py-4 sm:px-4 sm:py-0 sm:flex sm:items-center">
        <div className="flex items-center mr-2">
          <Typography component="h6" className="font-bold">
            Fecha:
          </Typography>
          <Typography component="h6" className="ml-1">
            24/07/2022
          </Typography>
        </div>
      </div>
      <div className=" sm:px-4 flex justify-center sm:flex-col sm:items-center">
        <IconButton outline="green" icon={<FontAwesomeIcon icon={faEye} />} />
      </div>
    </div>
  </Card>
);

export default AppointmentCard;
