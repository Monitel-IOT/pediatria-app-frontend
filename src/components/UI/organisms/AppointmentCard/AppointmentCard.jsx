import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../layout/Card/Card';
import IconButton from '../../atoms/IconButton/IconButton';
import Typography from '../../atoms/Typography/Typography';
import { deleteAppointmentByIdAPI } from '../../../../thunkAction/appointments/appointmentsThunk';
import { deleteAppointmentFromListState } from '../../../../state/appointments/appointmentsSlice';

const AppointmentCard = ({ data }) => {
  const dispatch = useDispatch();
  const { idPatient } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authReducer);

  const handleDeleteAppointment = (e, idAppointment) => {
    e.stopPropagation();
    dispatch(deleteAppointmentByIdAPI({ idAppointment, token: user?.token }))
      .then(() => {
        dispatch(deleteAppointmentFromListState(idAppointment));
      });
  };

  return (
    <Card key={data.createdAt} className="mt-4 hover:bg-blue-50" onClick={() => navigate(`/paciente/${idPatient}/atencion/${data.idAppointment}`)}>
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
          <IconButton
            outline="gray"
            className="!px-4 !py-0.5 my-1"
            icon={<FontAwesomeIcon icon={faPenNib} />}
          />
          <IconButton
            className="!px-4 !py-0.5 my-1"
            outline="danger"
            size="normal no padding"
            icon={<FontAwesomeIcon size="lg" icon={faTrash} />}
            onClick={(e) => handleDeleteAppointment(e, data.idAppointment)}
          />
        </div>
      </div>
    </Card>
  );
};

AppointmentCard.propTypes = {
  data: PropTypes.shape({
    createdAt: PropTypes.string,
    idAppointment: PropTypes.string,
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
