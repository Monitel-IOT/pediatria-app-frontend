import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../layout/Card/Card';
import IconButton from '../../atoms/IconButton/IconButton';
import Typography from '../../atoms/Typography/Typography';

const AppointmentCard = ({ data }) => (
  <Card key={data.createdAt} className="mt-4 hover:bg-blue-50">
    <div className="divide-y divide-solid sm:divide-x sm:divide-y-0 sm:flex">
      <div className="flex justify-between py-5 flex-wrap">
        <div className="flex items-center mr-2">
          <Typography component="h6" className="font-bold">
            Diagnostico:
          </Typography>
          {
            data.diagnosis?.map((item) => (
              <Typography key={item.diagnosticName} component="h6" className="ml-1">
                {item.diagnosticName}
              </Typography>
            ))
            }
        </div>
        <div className="flex items-center mr-2">
          <Typography component="h6" className="font-bold">
            Tratamiento:
          </Typography>
          {
            data.treatment?.map((item) => (
              <Typography key={item.nameTreatment} component="h6" className="ml-1">
                {item.nameTreatment}
              </Typography>
            ))
            }
        </div>
      </div>
      <div className="py-4 sm:px-4 sm:py-0 sm:flex sm:items-center">
        <div className="flex items-center mr-2">
          <Typography component="h6" className="font-bold">
            Fecha:
          </Typography>
          <Typography component="h6" className="ml-1">
            {
              data.createdAt
              }
          </Typography>
        </div>
      </div>
      <div className=" sm:px-4 flex justify-center sm:flex-col sm:items-center">
        <IconButton outline="green" icon={<FontAwesomeIcon icon={faEye} />} />
      </div>
    </div>
  </Card>
);

AppointmentCard.propTypes = {
  data: PropTypes.shape({
    createdAt: PropTypes.string,
    diagnosis: PropTypes.arrayOf(
      PropTypes.shape({
        diagnosticName: PropTypes.string,
      }),
    ),
    treatment: PropTypes.arrayOf(
      PropTypes.shape({
        nameTreatment: PropTypes.string,
      }),
    ),
  }),
};

export default AppointmentCard;
