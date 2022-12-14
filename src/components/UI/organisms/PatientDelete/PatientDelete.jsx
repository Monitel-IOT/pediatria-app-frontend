import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import { closeDeleteModal, deletePatientStateBy } from '../../../../state/patients/patientsSlice';
import { deletePatientsById } from '../../../../thunkAction/patients/patientsThunk';

const PatientDelete = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const { patientIdToDelete } = useSelector((state) => state.patientsReducer);
  const { deletePatientLoading } = useSelector((state) => state.deletePatientReducer);

  const handleDeletePatient = () => {
    dispatch(deletePatientsById({ id: patientIdToDelete, token: user?.token }))
      .then(() => {
        dispatch(deletePatientStateBy(patientIdToDelete));
        dispatch(closeDeleteModal());
      });
  };
  return (
    <div className="p-4">
      <div className="flex items-center justify-center">
        <FontAwesomeIcon icon={faTriangleExclamation} className="text-6xl text-rose-500" />
      </div>
      <Typography component="h3" className="text-center mt-6 w-[400px] uppercase text-gray-600">¿Deseas eliminar el paciente de tu registro?</Typography>
      <div className="flex items-center justify-center mt-6">
        <Button
          outline="danger"
          className="mr-6"
          onClick={() => dispatch(closeDeleteModal())}
        >
          Cancelar
        </Button>
        <Button
          danger
          onClick={handleDeletePatient}
        >
          {deletePatientLoading ? 'Eliminando...' : 'Eliminar'}
        </Button>
      </div>
    </div>
  );
};

export default PatientDelete;
